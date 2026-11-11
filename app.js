var list = document.getElementById("list");
var sold = JSON.parse(localStorage.getItem("sold") || "{}");

function save() {
  localStorage.setItem("sold", JSON.stringify(sold));
}

function render() {
  list.innerHTML = "";
  ITEMS.forEach(function (item, i) {
    var s = sold[i] || 0;
    var div = document.createElement("div");
    div.innerHTML = "<b>" + item.name + "</b><br>بعت " + s +
      " من " + item.q + " · باقي " + Math.max(0, item.q - s) + "<br>";
    var btn = document.createElement("button");
    btn.textContent = "+1";
    btn.onclick = function () {
      sold[i] = s + 1;
      save();
      render();
    };
    div.appendChild(btn);
    list.appendChild(div);
  });
}

render();

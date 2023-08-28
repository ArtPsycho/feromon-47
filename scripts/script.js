function change_text () {
  document.getElementById("description").innerHTML = "60 мл — для тех, кто ещё сомневается, но все же хочет опробовать новый аромат с его тёплым и обволакивающим манифестом.";
  document.getElementById("image").src="./images/product-card_2.jpg";
  document.getElementById("link-first").href="#0";
  document.getElementById("link-second").href="#0";
}

function return_text() {
  document.getElementById("description").innerHTML = "100 мл — для тех, кто уже знаком с ароматами данного типа и предпочитает провести весь период холодного времени года бодрым и в тепле.";
  document.getElementById("image").src="./images/product-card_1.jpg";
  document.getElementById("link-first").href="#0";
  document.getElementById("link-second").href="#0";
}
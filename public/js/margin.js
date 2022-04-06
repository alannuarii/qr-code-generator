const customRange3 = document.getElementById("customRange3");
const selectmargin = document.getElementById("selectmargin");

customRange3.onchange = function isimargin(event) {
  selectmargin.innerHTML = event.target.value;
};

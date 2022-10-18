$(document).ready(function () {
  $("#total-cost-text").text(localStorage.getItem("Budget"));
  let form = $("#wf-form-From-scratch-form");
  addHiddenFormElements(form);
});

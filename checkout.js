$(document).ready(function () {
  if (localStorage.getItem("Person") == "Myself") {
    $("#email").val(localStorage.getItem("Email"));
  } else {
    $("#their-email").val(localStorage.getItem("Email"));
  }
});

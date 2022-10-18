function isEmptyDiv(el) {
  return !$.trim(el.html());
}

function disableNextButtons() {
  $(".next-botton").prop("disabled", true);
}

function enableButton(button) {
  button.prop("disabled", false);
}

function isValidForm(form) {
  form.find("input").each(function () {
    if ($(this).prop("required")) {
      console.log("required");
      console.log($(this).val());
      if ($(this).val() === "") {
        return false;
      }
    }
  });
  return true;
}

function addHiddenFormElements(form) {
  var keys = Object.keys(localStorage);
  for (let key of keys) {
    var value = localStorage.getItem(key);
    var node =
      '<input type="hidden" name="' + key + '" value="' + value + '"/>';
    form.append(node);
  }
}

function disableLinkClick(element) {
  element.bind("click", function (event) {
    return false;
  });
}

function enableLinkClick(element) {
  element.unbind("click");
}

function showNextSection(selector) {
  $(selector.find(".next-section-link").attr("href")).css("display", "block");
}

function showOnlyThankyouSection(thankyouSelector) {
  var id = thankyouSelector.attr("id");
  $(".new-section")
    .not("#" + id)
    .css("display", "none");
}

function saveFormToLocalStorage() {
  $(".new-section:visible")
    .find("form :input")
    .each(function () {
      if ($(this).attr("name") !== undefined) {
        var key = adaptInputName($(this).attr("name"));
        var val = $(this).val();
        if (val !== "") {
          localStorage.setItem(key, val);
        }
      }
    });
}

function adaptInputName(inputName) {
  return capitalizeFirstLetter(inputName.split("-").join(" "));
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

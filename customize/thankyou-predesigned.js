var thankyouPredesignedSelector;

function thankyouPredesignedSetup() {
  thankyouPredesignedSelector = $("#thank-you-predesigned");

  thankyouPredesignedSelector
    .find(".checkout-button")
    .attr("href", location.origin + "/checkout");

  saveFormToLocalStorage();
  addHiddenFormElements(thankyouPredesignedSelector.find("form"));

  thankyouPredesignedSelector.find(".checkout-button").click(function () {
    thankyouPredesignedSelector.find("form").submit();
  });
}

var step10Selector;

function step10Setup() {
  step10Selector = $("#step10");

  step10Selector.find("input").change(function () {
    if (step10Selector.find("form").validate().checkForm()) {
      step10Selector.find(".form-wrapper").removeClass("is--off");
    }
  });

  // form

  step10Selector
    .find('input[name="engrave-message-field"]')
    .on("input", function () {
      if (
        step10Selector.find('input[name="engrave-message-field"]').val()
          .length > 0
      ) {
        step10Selector
          .find('input[name="engrave-message-radio"]')
          .prop("checked", false);
        step10Selector
          .find('input[name="engrave-message-radio"]')
          .attr("disabled", true);
        step10Selector
          .find('input[name="engrave-message-radio"]')
          .prev()
          .removeClass("w--redirected-checked");
        step10Selector
          .find('input[name="engrave-message-radio"]')
          .prop("required", false);
        step10Selector
          .find('input[name="engrave-message-field"]')
          .prop("required", true);
      } else {
        step10Selector
          .find('input[name="engrave-message-radio"]')
          .attr("disabled", false);
        step10Selector
          .find('input[name="engrave-message-radio"]')
          .prop("required", true);
        step10Selector
          .find('input[name="engrave-message-field"]')
          .prop("required", false);
      }
    });

  step10Selector
    .find(".next-section-link")
    .attr("href", "#thank-you-predesigned");

  $(".final-product-stones").text(stoneNumber);
  $(".item-thickness").text(ringSize);

  clonePieceImage();

  // calculate final product price
  piecePrice = calculateFinalPrice();
  localStorage.setItem("Price", piecePrice);
  $("#final-cost-text").text("AED " + piecePrice);
  $(".cost-price-2").text("AED " + piecePrice);

  step10Selector.find(".next-botton").click(function () {
    if (!step10Selector.find("form").validate().checkForm()) {
      return false;
    }

    engraveMessage = $('input[name="engrave-message-field"]').val();
    //localStorage.setItem("Engrave Message", engraveMessage);

    thankyouPredesignedSetup();
    showNextSection(step10Selector);
    step10Selector.find(".next-section-link").click();
  });
}

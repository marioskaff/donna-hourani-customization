var step8Selector;

function step8Setup() {
  step8Selector = $("#step8");

  step8Selector.find("input").change(function () {
    step8Selector.find(".form-wrapper").removeClass("is--off");
  });

  step8Selector.find(".next-botton").click(function () {
    if (!step8Selector.find("form").validate().checkForm()) {
      return false;
    }

    var value = step8Selector
      .find('input[name="stones-number-radio"]:checked')
      .closest(".itemgem")
      .find(".numbers")
      .text();
    // localStorage.setItem("Stone Number", value);

    stoneNumber = value;

    step8Selector.find('input[name="stones-number-radio"]').val(stoneNumber);

    showNextSection(step8Selector);
    step9Setup();
    step8Selector.find(".next-section-link").click();
  });
}

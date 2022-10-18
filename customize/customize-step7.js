var step7Selector;

function step7Setup() {
  step7Selector = $("#step7");

  step7Selector.find("input").change(function () {
    step7Selector.find(".form-wrapper").removeClass("is--off");
  });

  step7Selector.find(".size-option").click(function () {
    step7Selector.find(".size-option").removeClass("is--default");
    $(this).addClass("is--default");

    // swap between inches and cm
    if ($(this).text() === "inches") {
      step7Selector.find(".c-list-sizes.inches").css("display", "flex");
      step7Selector.find(".c-list-sizes.cm").css("display", "none");
    } else {
      step7Selector.find(".c-list-sizes.cm").css("display", "flex");
      step7Selector.find(".c-list-sizes.inches").css("display", "none");
    }
  });

  step7Selector.find('input[name="ring-size-field"]').on("input", function () {
    if (step7Selector.find('input[name="ring-size-field"]').val().length > 0) {
      step7Selector
        .find('input[name="ring-size-radio"]')
        .prop("checked", false);
      step7Selector
        .find('input[name="ring-size-radio"]')
        .attr("disabled", true);
      step7Selector
        .find('input[name="ring-size-radio"]')
        .prev()
        .removeClass("w--redirected-checked");
      step7Selector
        .find('input[name="ring-size-radio"]')
        .prop("required", false);
      step7Selector
        .find('input[name="ring-size-field"]')
        .prop("required", true);
    } else {
      step7Selector
        .find('input[name="ring-size-radio"]')
        .attr("disabled", false);
      step7Selector
        .find('input[name="ring-size-radio"]')
        .prop("required", true);
      step7Selector
        .find('input[name="ring-size-field"]')
        .prop("required", false);
    }
  });

  step7Selector.find(".next-botton").click(function () {
    if (!step7Selector.find("form").validate().checkForm()) {
      return false;
    }

    var value;
    if (step7Selector.find('input[name="ring-size-field"]').val().length > 0) {
      value = step7Selector.find('input[name="ring-size-field"]').val();
    } else {
      value = step7Selector.find('input[name="ring-size-radio"]:checked').val();
    }

    unit = step7Selector.find(".size-option.is--default").text();
    ringSize = value + " " + unit;

    if (unit === "cm") {
      ringSizeEuropean = cmToEuropean(value);
    } else if (unit === "inches") {
      ringSizeEuropean = inchToEuropean(value);
    }
    console.log(ringSizeEuropean);

    // localStorage.setItem("Size", ringSize);

    showNextSection(step7Selector);
    step7Selector.find(".next-section-link").click();
  });
}

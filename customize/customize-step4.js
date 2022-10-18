var step4Selector = $("#step4");

function step4Setup() {
  step4Selector.find("input").change(function () {
    step4Selector.find(".form-wrapper").removeClass("is--off");
  });

  step4Selector.find(".next-botton").click(function () {
    if (!step4Selector.find("form").validate().checkForm()) {
      return false;
    }

    let value = step4Selector
      .find("input[name='customization-type']:checked")
      .val();

    // localStorage.setItem("Customization type", value);

    if (value === "Pre-designed") {
      step4Selector
        .find(".next-section-link")
        .attr("href", "#step5-predesigned");
    } else if (value === "From Scratch") {
      step4Selector.find(".next-section-link").attr("href", "#step5-scratch");
    }

    showNextSection(step4Selector);
    step4Selector.find(".next-section-link").click();
  });
}

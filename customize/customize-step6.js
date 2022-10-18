var step6Selector;

function step6Setup() {
  step6Selector = $("#step6");

  step6Selector.find(".back-botton").attr("href", "#step5-predesigned");

  step6Selector.find("input").change(function () {
    step6Selector.find(".form-wrapper").removeClass("is--off");

    var value = $(this).val();
    //localStorage.setItem("Shade", value);
    value = value === "rose" ? "pink" : value;

    step6Selector.find(".shade").find(".image-63").css("display", "none");
    step6Selector
      .find(".shade")
      .find(".image-63")
      .each(function () {
        if ($(this).attr("src").includes(value.toUpperCase())) {
          $(this).css("display", "block");
        }
      });
  });

  //step6Selector.find("input[name='shade-radio']").eq(0).prop("checked", true);
  step6Selector.find(".next-botton").click(function () {
    if (!step6Selector.find("form").validate().checkForm()) {
      return false;
    }

    var value = step6Selector.find("input[name='shade-radio']:checked").val();
    //localStorage.setItem("Shade", value);
    shade = value === "rose" ? "pink" : value;

    if (!pieceType.includes("ring")) {
      // skip ring size page
      step6Selector.find(".next-section-link").attr("href", "#step8");
    }

    showNextSection(step6Selector);
    step6Selector.find(".next-section-link").click();
  });

  step6Selector.find("input[name='shade-radio']").change(function () {
    step6Selector.find("div.image-color").removeClass("default");
    step6Selector.find(this).closest("div.image-color").addClass("default");
  });
}

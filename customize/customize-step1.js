var step1Selector = $(".new-section#step1");

$(document).ready(function () {
  // clear local storage
  localStorage.clear();

  step1Selector.find("input[name='person']").change(function () {
    var value = $(this).val();
    // localStorage.setItem("Person", value);

    if (value === "Myself") {
      step1Selector.find(".next-section-link").attr("href", "#step2-my-self");
    } else if (value === "Someone Else") {
      step1Selector
        .find(".next-section-link")
        .attr("href", "#step2-somebody-else");
    }

    step1Selector.find(".form-wrapper").removeClass("is--off");
  });

  step1Selector.find(".next-botton").click(function () {
    if (!step1Selector.find("form").validate().checkForm()) {
      return false;
    }
    step2Setup();
    showNextSection(step1Selector);
    step1Selector.find(".next-section-link").click();
  });
});

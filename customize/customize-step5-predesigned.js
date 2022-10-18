var step5PredseignedSelector = $("#step5-predesigned");

$(document).ready(function () {
  step5PredseignedSelector.find("input").change(function () {
    step5PredseignedSelector.find(".form-wrapper").removeClass("is--off");
  });

  step5PredseignedSelector.find(".next-botton").click(function () {
    if (!step5PredseignedSelector.find("form").validate().checkForm()) {
      return false;
    }

    isStep9Initialized = false;

    var name = step5PredseignedSelector
      .find("input[name='piece-type']:checked")
      .parent()
      .find(".option-text")
      .text();
    // localStorage.setItem("Piece name", name);
    pieceName = name;

    var slug = step5PredseignedSelector
      .find("input[name='piece-type']:checked")
      .parent()
      .find(".piece-slug")
      .text();
    // localStorage.setItem("Piece type", slug);
    pieceType = slug;

    step5PredseignedSelector.find("input[name='piece-type']").val(pieceName);

    var url =
      location.origin +
      "/custom-jewelries/" +
      slug +
      " #step6,#step7,#step8,#step9,#step10";
    $(".empty-section").load(url, function () {
      step6Setup();
      step7Setup();
      step8Setup();
      step5PredseignedSelector
        .find(".next-section-link")
        .attr("href", "#step6");

      showNextSection(step5PredseignedSelector);
      step5PredseignedSelector.find(".next-section-link").click();
    });
  });
});

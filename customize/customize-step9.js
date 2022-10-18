var step9Selector;
var step9CloneSelector;

function step9Setup() {
  step9Selector = $("#step9");

  // clone step9 to be able to reset
  if (isEmptyDiv($(".step9-clone"))) {
    step9Selector.clone().appendTo(".step9-clone");
    $(".step9-clone").find("#step9").attr("id", "step9-clone");
    step9CloneSelector = $("#step9-clone");
  } else {
    step9Selector.remove();
    step9CloneSelector.clone().insertAfter(step8Selector);
    step8Selector.next().attr("id", "step9");
    step9Selector = $("#step9");
  }

  step9Selector.find(".text-block-22").text(ringSize);
  step9Selector.find(".text-block-23").text(stoneNumber);
  var imgSrc1 = shade.toUpperCase() + "-" + stoneNumber;
  var imgSrc2 = stoneNumber + "-STONES-" + shade.toUpperCase();
  step9Selector.find(".piece-image").css("display", "none");
  step9Selector.find(".piece-image").each(function () {
    var image = $(this).find(".image-60").eq(0);
    if (
      image.attr("src").includes(imgSrc1) ||
      image.attr("src").includes(imgSrc2)
    ) {
      $(this).css("display", "block");
    }
  });

  // setup stones and drag and drop only once

  placeStones(pieceType, stoneNumber);
  setupDragAndDrop();

  step9Selector.find(".next-botton").click(function () {
    step10Setup();
    showNextSection(step9Selector);
    step9Selector.find(".next-section-link").click();
  });
}

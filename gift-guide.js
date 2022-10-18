$(document).ready(function () {
  $(".gradient-bg").each(function () {
    var month = $(this).find(".heading-12-copy").text().toLowerCase();
    var emptyColorsWrapper = $(this).parent().find(".empty-colors-wrapper");
    var url =
      location.origin +
      "/birthstones/" +
      month +
      " .color-availability-wrapper.w-dyn-list";
    emptyColorsWrapper.load(url, function () {
      var availableColorsWrapper = $(this)
        .parent()
        .find(".available-colors-wrapper");
      availableColorsWrapper.each(function (index) {
        $(this).append(
          emptyColorsWrapper
            .find(".color-availability-wrapper.w-dyn-list")
            .eq(index)
        );
      });
    });
    emptyColorsWrapper.css("display", "none");
  });
});

function inchToCm(inchSize) {
  return inchSize * 2.54;
}

function cmToInch(cmSize) {
  return cmSize / 2.54;
}

function cmToEuropean(cmSize) {
  var inch = cmToInch(cmSize);
  var european;
  $(".c-list-sizes-inch-european .c-size").each(function () {
    if (inch === $(this).find(".inches").eq(0).text()) {
      european = $(this).find(".european").eq(0).text();
    }
  });
  return european;
}

function inchToEuropean(inchSize) {
  var european;
  $(".c-list-sizes-inch-european .c-size").each(function () {
    if (inchSize === $(this).find(".inches").eq(0).text()) {
      european = $(this).find(".european").eq(0).text();
    }
  });
  return european;
}

// ------------------- BEGIN - Step 5 From scratch ----------------------
function fillSizesCm() {
  $(".piece-size-inch").each(function () {
    $("#piece-sizes-cm-div").append(
      '<p class="piece-size-cm">' + inchToCm(Number($(this).text())) + "</p>"
    );
  });
}

function filterSizeByUnit(unit) {
  $('select[name="size"]').empty().append(new Option("Select one...", ""));
  if (unit === "inches") {
    $(".piece-size-inch").each(function () {
      $('select[name="size"]').append(
        new Option($(this).text(), $(this).text())
      );
    });
  } else if (unit === "cm") {
    $(".piece-size-cm").each(function () {
      $('select[name="size"]').append(
        new Option($(this).text(), $(this).text())
      );
    });
  }
}
// ------------------- END - Step 5 From scratch ----------------------

// ------------------- BEGIN - Step 7 Pre-designed ----------------------

function fillSizesCmTable() {
  $(".c-list-sizes.cm")
    .find(".sizes-text")
    .each(function () {
      let cm = inchToCm($(this).text());
      $(this).text(cm);
    });
}

function swapUnitsTable() {
  let cmZIndex = $(".c-list-sizes.cm").css("z-index");
  let inchZIndex = $(".c-list-sizes.inches").css("z-index");
  $(".c-list-sizes.cm").css("z-index", inchZIndex);
  $(".c-list-sizes.inches").css("z-index", cmZIndex);
}

// ------------------- END - Step 7 Pre-designed ----------------------

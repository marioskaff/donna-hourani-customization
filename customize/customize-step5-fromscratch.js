var step5FromScratchSelector = $("#step5-scratch");

$(document).ready(function () {
  step5FromScratchSelector.find("input").change(function () {
    if (step5FromScratchSelector.find("form").validate().checkForm()) {
      step5FromScratchSelector.find(".form-wrapper").removeClass("is--off");
    }
  });

  fillSelectOptions();
  fillSizesCm();
  filterSizeByUnit("inches");

  $(".size-option").click(function () {
    $(".size-option").removeClass("is--default");
    $(this).addClass("is--default");
    filterSizeByUnit($(this).text());
  });

  step5FromScratchSelector.find(".next-botton").click(function () {
    if (!step5FromScratchSelector.find("form").valid()) {
      return false;
    }

    const piece = step5FromScratchSelector.find("select[name='piece']").val();
    const stoneNumber = step5FromScratchSelector
      .find("select[name='stone-number']")
      .val();

    let gemstones = "";
    $("select[name='gemstones']")
      .val()
      .forEach(function (value) {
        gemstones += value + ",";
      });
    gemstones = gemstones.slice(0, -1);

    const engraveMessage = step5FromScratchSelector
      .find("textarea[name='engrave-message']")
      .val();
    const shade = step5FromScratchSelector.find("select[name='shade']").val();
    const size = step5FromScratchSelector.find("select[name='size']").val();
    const unit = step5FromScratchSelector
      .find(".size-option.is--default")
      .text();
    const budget = step5FromScratchSelector.find("input[name='budget']").val();

    const sizeUnit = size + " " + unit;

    // localStorage.setItem("Piece", piece);
    // localStorage.setItem("Stone Number", stoneNumber);
    // localStorage.setItem("Gemstones", gemstones);
    // localStorage.setItem("Engrave Message", engraveMessage);
    // localStorage.setItem("Shade", shade);
    // localStorage.setItem("Size", sizeUnit);
    // localStorage.setItem("Budget", budget);

    saveFormToLocalStorage();

    showNextSection(step5FromScratchSelector);
    step5FromScratchSelector.find(".next-section-link").click();
    var thankyouScratchSelector = $("#thank-you-scratch");
    showOnlyThankyouSection(thankyouScratchSelector);

    addHiddenFormElements(thankyouScratchSelector.find("form"));
    thankyouScratchSelector.find("form").submit();
  });
});

function fillSelectOptions() {
  // Select all select boxes
  const selectBoxes = document.querySelectorAll("select");
  // loop through all select boxes
  selectBoxes.forEach((s) => {
    // get each select box's type attribute value
    let type = s.dataset.type;
    // get items container based on type value
    let itemsContainer = document.querySelector("#" + type);
    if (itemsContainer) {
      // select child divs from container
      let itemsContainerChildren = itemsContainer.querySelectorAll(
        ".w-dyn-item"
      );
      // convert to array
      let itemsContainerChildrenArray = Array.from(itemsContainerChildren);
      // loop over children to get items
      itemsContainerChildrenArray.forEach((child) => {
        let text = child.querySelector("div").textContent;
        // create option
        let newOption = new Option(text, text);
        // add option
        s.options.add(newOption);
      });
    }
  });
}

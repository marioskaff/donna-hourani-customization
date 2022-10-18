var step3Selector = $("#step3");

function step3Setup() {
  step3Selector.find("input").change(function () {
    if (step3Selector.find("form").validate().checkForm()) {
      step3Selector.find(".form-wrapper").removeClass("is--off");
    }
  });

  step3Selector.find($(".next-botton")).click(function () {
    if (!step3Selector.find("form").valid()) {
      return false;
    }

    const nameAndBirth = step3Selector
      .find($("input[name='name-and-birth']"))
      .val();
    const admiredGemstones = step3Selector
      .find($("input[name='admired-gemstones']"))
      .val();
    const relationship = step3Selector
      .find($("input[name='relationship']"))
      .val();
    const pieceStory = step3Selector
      .find($("textarea[name='piece-story']"))
      .val();

    // localStorage.setItem("Loved ones name and birth", nameAndBirth);
    // localStorage.setItem("Admired gemstones", admiredGemstones);
    // localStorage.setItem("Relationship", relationship);
    // localStorage.setItem("Piece story", pieceStory);

    step4Setup();
    showNextSection(step3Selector);
    step3Selector.find(".next-section-link").click();
  });
}

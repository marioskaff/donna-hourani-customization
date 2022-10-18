$(document).ready(function () {
  const piece = localStorage.getItem("Piece");
  const stoneNumber = localStorage.getItem("Stone Number");
  const gemstones = localStorage.getItem("Gemstones");
  const engraveMessage = localStorage.getItem("Engrave Message");
  const shade = localStorage.getItem("Shade");
  const size = localStorage.getItem("Size");
  const budget = localStorage.getItem("Budget");

  const pieceText = piece === "ring" ? piece + " " + size : piece;
  $("#piece-text").text(pieceText);
  $("#shade-text").text(shade);
  $("#stones-text").text(stoneNumber);
  $("#gemstones-text").text(gemstones);
  $("#engrave-message-text").text(engraveMessage);
  $("#total-cost-text").text(budget);

  $(".back-botton").click(function () {
    window.history.back();
  });

  $(".next-botton").click(function () {
    location.href = location.origin + "/customize/customize-step7";
  });
});

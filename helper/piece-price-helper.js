function calculatePiecePrice() {
  let price;
  if (
    $("#3-stones-price").text() === "" &&
    $("#ring-42-49-price").text() === ""
  ) {
    // use basic price if only value available
    price = $("#basic-price").text();
  } else if ($("#ring-42-49-price").text() === "") {
    // use stones price
    switch (stoneNumber) {
      case "3":
        price = $("#3-stones-price").text();
        break;
      case "4":
        price = $("#4-stones-price").text();
        break;
      case "5":
        price = $("#5-stones-price").text();
        break;
      default:
        price = $("#3-stones-price").text();
        break;
    }
  } else {
    // use ring sizes price
    let sizeCm;
    if (unit === "inches") {
      sizeCm = inchToCm(Number(ringSizeEuropean));
    }
    sizeCm = Number(ringSizeEuropean);
    if (sizeCm >= 42 && sizeCm <= 49) {
      price = $("#ring-42-49-price").text();
    } else if (sizeCm >= 50 && sizeCm <= 57) {
      price = $("#ring-50-57-price").text();
    } else if (sizeCm >= 58 && sizeCm <= 65) {
      price = $("#ring-58-65-price").text();
    } else {
      price = $("#ring-42-49-price").text();
    }
  }

  console.log(price);
  return Number(price);
}

function calculateStonesPrice() {
  let price = 0;
  step9Selector.find(".piece-image:visible").each(function () {
    $(this)
      .find(".image-16:visible")
      .each(function () {
        if ($(this).css("opacity") !== "0") {
          price += parseInt($(this).attr("price"));
        }
      });
  });

  console.log(price);
  return price;
}

function getStonePrice(
  imgSrc,
  family1Price,
  family2Price,
  family3Price,
  family4Price
) {
  imgSrc = imgSrc.toLowerCase();
  // family 1
  if (
    amethystFamily.filter((stone) => imgSrc.includes(stone.toLowerCase()))
      .length > 0
  ) {
    return family1Price;
  }
  // family 2
  else if (
    tourmalineFamily.filter((stone) => imgSrc.includes(stone.toLowerCase()))
      .length > 0
  ) {
    return family2Price;
  }
  // family 3
  else if (
    emeraldFamily.filter((stone) => imgSrc.includes(stone.toLowerCase()))
      .length > 0
  ) {
    return family3Price;
  }
  // family 4
  else if (
    diamondFamily.filter((stone) => imgSrc.includes(stone.toLowerCase()))
      .length > 0
  ) {
    return family4Price;
  } else {
    return family1Price;
  }
}

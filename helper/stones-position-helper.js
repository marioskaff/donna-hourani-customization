function setupDragAndDrop() {
  var selector = step9Selector;

  selector.find(".draggable-stone").draggable({
    containment: "document",
    zIndex: 100,
    appendTo: "body",
    helper: "clone",
    revert: true
  });
  selector.find(".image-77").each(function () {
    $(this).attr(
      "gemName",
      $(this)
        .closest(".card-img-wrapper-template")
        .prev()
        .find(".is--name-customization")
        .text()
    );
  });
  selector
    .find(".image-60:visible")
    .closest(".piece-image")
    .find(".image-86")
    .droppable({
      drop: function (event, ui) {
        let gemName = ui.draggable[0].getAttribute("gemName");
        let gemSrc = gemName.split(" ").join("-").toLowerCase();
        $(this).css("opacity", 0);
        $(this).siblings(".image-16").css("opacity", 0);
        $(this)
          .siblings(".image-16")
          .each(function () {
            if ($(this).attr("src").toLowerCase().includes(gemSrc)) {
              $(this).css("opacity", 1);
            }
          });
      }
    });
}

function clonePieceImage() {
  step10Selector.find(".item-image").empty();
  step9Selector
    .find(".image-60:visible")
    .closest(".piece-image")
    .clone()
    .appendTo(".item-image");
  step10Selector.find(".item-image").css({ transform: "scale(.7)" });
}

function placeStones(pieceType, stones) {
  var selector = step9Selector;

  let pieceTypeFiltered = pieceType.replace("-ring", "");
  pieceTypeFiltered = pieceTypeFiltered.replace("-bracelet", "");
  pieceTypeFiltered = pieceTypeFiltered.replace("-necklace", "");

  let stonesVar = "-" + stones;
  let stonesWording = stones === "1" ? "stone" : "stones";
  let pieceLabel = pieceType + "-" + stones;
  selector.find(".image-60:visible").each(function () {
    if (
      $(this).attr("src").toLowerCase().includes(pieceTypeFiltered) &&
      $(this).attr("src").toLowerCase().includes(stonesVar)
    ) {
      for (var i = 1; i <= stones; i++) {
        let label = pageMapping.filter((m) => m.number === i)[0].label;
        let url =
          location.origin +
          "/isolated-stones/" +
          pieceType +
          "-" +
          stones +
          "-" +
          stonesWording +
          "-" +
          label +
          "-stone ";
        if (pieceType === "i-carry-your-heart-necklace") {
          url =
            location.origin +
            "/isolated-stones/i-carry-your-heart-necklace-1-stone ";
        }
        let imgUrl = url + ".w-dyn-items .image-16";
        let priceUrl = url + ".price";

        let imgsrc = stones === "1" ? i + "-" : i + "-" + stones;
        if (pieceType === "i-carry-your-heart-necklace") {
          imgsrc = 1;
        }

        let css = stonesPositions
          .filter((stone) => stone.label === pieceLabel)[0]
          .positions.filter((p) => p.position === i)[0].css;
        selector.find(".image-86").each(function () {
          if ($(this).attr("src").includes(imgsrc)) {
            $(this).css(css);
          }
        });

        // load prices for current stone
        let family1Price, family2Price, family3Price, family4Price;
        selector.find("#prices-div").load(priceUrl, function () {
          selector.find("#prices-div .price").each(function () {
            if ($(this).hasClass("family-1-price")) {
              family1Price = $(this).text();
            }
            if ($(this).hasClass("family-2-price")) {
              family2Price = $(this).text();
            }
            if ($(this).hasClass("family-3-price")) {
              family3Price = $(this).text();
            }
            if ($(this).hasClass("family-4-price")) {
              family4Price = $(this).text();
            }
          });
        });

        // load colored stones for current stone
        selector.find("#stones-div").load(imgUrl, function () {
          selector.find("#stones-div .image-16").each(function () {
            // set stone price
            let stonePrice = getStonePrice(
              $(this).attr("src"),
              family1Price,
              family2Price,
              family3Price,
              family4Price
            );
            $(this).attr("price", stonePrice);

            // move stone to right position
            selector.find(".image-86[src*=" + imgsrc + "]").after($(this));
          });

          selector.find(".image-16[src*=" + imgsrc + "]").css(css);
          selector.find(".image-16[src*=" + imgsrc + "]").css("opacity", 0);
        });
      }
    }
  });
}

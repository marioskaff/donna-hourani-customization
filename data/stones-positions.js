let pageMapping = [
  { number: 1, label: "first" },
  { number: 2, label: "second" },
  { number: 3, label: "third" },
  { number: 4, label: "fourth" },
  { number: 5, label: "fifth" },
  { number: 6, label: "sixth" }
];

let stonesPositions = [
  {
    label: "the-two-of-us-ring-2",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "35%", top: "12%", left: "36%" }
      },
      {
        position: 2,
        css: { position: "absolute", width: "30%", top: "65%", left: "26%" }
      }
    ]
  },
  {
    label: "baby-baroness-ring-1",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "30%", top: "19%", left: "32%" }
      }
    ]
  },
  {
    label: "baby-baroness-ring-2",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "25%", top: "32%", left: "19%" }
      },
      {
        position: 2,
        css: { position: "absolute", width: "22%", top: "31%", left: "52%" }
      }
    ]
  },
  {
    label: "baby-baroness-ring-3",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "22%", top: "24%", left: "14%" }
      },
      {
        position: 2,
        css: { position: "absolute", width: "20%", top: "22%", left: "37%" }
      },
      {
        position: 3,
        css: { position: "absolute", width: "26%", top: "26%", left: "61%" }
      }
    ]
  },
  {
    label: "baby-baroness-ring-4",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "20%", top: "32%", left: "10%" }
      },
      {
        position: 2,
        css: { position: "absolute", width: "12%", top: "30%", left: "35%" }
      },
      {
        position: 3,
        css: { position: "absolute", width: "16%", top: "33%", left: "55%" }
      },
      {
        position: 4,
        css: { position: "absolute", width: "15%", top: "34%", left: "75%" }
      }
    ]
  },
  {
    label: "baby-baroness-ring-5",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "15%", top: "36%", left: "3%" }
      },
      {
        position: 2,
        css: { position: "absolute", width: "14%", top: "31%", left: "20%" }
      },
      {
        position: 3,
        css: { position: "absolute", width: "18%", top: "28%", left: "38%" }
      },
      {
        position: 4,
        css: { position: "absolute", width: "15%", top: "29%", left: "60%" }
      },
      {
        position: 5,
        css: { position: "absolute", width: "11%", top: "34%", left: "79%" }
      }
    ]
  },
  {
    label: "baroness-ring-3",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "20%", top: "14%", left: "9%" }
      },
      {
        position: 2,
        css: { position: "absolute", width: "25%", top: "11%", left: "33%" }
      },
      {
        position: 3,
        css: { position: "absolute", width: "22%", top: "21%", left: "62%" }
      }
    ]
  },
  {
    label: "baroness-ring-4",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "14%", top: "18%", left: "6%" }
      },
      {
        position: 2,
        css: { position: "absolute", width: "20%", top: "14%", left: "24%" }
      },
      {
        position: 3,
        css: { position: "absolute", width: "25%", top: "19%", left: "49%" }
      },
      {
        position: 4,
        css: { position: "absolute", width: "14%", top: "34%", left: "79%" }
      }
    ]
  },
  {
    label: "baroness-ring-5",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "11%", top: "19%", left: "0%" }
      },
      {
        position: 2,
        css: { position: "absolute", width: "25%", top: "10%", left: "10%" }
      },
      {
        position: 3,
        css: { position: "absolute", width: "30%", top: "8%", left: "33%" }
      },
      {
        position: 4,
        css: { position: "absolute", width: "24%", top: "17%", left: "62%" }
      },
      {
        position: 5,
        css: { position: "absolute", width: "11%", top: "40%", left: "88%" }
      }
    ]
  },
  {
    label: "baroness-ring-6",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "14%", top: "13%", left: "4%" }
      },
      {
        position: 2,
        css: { position: "absolute", width: "15%", top: "31%", left: "18%" }
      },
      {
        position: 3,
        css: { position: "absolute", width: "22%", top: "8%", left: "25%" }
      },
      {
        position: 4,
        css: { position: "absolute", width: "30%", top: "39%", left: "36%" }
      },
      {
        position: 5,
        css: { position: "absolute", width: "19%", top: "11%", left: "51%" }
      },
      {
        position: 6,
        css: { position: "absolute", width: "19%", top: "27%", left: "73%" }
      }
    ]
  },
  {
    label: "bolo-bracelet-3",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "15%", top: "2%", left: "33%" }
      },
      {
        position: 2,
        css: { position: "absolute", width: "11%", top: "2%", left: "50%" }
      },
      {
        position: 3,
        css: { position: "absolute", width: "8%", top: "4%", left: "64%" }
      }
    ]
  },
  {
    label: "bolo-bracelet-4",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "12%", top: "2%", left: "26%" }
      },
      {
        position: 2,
        css: { position: "absolute", width: "11%", top: "2%", left: "40%" }
      },
      {
        position: 3,
        css: { position: "absolute", width: "9%", top: "3%", left: "54%" }
      },
      {
        position: 4,
        css: { position: "absolute", width: "12%", top: "4%", left: "67%" }
      }
    ]
  },
  {
    label: "bolo-bracelet-5",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "10%", top: "20%", left: "34%" }
      },
      {
        position: 2,
        css: { position: "absolute", width: "9%", top: "1%", left: "47%" }
      },
      {
        position: 3,
        css: { position: "absolute", width: "7%", top: "35%", left: "48%" }
      },
      {
        position: 4,
        css: { position: "absolute", width: "12%", top: "16%", left: "46%" }
      },
      {
        position: 5,
        css: { position: "absolute", width: "11%", top: "19%", left: "60%" }
      }
    ]
  },
  {
    label: "countess-necklace-3",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "22%", top: "50%", left: "21%" }
      },
      {
        position: 2,
        css: { position: "absolute", width: "14%", top: "50%", left: "44%" }
      },
      {
        position: 3,
        css: { position: "absolute", width: "16%", top: "49%", left: "59%" }
      }
    ]
  },
  {
    label: "countess-necklace-4",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "12%", top: "51%", left: "19%" }
      },
      {
        position: 2,
        css: { position: "absolute", width: "15%", top: "51%", left: "35%" }
      },
      {
        position: 3,
        css: { position: "absolute", width: "11%", top: "51%", left: "53%" }
      },
      {
        position: 4,
        css: { position: "absolute", width: "15%", top: "52%", left: "68%" }
      }
    ]
  },
  {
    label: "countess-necklace-5",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "8%", top: "53%", left: "18%" }
      },
      {
        position: 2,
        css: { position: "absolute", width: "11%", top: "52%", left: "29%" }
      },
      {
        position: 3,
        css: { position: "absolute", width: "8%", top: "51%", left: "44%" }
      },
      {
        position: 4,
        css: { position: "absolute", width: "11%", top: "51%", left: "55%" }
      },
      {
        position: 5,
        css: { position: "absolute", width: "14%", top: "53%", left: "68%" }
      }
    ]
  },
  {
    label: "countess-ring-2",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "30%", top: "13%", left: "22%" }
      },
      {
        position: 2,
        css: { position: "absolute", width: "20%", top: "31%", left: "55%" }
      }
    ]
  },
  {
    label: "countess-ring-3",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "40%", top: "13%", left: "12%" }
      },
      {
        position: 2,
        css: { position: "absolute", width: "25%", top: "30%", left: "58%" }
      },
      {
        position: 3,
        css: { position: "absolute", width: "25%", top: "44%", left: "47%" }
      }
    ]
  },
  {
    label: "duchess-ring-3",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "25%", top: "8%", left: "2%" }
      },
      {
        position: 2,
        css: { position: "absolute", width: "35%", top: "12%", left: "28%" }
      },
      {
        position: 3,
        css: { position: "absolute", width: "27%", top: "26%", left: "65%" }
      }
    ]
  },
  {
    label: "duchess-ring-4",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "20%", top: "10%", left: "7%" }
      },
      {
        position: 2,
        css: { position: "absolute", width: "27%", top: "11%", left: "33%" }
      },
      {
        position: 3,
        css: { position: "absolute", width: "22%", top: "44%", left: "63%" }
      },
      {
        position: 4,
        css: { position: "absolute", width: "16%", top: "22%", left: "71%" }
      }
    ]
  },
  {
    label: "duchess-ring-5",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "16%", top: "5%", left: "11%" }
      },
      {
        position: 2,
        css: { position: "absolute", width: "17%", top: "32%", left: "6%" }
      },
      {
        position: 3,
        css: { position: "absolute", width: "30%", top: "7%", left: "27%" }
      },
      {
        position: 4,
        css: { position: "absolute", width: "17%", top: "44%", left: "58%" }
      },
      {
        position: 5,
        css: { position: "absolute", width: "19%", top: "18%", left: "62%" }
      }
    ]
  },
  {
    label: "duchess-ring-6",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "17%", top: "3%", left: "14%" }
      },
      {
        position: 2,
        css: { position: "absolute", width: "17%", top: "29%", left: "7%" }
      },
      {
        position: 3,
        css: { position: "absolute", width: "28%", top: "2%", left: "33%" }
      },
      {
        position: 4,
        css: { position: "absolute", width: "16%", top: "40%", left: "32%" }
      },
      {
        position: 5,
        css: { position: "absolute", width: "16%", top: "44%", left: "60%" }
      },
      {
        position: 6,
        css: { position: "absolute", width: "16%", top: "18%", left: "68%" }
      }
    ]
  },
  {
    label: "marchioness-ring-2",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "40%", top: "13%", left: "12%" }
      },
      {
        position: 2,
        css: { position: "absolute", width: "38%", top: "32%", left: "54%" }
      }
    ]
  },
  {
    label: "queen-ring-3",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "25%", top: "5%", left: "26%" }
      },
      {
        position: 2,
        css: { position: "absolute", width: "37%", top: "37%", left: "26%" }
      },
      {
        position: 3,
        css: { position: "absolute", width: "27%", top: "14%", left: "53%" }
      }
    ]
  },
  {
    label: "queen-ring-4",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "28%", top: "5%", left: "27%" }
      },
      {
        position: 2,
        css: { position: "absolute", width: "25%", top: "33%", left: "21%" }
      },
      {
        position: 3,
        css: { position: "absolute", width: "20%", top: "44%", left: "52%" }
      },
      {
        position: 4,
        css: { position: "absolute", width: "20%", top: "20%", left: "60%" }
      }
    ]
  },
  {
    label: "queen-ring-5",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "16%", top: "17%", left: "16%" }
      },
      {
        position: 2,
        css: { position: "absolute", width: "25%", top: "2%", left: "32%" }
      },
      {
        position: 3,
        css: { position: "absolute", width: "26%", top: "28%", left: "32%" }
      },
      {
        position: 4,
        css: { position: "absolute", width: "25%", top: "15%", left: "55%" }
      },
      {
        position: 5,
        css: { position: "absolute", width: "18%", top: "44%", left: "58%" }
      }
    ]
  },
  {
    label: "i-carry-your-heart-necklace-1",
    positions: [
      {
        position: 1,
        css: { position: "absolute", width: "14%", top: "47%", left: "47%" }
      }
    ]
  }
];

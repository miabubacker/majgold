export const companyData = [
  {
    jewelry: {
      rings: [
        {
          id: 1,
          name: "Diamond Solitaire Ring",
          metal: "White Gold",
          stone: "Diamond",
          price: 1500.0,
        },
        {
          id: 2,
          name: "Vintage Ruby Ring",
          metal: "Yellow Gold",
          stone: "Ruby",
          price: 1200.0,
        },
        {
          id: 3,
          name: "Sapphire Halo Ring",
          metal: "Rose Gold",
          stone: "Sapphire",
          price: 1800.0,
        },
      ],
      necklaces: [
        {
          id: 101,
          name: "Pearl Pendant Necklace",
          metal: "Silver",
          gemstone: "Pearl",
          price: 800.0,
        },
        {
          id: 102,
          name: "Emerald Statement Necklace",
          metal: "Gold",
          gemstone: "Emerald",
          price: 2000.0,
        },
        {
          id: 103,
          name: "Diamond Tennis Necklace",
          metal: "Platinum",
          stone: "Diamond",
          price: 3500.0,
        },
      ],
    },
  },
];
export const MenuPopData = [
  {
    NEW: {
      collection: [
        "All Gifts",
        " Leaving Soon",
        " Back In Stock",
        "Lifestyle",
        "Wedding",
        " Shop All",
      ],
      "SHOP BY PRICE": ["Under $150", "Under $300", "Under $500", "Over $500"],
      "SHOP BY MATERIAL": [
        " 14k Yellow Gold",
        "14k White Gold",
        "Gold Vermeil",
        "Diamonds",
        "Pearls",
        "Sterling Silve",
      ],

     'imgs': [{imgs: require("../Assets/Imgs/chain.jpeg") ,word:"gold chain"},{imgs: require("../Assets/Imgs/ear.jpeg") ,word:"necklace"}]
    },
    // "SHOP BY": {
    //   collection: [
    //     "All Gifts",
    //     " Leaving Soon",
    //     " Back In Stock",
    //     "Lifestyle",
    //     "Wedding",
    //     " Shop All",
    //   ],
    //   "SHOP BY PRICE": ["Under $150", "Under $300", "Under $500", "Over $500"],
    //   "SHOP BY MATERIAL": [
    //     " 14k Yellow Gold",
    //     "14k White Gold",
    //     "Gold Vermeil",
    //     "Diamonds",
    //     "Pearls",
    //     "Sterling Silve",
    //   ],
    //   imgWithDetail: [{ productImg: require("../Assets/Imgs/chain.jpeg") }],
    // },

    EARRINGS: {
      collection: [
        "All Gifts",
        " Leaving Soon",
        " Back In Stock",
        "Lifestyle",
        "Wedding",
        " Shop All",
      ],
      SHOP_BY_PRICE: ["Under $150", "Under $300", "Under $500", "Over $500"],
      SHOP_BY_MATERIAL: [
        " 14k Yellow Gold",
        "14k White Gold",
        "Gold Vermeil",
        "Diamonds",
        "Pearls",
        "Sterling Silve",
      ],
      'imgs': [{imgs: require("../Assets/Imgs/ear.jpeg") ,word:"check"},{imgs: require("../Assets/Imgs/chain.jpeg") ,word:"check"}]
      // '': [{ productImg: require("../Assets/Imgs/ear.jpeg") ,productname:"check2"}],
    },
  },
];

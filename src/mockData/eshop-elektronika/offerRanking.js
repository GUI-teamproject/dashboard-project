import {
  headphones,
  intel,
  keyboard,
  mouse,
  phone,
  neck_speaker,
  amiga,
  ps5,
  kostka
} from "./../img/images.js";

const offerRankingDataElektronika = {
  most: [
    {
      image: headphones,
      name: "Słuchawki nauszne JBL TUNE",
      sold: 128,
      turnoverAndViews: "19 200 zł"
    },
    {
      image: mouse,
      name: "Myszka bezprzewodowa chomik",
      sold: 102,
      turnoverAndViews: "8 670 zł"
    },
    {
      image: keyboard,
      name: "Klawiatura SteelSeries Apex 5",
      sold: 82,
      turnoverAndViews: "46 740 zł"
    },
    {
      image: intel,
      name: "Procesor Intel Core i9-10900X",
      sold: 48,
      turnoverAndViews: "139 152 zł"
    },
    {
      image: phone,
      name: "Telefon Xiaomi Redmi Note 10 Pro",
      sold: 40,
      turnoverAndViews: "57 760 zł"
    }
  ],
  least: [
    {
      image: neck_speaker,
      name: "SRS-NB10 bezprzewodowy głośnik na szyję",
      sold: 8,
      turnoverAndViews: 36
    },
    {
      image: kostka,
      name: "WOWCUBE Preorder",
      sold: 17,
      turnoverAndViews: 640
    },
    {
      image: ps5,
      name: "Kontroler VR PS5",
      sold: 29,
      turnoverAndViews: 954
    },
    {
      image: amiga,
      name: "A500 Mini Emulator Amiga 500",
      sold: 35,
      turnoverAndViews: 304
    },
    null
  ]
};

export default offerRankingDataElektronika;

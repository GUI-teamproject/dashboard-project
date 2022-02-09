import {
  headphones,
  intel,
  keyboard,
  mouse,
  phone,
  armchair,
  chair,
  bed,
  desk,
  door,
  sofa,
  bed2,
  taboret
} from "./../img/images.js";

const offerRankingDataMeble = {
  most: [
    {
      image: armchair,
      name: "Krzesło Scorpion",
      sold: 222,
      turnoverAndViews: "44 444 zł"
    },
    {
      image: chair,
      name: "Fotel SpongeBob",
      sold: 155,
      turnoverAndViews: "15 720 zł"
    },
    {
      image: desk,
      name: "Dual Monitor Well Desk",
      sold: 98,
      turnoverAndViews: "9 345 zł"
    },
    {
      image: door,
      name: "Drzwi do Narni",
      sold: 51,
      turnoverAndViews: "10 723 zł"
    },
    {
      image: bed,
      name: "Łóżko Zygzak McQueen",
      sold: 33,
      turnoverAndViews: "72 345 zł"
    }
  ],
  least: [
    {
      image: sofa,
      name: "Mini sofa Truskawka",
      sold: 10,
      turnoverAndViews: 153
    },
    {
      image: bed2,
      name: "Łóżko Minecraft czerwone",
      sold: 15,
      turnoverAndViews: 211
    },
    {
      image: taboret,
      name: "Taboret Krokodyl Cokro",
      sold: 26,
      turnoverAndViews: 234
    }
  ]
};

export default offerRankingDataMeble;

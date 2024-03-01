export interface Services {
  title: string;
  timeAvailable: number;
  price: number;
  services: string[];
}

export const serviceArr: Services[] = [
  {
    title: "Just Basic",
    timeAvailable: 3,
    price: 0,
    services: ["DJ", "2 speakers", "1 corded mic"],
  },
  {
    title: "Skip The Line",
    timeAvailable: 4,
    price: 0,
    services: [
      "DJ",
      "2 speakers",
      "1 corded mic",
      "1 subwoofer",
      "Dance light",
    ],
  },
  {
    title: "V.I.P",
    timeAvailable: 4,
    price: 0,
    services: [
      "DJ with crowd interaction",
      "2 speakers",
      "1 wireless mic",
      "1 subwoofer",
      "Dance light",
      "Mood lighting",
    ],
  },
  {
    title: "Celebrity  Treatment",
    timeAvailable: 6,
    price: 0,
    services: [
      "DJ with crowd interaction",
      "2 speakers",
      "1 wireless mic(2 if needed)",
      "1 subwoofer",
      "Dance light",
      "Mood lighting",
      "Photo Booth with(out) booth attendee",
      "Fog Machines",
    ],
  },
];

export interface Extra {
  title: string;
  cost: number;
}

export const extrasArr: Extra[] = [
  {
    title: "Extra mics",
    cost: 40,
  },
  {
    title: "Additional Hour",
    cost: 100,
  },
];

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
    services: ["Just Basic plus..", "1 subwoofer", "Dance light"],
  },
  {
    title: "V.I.P",
    timeAvailable: 4,
    price: 0,
    services: [
      "Skip The Line plus..",
      "DJ with crowd interaction",
      "1 wireless mic",
      "Dance light",
      "Mood lighting",
    ],
  },
  {
    title: "Celebrity Treatment",
    timeAvailable: 6,
    price: 0,
    services: [
      "V.I.P plus..",
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

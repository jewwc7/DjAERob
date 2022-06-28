const massageArr = [
  {
    title: "Swedish",
    description:
      "A Swedish massage is designed to relax the entire body by rubbing the muscles in long, gliding strokes in the direction of blood returning to the heart. But the benefits of Swedish massage go beyond relaxation. It can help increase the level of oxygen in the blood and improve circulation and flexibility.",
    prices: [
      {
        30: 60,
        60: 90,
        90: 120,
        120: 150,
      },
    ],
    enhancements: [],
    technique: [
      "Effleurage consists of long sweeping strokes around the massage area",
      "Petrissage is the technique that involves kneading the muscles",
      "Tapotement technique uses the side of your hands to loosen the muscles in a fast tapping motion",
    ],
    benefits: [
      "Muscle Relaxation",
      "Injury Prevention",
      "Heals Joint Pain",
      "Improved Blood Circulation",
    ],
  },
  {
    title: "Deep Tissue",
    description:
      "Deep tissue massage is a massage technique thats mainly used to treat musculoskeletal issues, such as strains and sports injuries. It involves applying sustained pressure using slow, deep strokes to target the inner layers of your muscles and connective tissues.",

    prices: [
      {
        30: 60,
        60: 90,
        90: 120,
        120: 150,
      },
    ],
    enhancements: [],
    technique: [
      "Cycles of pressure are used with this technique to ease the source of pain. Deep breathing is useful during this type of treatment",
      "Myofacial Release method uses gentle pressure in areas that are pinpointed by the therapist",
      "Active Release Technique(A.R.T) utilize their hands to assess the development of muscles, nerves, tendons, ligaments, sash, and finally, the composition of these body parts ",
    ],
    benefits: [
      "Reduces Chronic Pain",
      "Reduces Muscle Aches",
      "Reduces Stiffness",
      "Breaks up Scar Tissue",
    ],
    restrictions: ["30 minutes has to be a targeted massage"],
  },
  {
    title: "Sports Massage",
    description:
      "Image result for sports massage description Sports massage is manual manipulation of the muscles geared specifically toward helping people who have physically demanding lifestyles and/or hobbies. This kind of therapeutic massage considers the impact of certain activities on specific joints, muscle groups, tendons, ligaments, and soft tissue groups.",
    prices: [
      {
        90: 120,
        120: 150,
      },
    ],
    enhancements: [
      "Advanced Muscle Therapy",
      "Muscle Gun Therapy",
      "Targeted STretching",
    ],
    restrictions: ["30 minutes has to be a targeted massage"],
    technique: [
      "Effleurage consists of long sweeping strokes around the massage area",
      "Kneading in a sports massage consists of lifting, squeezing and moving tissues",
      "Wringing is a manipulation used commonly in a sports massage where tissues are lifted away from the bone and pushed from side to side as the hands move up and down. The alternate squeezing and releasing action of the hands on the tissue increases circulation to an area, removes waste products and brings oxygen and nutrients to the area, improving tissue condition",
    ],
    benefits: [
      "Not only For Athletes!",
      "Reduces Delayed Onset Muscle Soreness(DOMS)",
      "Helps Muscle Recovery",
    ],
  },
  {
    title: "Thai Massaage",
    description:
      "Duis pulvinar lobortis viverra. Sed et venenatis mauris, blandit justo ultrices, sit amet efficitur turpis elementum. Vivamus lacinia est justo, nec porta urna imperdiet ac. Integer enim massa, commodo ornare risus ut, mollis cursus urna. Suspendisse mattis urna ut massa laoreet lobortis. Sed placerat facilisis sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    prices: [
      {
        60: 90,
        90: 120,
        120: 150,
      },
    ],
    enhancements: [
      "Advanced Muscle Therapy",
      "Muscle Gun Therapy",
      "Targeted STretching",
    ],
    restrictions: ["60 minutes has to be a targeted massage"],
    technique: [
      "Effleurage consists of long sweeping strokes around the massage area",
      "Kneading in a sports massage consists of lifting, squeezing and moving tissues",
      "Wringing is a manipulation used commonly in a sports massage where tissues are lifted away from the bone and pushed from side to side as the hands move up and down. The alternate squeezing and releasing action of the hands on the tissue increases circulation to an area, removes waste products and brings oxygen and nutrients to the area, improving tissue condition",
    ],
    benefits: [
      "Not only For Athletes!",
      "Reduces Delayed Onset Muscle Soreness(DOMS)",
      "Helps Muscle Recovery",
    ],
  },
];

const massageTypes = {
  swedish: "Swedish",
  deepTissue: "Deep Tissue",
  sports: "Sports Massage",
  thai: "Thai Massaage",
  thirty: "30 minutes",
  sixty: "60 minutes",
  ninety: "90 Minutes",
  oneTwenty: "120 Minutes",
};

const data = {
  massageArr,
  massageTypes,
};
export default data;

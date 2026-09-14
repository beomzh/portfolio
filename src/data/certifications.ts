export type Certification = {
  name: string;
  org: string;
  date: string;
};

export const certifications: Certification[] = [
  {
    name: "CKA (Certified Kubernetes Administrator)",
    org: "Linux Foundation",
    date: "2024.03",
  },
  {
    name: "무선설비기사",
    org: "한국방송통신전파진흥원",
    date: "2022.09",
  },
];

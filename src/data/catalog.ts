export type Category = { id: string; name: string; slug: string; summary: string };
export type Subcategory = { id: string; categoryId: string; name: string; slug: string };
export type Product = {
  id: string;
  categoryId: string;
  subcategoryId: string;
  slug: string;
  title: string;
  image: string;
  frequencyRange: string;
  gain: string;
  applications: string[];
  description: string;
  specs: { key: string; value: string }[];
  datasheetUrl: string;
};

export const categories: Category[] = [
  { id: "c1", name: "Low Gain Antenna", slug: "low-gain-antenna", summary: "Compact antennas for stable urban and embedded connectivity." },
  { id: "c2", name: "High Gain Antenna", slug: "high-gain-antenna", summary: "Directional and high efficiency antennas for long range coverage." },
  { id: "c3", name: "Microwave Devices", slug: "microwave-devices", summary: "RF passive and active microwave components for mission critical links." },
];

const namesByCategory: Record<string, string[]> = {
  c1: ["VHF", "DVB", "CDMA", "GSM", "GPS", "IRNSS", "Combo", "LTE", "WIFI", "PCB", "RFID"],
  c2: ["FM", "VHF", "CDMA", "GSM", "GPS", "GLONASS", "Horn", "Yagi", "Patch Panel"],
  c3: ["Attenuator", "BPF", "Coupler", "Duplexer", "Lightning Arrestor", "Power Splitter", "Power Amplifier"],
};

export const subcategories: Subcategory[] = Object.entries(namesByCategory).flatMap(([categoryId, names], i) =>
  names.map((name, j) => ({ id: `s${i + 1}${j + 1}`, categoryId, name, slug: name.toLowerCase().replace(/\s+/g, "-") })),
);

export const products: Product[] = subcategories.flatMap((s, idx) => {
  const isMicrowave = s.categoryId === "c3";
  return [
    {
      id: `p${idx + 1}a`,
      categoryId: s.categoryId,
      subcategoryId: s.id,
      slug: `${s.slug}-series-a`,
      title: `${s.name} Series A`,
      image: "/products/placeholder-product.svg",
      frequencyRange: isMicrowave ? "1 GHz to 18 GHz" : "698 MHz to 2700 MHz",
      gain: isMicrowave ? "N A" : "2 dBi to 6 dBi",
      applications: ["Telecom", "IoT", "Industrial Wireless"],
      description: `Engineered ${s.name} model for reliable RF performance in indoor and outdoor deployments.`,
      specs: [
        { key: "Impedance", value: "50 Ohm" },
        { key: "VSWR", value: "Less than 2.0" },
        { key: "Polarization", value: "Linear" },
        { key: "Power", value: "10 W" },
        { key: "Connector", value: "SMA Male" },
      ],
      datasheetUrl: "/datasheets/sample-datasheet.pdf",
    },
    {
      id: `p${idx + 1}b`,
      categoryId: s.categoryId,
      subcategoryId: s.id,
      slug: `${s.slug}-series-pro`,
      title: `${s.name} Series Pro`,
      image: "/products/placeholder-product.svg",
      frequencyRange: isMicrowave ? "2 GHz to 26.5 GHz" : "824 MHz to 6000 MHz",
      gain: isMicrowave ? "N A" : "8 dBi to 14 dBi",
      applications: ["Defense", "Aerospace", "Automotive Telematics"],
      description: `Premium ${s.name} variant tuned for high stability and precision under harsh field conditions.`,
      specs: [
        { key: "Impedance", value: "50 Ohm" },
        { key: "VSWR", value: "Less than 1.8" },
        { key: "Polarization", value: "RHCP" },
        { key: "Power", value: "25 W" },
        { key: "Connector", value: "N Type Female" },
      ],
      datasheetUrl: "/datasheets/sample-datasheet.pdf",
    },
  ];
});

export const industries = ["Telecom", "Defense", "Automotive", "IoT", "Aerospace"];

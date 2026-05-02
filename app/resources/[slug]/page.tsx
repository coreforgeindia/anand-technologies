import Link from "next/link";

const articles: Record<string, { category: string; title: string; readTime: string; tags: string[]; content: string[] }> = {
  "gsm-gps-combo-antennas-fleet-tracking": {
    category: "Application Guide",
    title: "Selecting GSM/GPS Combo Antennas for Fleet Tracking",
    readTime: "6 min read",
    tags: ["GPS", "GSM", "Automotive", "Combo Antennas"],
    content: [
      "Combining GSM cellular and GPS positioning into a single antenna housing reduces cable runs, simplifies roof or cabin mounting, and cuts BOM cost. However, a poorly selected combo antenna can degrade both links simultaneously.",
      "The first parameter to check is frequency coverage. GSM bands span 824 MHz to 1900 MHz depending on region. GPS L1 sits at 1575.42 MHz. A good combo antenna must cover both simultaneously with low VSWR on each port.",
      "Ground plane sensitivity is higher for GPS than for GSM. GPS patch elements typically require a minimum 70 mm x 70 mm metallic ground plane to achieve rated gain. Verify the mounting surface before finalising the antenna.",
      "For fleet installations, vibration resistance and IP rating matter as much as RF performance. Look for antennas rated IP67 or above with stainless steel or reinforced composite housings. Salt spray and UV stability tests are worth requesting from the manufacturer.",
      "Cable loss compounds at GPS frequencies. A 5-metre RG-58 run introduces around 2.5 dB of loss at 1575 MHz. Consider low-loss cable with an inline LNA, or specify an active GPS element with built-in LNA as part of the combo assembly.",
    ],
  },
  "vswr-impedance-matching-iot": {
    category: "Technical Deep Dive",
    title: "Understanding VSWR and Impedance Matching in IoT Devices",
    readTime: "8 min read",
    tags: ["VSWR", "IoT", "Impedance", "Design"],
    content: [
      "VSWR (Voltage Standing Wave Ratio) is the most practical metric for assessing how well an antenna is matched to its feed system. A VSWR of 1.0:1 is perfect (no reflected power). Most commercial antennas target VSWR below 2.0:1 across the operating band.",
      "The reflection coefficient Gamma and VSWR are related: VSWR = (1+|Gamma|)/(1-|Gamma|). A VSWR of 2:1 corresponds to 11% reflected power, which is typically acceptable. A VSWR of 3:1 means 25% reflected power, representing significant link budget loss.",
      "In IoT devices, the antenna is often a PCB trace or chip antenna sharing a ground plane with power and digital circuits. Noise coupling from switching regulators and clock lines directly degrades receiver sensitivity. Always evaluate VSWR on the populated PCB, not on the antenna alone.",
      "Matching networks using capacitors and inductors can shift the antenna impedance to 50 ohm. The challenge is bandwidth: a narrow-band match gives excellent VSWR at the center frequency but degrades quickly off-resonance. For broadband IoT covering 2G, 3G, and 4G, a broadband matching topology or a pre-tuned multi-band antenna is preferred.",
      "Use a vector network analyser to measure S11 on the final PCB assembly. Plot the impedance on a Smith chart to understand the matching trajectory and choose component values accordingly. This step alone saves several design iterations.",
    ],
  },
  "rf-attenuators-splitters-network-reliability": {
    category: "Product Insight",
    title: "How RF Attenuators and Splitters Improve Network Reliability",
    readTime: "5 min read",
    tags: ["Attenuator", "Splitter", "Microwave", "Telecom"],
    content: [
      "In a distributed antenna system or multi-sector base station, power levels across branches must be carefully balanced. An RF attenuator introduces a calibrated, frequency-independent loss to bring an over-driven port to the correct level without reflections.",
      "Fixed attenuators are specified by their attenuation value (3 dB, 6 dB, 10 dB, 20 dB, etc.), power handling, and VSWR. For base-station use, always verify that the attenuator power rating exceeds the peak envelope power, not just the average, when handling OFDM or LTE waveforms with high PAPR.",
      "Power splitters divide one input into N equal outputs. A 2-way splitter introduces 3 dB of loss on each output port from the split alone. A resistive splitter offers good isolation between output ports but wastes half the power as heat. A reactive (Wilkinson) splitter is lossless when ports are matched but degrades isolation when loads are mismatched.",
      "Combining attenuators and splitters in the right topology can reduce intermodulation interference between co-located transmitters. The standard approach is to place a 3 dB pad on each input before combining, providing 6 dB of port-to-port isolation at the cost of 3 dB insertion loss.",
      "All passive components must be rated for outdoor UV, humidity, and thermal cycling if used in outdoor enclosures. Specified insertion loss and VSWR values should be validated at temperature extremes, not just at 25 degrees C.",
    ],
  },
  "antenna-gain-vs-directivity": {
    category: "Technical Deep Dive",
    title: "Antenna Gain vs. Directivity: What Matters for Your Deployment",
    readTime: "7 min read",
    tags: ["Antenna Theory", "High Gain", "Deployment"],
    content: [
      "Directivity describes how focused an antenna radiation is relative to an isotropic radiator, assuming 100% efficiency. Gain accounts for real-world losses in the antenna structure: conductor resistance, dielectric loss, and impedance mismatch.",
      "For a lossless antenna, Gain = Directivity. In practice, the difference between the two tells you how lossy the antenna is. A well-designed antenna with 1 dB of loss has a gain 1 dB below its directivity.",
      "High-gain antennas narrow the main beam, which increases range along the boresight but reduces coverage angle. A 14 dBi directional antenna typically has a 3 dB beamwidth of around 25 to 30 degrees. Pointing accuracy becomes critical: a 5-degree misalignment can cost more than 3 dB of effective gain.",
      "For base-station applications where coverage area matters, moderate gain (6 to 9 dBi) with wide beamwidths is usually preferred over very high gain with narrow beams. For point-to-point links, maximum gain at both ends maximises link margin.",
      "Remember that gain is relative to an isotropic radiator (dBi) or a dipole (dBd). 0 dBd = 2.15 dBi. Always compare antennas using the same reference when evaluating vendor data sheets.",
    ],
  },
  "yagi-patch-panel-long-range": {
    category: "Application Guide",
    title: "Yagi vs. Patch Panel Antennas for Long-Range Point-to-Point Links",
    readTime: "6 min read",
    tags: ["Yagi", "Patch Panel", "High Gain", "Outdoor"],
    content: [
      "Both Yagi and patch panel antennas are used for outdoor directional links, but they excel in different scenarios. Choosing the wrong type is a common source of installation problems.",
      "A Yagi antenna is a resonant structure: its gain and beamwidth are determined by the number of parasitic elements and their spacing. A 15-element Yagi can achieve 15 to 17 dBi at 900 MHz with a half-power beamwidth around 30 degrees. Wind loading is relatively low due to its open construction.",
      "A patch panel achieves higher gain through aperture. A 4-column, 4-row patch panel at 1800 MHz can reach 18 to 21 dBi with tighter vertical beamwidth. Panel antennas are mechanically robust and easier to integrate into a neat enclosure, making them suitable for permanent rooftop or tower installations.",
      "Wind survival is a key differentiator. A large panel antenna can act as a sail in high-wind conditions. Check the specified survival wind speed against your installation environment. Yagis typically survive higher winds due to lower frontal area.",
      "For temporary or portable links, Yagis win on portability and cost. For permanent infrastructure requiring high gain and neat aesthetics, patch panels are preferred.",
    ],
  },
  "gnss-multi-constellation-irnss": {
    category: "Application Guide",
    title: "GNSS Multi-Constellation Antennas: Adding IRNSS to Your Design",
    readTime: "5 min read",
    tags: ["GNSS", "IRNSS", "GPS", "NavIC"],
    content: [
      "India's NavIC system (IRNSS) operates on L5 (1176.45 MHz) and S-band (2492.028 MHz). The L5 band is shared with GPS L5 and Galileo E5a, making multi-constellation L5 reception straightforward with a single wideband antenna that covers 1164 to 1189 MHz.",
      "Adding S-band coverage is more complex. The S-band frequency is far above GPS L1 (1575.42 MHz) and requires a separate antenna element or a purpose-designed dual-feed combination antenna. Very few commercial GNSS antennas cover S-band natively.",
      "For most Indian fleet, precision agriculture, and infrastructure applications, L5 coverage is sufficient. NavIC L5 signals are available across the Indian subcontinent and adjacent regions with good geometry. Verify the constellation availability for your latitude before committing to an S-band design.",
      "Patch antenna elements for L5 are physically smaller than L1 elements due to the shorter wavelength. A dual-band L1/L5 antenna stacks two patches on a common ground plane. Stacking introduces coupling that must be managed in the matching network to maintain independent VSWR on both bands.",
      "Always specify active (LNA-equipped) GNSS antennas for cable runs longer than 2 metres. At 1176 MHz the LNA noise figure directly sets the receiver noise floor. A 1.5 dB NF LNA placed at the antenna is worth 3 to 4 dB compared to a passive antenna with a long cable run.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <main className="container py-20 text-center">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Link href="/resources" className="btn-primary mt-6 inline-flex">Back to Resources</Link>
      </main>
    );
  }

  return (
    <main className="container py-12">
      <nav className="mb-8 flex items-center gap-2 text-sm text-[var(--muted)]">
        <Link href="/" className="hover:text-[var(--brand)]">Home</Link>
        <span>/</span>
        <Link href="/resources" className="hover:text-[var(--brand)]">Resources</Link>
        <span>/</span>
        <span className="text-[var(--text)]">{article.title}</span>
      </nav>

      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center gap-3">
          <span className="badge">{article.category}</span>
          <span className="text-xs text-[var(--muted)]">{article.readTime}</span>
        </div>
        <h1 className="text-4xl font-bold leading-tight text-[var(--text)]">{article.title}</h1>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {article.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-[var(--line)] px-2.5 py-0.5 text-xs text-[var(--muted)]">{tag}</span>
          ))}
        </div>

        <div className="mt-10 space-y-6">
          {article.content.map((para, i) => (
            <p key={i} className="text-[1.13rem] leading-9 text-[var(--muted)]">{para}</p>
          ))}
        </div>

        <div className="mt-12 rounded-[24px] px-8 py-12 text-center text-white" style={{ background: "linear-gradient(135deg, var(--brand) 0%, var(--brand-dark) 100%)" }}>
          <h3 className="text-4xl font-bold">Need custom RF components?</h3>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-10" style={{ opacity: 0.92 }}>
            Our engineers can design and manufacture antenna solutions for your specific frequency, gain, and environmental requirements.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-10 py-4 text-2xl font-semibold no-underline" style={{ color: "var(--brand-dark)" }}>
            Contact Our Team
          </Link>
        </div>

        <div className="mt-10 border-t border-[var(--line)] pt-8">
          <Link href="/resources" className="flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:underline">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7-7l-7 7 7 7" />
            </svg>
            Back to all articles
          </Link>
        </div>
      </div>
    </main>
  );
}

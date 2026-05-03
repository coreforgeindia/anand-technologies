export const productCategories = [
  {
    name: 'Filters',
    slug: 'filters',
    description: 'Bandpass, low-pass, high-pass, and notch filters for precise signal conditioning.',
    icon: 'Filter',
  },
  {
    name: 'Duplexers',
    slug: 'duplexers',
    description: 'High-isolation duplexers for simultaneous transmit/receive in telecom and defense.',
    icon: 'ArrowLeftRight',
  },
  {
    name: 'Diplexers',
    slug: 'diplexers',
    description: 'Frequency-multiplexing diplexers for combining or separating signal bands.',
    icon: 'Split',
  },
  {
    name: 'RF Cable Assemblies',
    slug: 'rf-cable-assemblies',
    description: 'Precision-engineered coaxial cable assemblies with low VSWR across wide bands.',
    icon: 'Cable',
  },
  {
    name: 'Low Gain Antennas',
    slug: 'low-gain-antennas',
    description: 'Omnidirectional antennas for IoT, short-range communication, and industrial telemetry.',
    icon: 'Radio',
  },
  {
    name: 'High Gain Antennas',
    slug: 'high-gain-antennas',
    description: 'Directional high-gain antennas for long-range links, satellite, and defense applications.',
    icon: 'Antenna',
  },
  {
    name: 'Microwave Devices',
    slug: 'microwave-devices',
    description: 'Attenuators, couplers, power dividers, and isolators for microwave systems.',
    icon: 'Waves',
  },
  {
    name: 'Precision RF Components',
    slug: 'precision-rf-components',
    description: 'Custom-engineered RF components meeting MIL-SPEC and telecom grade standards.',
    icon: 'CircuitBoard',
  },
]

export const industries = [
  {
    name: 'Telecom & 5G',
    slug: 'telecom',
    description: 'Enabling next-generation networks with precision RF filtering and antenna solutions.',
    challenge: 'Managing spectral congestion, interference, and signal integrity across dense network deployments.',
    solutions: [
      'High-Q bandpass filters for base station isolation',
      'Duplexers for FDD 4G/5G transceivers',
      'Low-loss cable assemblies for tower-top installations',
    ],
    products: ['Filters', 'Duplexers', 'RF Cable Assemblies'],
    icon: 'Tower',
  },
  {
    name: 'Defense & Aerospace',
    slug: 'defense',
    description: 'Mission-critical RF components built to MIL-SPEC tolerances for defense systems.',
    challenge: 'Extreme environmental conditions, EMI resilience, and frequency agility across contested spectrums.',
    solutions: [
      'Ruggedized filters and multiplexers for radar systems',
      'High-gain directional antennas for SATCOM and ECM',
      'Precision RF assemblies for electronic warfare suites',
    ],
    products: ['Filters', 'High Gain Antennas', 'Microwave Devices'],
    icon: 'Shield',
  },
  {
    name: 'Automotive & V2X',
    slug: 'automotive',
    description: 'Compact, reliable RF solutions for connected vehicle communication and ADAS.',
    challenge: 'Multi-band coexistence, vibration tolerance, and integration in constrained automotive environments.',
    solutions: [
      'Multi-band diplexers for V2X and LTE-V coexistence',
      'Compact antennas for DSRC and C-V2X applications',
      'EMI filters for automotive ECU RF interference mitigation',
    ],
    products: ['Diplexers', 'Low Gain Antennas', 'Filters'],
    icon: 'Car',
  },
  {
    name: 'Industrial & SCADA',
    slug: 'industrial',
    description: 'Reliable RF infrastructure for industrial automation, monitoring, and control systems.',
    challenge: 'Harsh RF environments, long-range communication requirements, and uptime-critical deployments.',
    solutions: [
      'Industrial-grade filters for ISM band noise suppression',
      'Omnidirectional antennas for SCADA and field telemetry',
      'Hardened RF assemblies for outdoor and factory floor use',
    ],
    products: ['Filters', 'Low Gain Antennas', 'RF Cable Assemblies'],
    icon: 'Factory',
  },
  {
    name: 'IoT & Smart Systems',
    slug: 'iot',
    description: 'Miniaturized RF components enabling reliable wireless connectivity for IoT ecosystems.',
    challenge: 'Low-power operation, multi-protocol coexistence, and mass deployment at scale.',
    solutions: [
      'Low-loss diplexers for multi-band IoT gateways',
      'Compact PCB-mount antennas for constrained form factors',
      'Bandpass filters for LoRa, Zigbee, and sub-GHz filtering',
    ],
    products: ['Diplexers', 'Low Gain Antennas', 'Filters'],
    icon: 'Cpu',
  },
]

export const sampleProducts = [
  {
    id: '1',
    name: 'BPF-900-LTE',
    slug: 'bpf-900-lte',
    category: 'filters',
    short_spec: '900 MHz LTE Bandpass Filter',
    frequency_range: '880–960 MHz',
    description: 'High-Q cavity bandpass filter designed for LTE Band 8 base station applications. Offers superior out-of-band rejection and low insertion loss for dense urban deployments.',
    specs: {
      'Center Frequency': '920 MHz',
      'Passband': '880–960 MHz',
      'Insertion Loss': '< 1.2 dB',
      'Return Loss': '> 20 dB',
      'Rejection (out-of-band)': '> 60 dBc',
      'Power Handling': '50W average',
      'Connector': 'N-Type Female',
      'Temperature Range': '-40°C to +85°C',
      'Housing': 'Aluminum alloy, IP65',
    },
    datasheet_url: null,
    created_at: '2024-01-01',
  },
  {
    id: '2',
    name: 'DPX-2600-5G',
    slug: 'dpx-2600-5g',
    category: 'duplexers',
    short_spec: '2.6 GHz 5G NR Duplexer',
    frequency_range: '2496–2690 MHz',
    description: 'High-isolation cavity duplexer for 5G NR Band n41 and n38 base stations. Engineered for simultaneous TX/RX operation with superior port-to-port isolation.',
    specs: {
      'TX Band': '2500–2570 MHz',
      'RX Band': '2620–2690 MHz',
      'Insertion Loss TX': '< 0.8 dB',
      'Insertion Loss RX': '< 0.9 dB',
      'TX-RX Isolation': '> 80 dB',
      'VSWR': '< 1.3:1',
      'Power Handling': '100W peak',
      'Connector': '4.3-10 Female',
      'Temperature Range': '-40°C to +85°C',
    },
    datasheet_url: null,
    created_at: '2024-01-01',
  },
  {
    id: '3',
    name: 'ANT-HG-28-DP',
    slug: 'ant-hg-28-dp',
    category: 'high-gain-antennas',
    short_spec: '28 GHz mmWave High-Gain Panel Antenna',
    frequency_range: '27.5–28.35 GHz',
    description: 'Dual-polarized high-gain panel antenna for 5G mmWave and SATCOM applications. Features low sidelobe levels and precision beam forming characteristics.',
    specs: {
      'Frequency': '27.5–28.35 GHz',
      'Gain': '24 dBi',
      'Polarization': 'Dual Linear ±45°',
      'HPBW (Az/El)': '12° / 12°',
      'VSWR': '< 1.5:1',
      'Port Isolation': '> 30 dB',
      'Connector': '2.92mm Female',
      'Temperature Range': '-40°C to +70°C',
      'Mounting': 'Pole / Wall bracket included',
    },
    datasheet_url: null,
    created_at: '2024-01-01',
  },
  {
    id: '4',
    name: 'CABLE-LMR400-SMA',
    slug: 'cable-lmr400-sma',
    category: 'rf-cable-assemblies',
    short_spec: 'LMR-400 Low-Loss Coaxial Assembly',
    frequency_range: 'DC–6 GHz',
    description: 'Low-loss flexible coaxial cable assembly using Times Microwave LMR-400 cable with precision SMA/N-Type connectors. Custom lengths available.',
    specs: {
      'Cable Type': 'LMR-400',
      'Impedance': '50 Ω',
      'Frequency Range': 'DC to 6 GHz',
      'Attenuation @ 1GHz': '0.7 dB/m',
      'VSWR': '< 1.25:1',
      'Connector Options': 'SMA, N-Type, TNC, BNC, 4.3-10',
      'Length Range': '0.3m to 30m custom',
      'Operating Temperature': '-55°C to +105°C',
      'IP Rating': 'IP67 (outdoor assemblies)',
    },
    datasheet_url: null,
    created_at: '2024-01-01',
  },
  {
    id: '5',
    name: 'ISO-2450-SMA',
    slug: 'iso-2450-sma',
    category: 'microwave-devices',
    short_spec: 'Drop-In Isolator 2.4 GHz',
    frequency_range: '2400–2500 MHz',
    description: 'Drop-in ferrite isolator for 2.4 GHz ISM band applications. Provides high reverse isolation to protect PA stages in industrial and telecom equipment.',
    specs: {
      'Frequency': '2400–2500 MHz',
      'Insertion Loss': '< 0.5 dB',
      'Isolation': '> 25 dB',
      'VSWR': '< 1.3:1',
      'Power Handling': '20W CW',
      'Impedance': '50 Ω',
      'Operating Temperature': '-40°C to +85°C',
      'Package': 'Drop-in, 25×25mm',
    },
    datasheet_url: null,
    created_at: '2024-01-01',
  },
  {
    id: '6',
    name: 'DIV-1800-3WAY',
    slug: 'div-1800-3way',
    category: 'microwave-devices',
    short_spec: '3-Way Power Divider 1800 MHz',
    frequency_range: '1710–1880 MHz',
    description: 'Resistive 3-way power divider for LTE Band 3 signal distribution. Features excellent amplitude and phase balance across all output ports.',
    specs: {
      'Frequency': '1710–1880 MHz',
      'Division': '3-Way (1:3)',
      'Insertion Loss': '< 6.5 dB (each port)',
      'Amplitude Balance': '±0.3 dB',
      'Phase Balance': '±3°',
      'Port Isolation': '> 20 dB',
      'VSWR': '< 1.4:1',
      'Connector': 'SMA Female',
    },
    datasheet_url: null,
    created_at: '2024-01-01',
  },
]

export const resourceArticles = [
  {
    slug: 'rf-filter-selection-guide',
    title: 'RF Filter Selection Guide: Bandpass, Lowpass, and Notch Filters Explained',
    excerpt: 'A technical guide for RF engineers on selecting the right filter topology for telecom, defense, and industrial applications.',
    category: 'RF Guides',
    readTime: '8 min read',
    date: '2024-03-15',
    content: `
## Understanding RF Filter Technologies

RF filters are the backbone of spectrum management in modern communications systems. Selecting the correct filter type requires understanding passband requirements, rejection specifications, insertion loss constraints, and power handling capability.

### Bandpass Filters (BPF)

Bandpass filters allow a defined frequency band to pass while rejecting all others. They are specified by:

- **Center frequency (f₀)**: The geometric mean of the passband edges
- **3dB bandwidth**: The frequency range over which insertion loss is ≤ 3dB
- **Shape factor**: Ratio of 60dB/3dB bandwidth; lower values indicate steeper roll-off
- **Insertion loss**: Signal loss within the passband, typically expressed in dB

**Applications**: LTE/5G base station filtering, satellite receiver front-ends, radar signal conditioning.

### Low-Pass Filters (LPF)

LPFs pass all frequencies below a cutoff while attenuating higher frequencies. They are commonly used for harmonic suppression at transmitter outputs and to prevent aliasing in analog-to-digital conversion chains.

**Key specifications**: Cutoff frequency, stopband rejection at specified offsets, group delay flatness.

### Notch / Band-Stop Filters

Notch filters reject a narrow frequency band while passing all others. They are critical for suppressing specific interference sources such as LTE uplink noise in adjacent receive bands.

**Typical rejection depth**: 40–80 dBc at center frequency.

### Cavity Filters vs. LC Filters vs. SAW/BAW

| Type | Frequency Range | Q Factor | Power | Size |
|------|----------------|----------|-------|------|
| Cavity | 400 MHz – 20 GHz | 1000–5000 | High (100W+) | Large |
| LC lumped | DC – 1 GHz | 50–200 | Medium (10W) | Small |
| SAW | 100 MHz – 3 GHz | 500–1000 | Low (<1W) | Tiny |
| BAW/FBAR | 1 GHz – 6 GHz | 1000–2000 | Low (<2W) | Tiny |

For base station and defense applications requiring high power and selectivity, cavity filters are the standard choice. Anand Technologies specializes in precision-machined cavity filter designs optimized for Indian spectrum allocations.

### Specifying Your Filter Requirement

When requesting a custom filter quote, provide:

1. Passband frequency range and acceptable insertion loss
2. Stopband frequencies and required rejection levels
3. Operating temperature range
4. Power handling (average and peak)
5. Connector interface and mounting requirements
6. Environmental requirements (IP rating, MIL-SPEC, etc.)

Contact our engineering team to discuss your specific filter requirement.
    `,
  },
  {
    slug: 'antenna-gain-selection-defense',
    title: 'High-Gain vs. Low-Gain Antennas: Choosing the Right Solution for Defense and Telecom',
    excerpt: 'Practical guidance on antenna gain selection, beam characteristics, and polarization for critical communication links.',
    category: 'Application Notes',
    readTime: '6 min read',
    date: '2024-02-28',
    content: `
## Antenna Gain: The Fundamental Trade-off

Antenna gain represents directivity combined with radiation efficiency. Higher gain concentrates radiated power in a specific direction, extending link range but narrowing the coverage beam.

### Understanding Gain and Directivity

Gain is expressed in dBi (decibels relative to an isotropic radiator). A 10 dBi antenna radiates 10× the power of an isotropic source in its peak direction.

**EIRP** (Equivalent Isotropic Radiated Power) = Transmit Power (dBm) + Antenna Gain (dBi) – Cable Loss (dB)

### When to Choose High-Gain Antennas

High-gain antennas (>10 dBi) are appropriate when:

- **Point-to-point links** require maximum range
- **Sector coverage** with defined geographic footprint is needed
- **SATCOM terminals** require precision dish or phased array pointing
- **Electronic surveillance** systems need spatial discrimination

Typical gain ranges:
- **Patch antennas**: 6–10 dBi
- **Yagi arrays**: 10–17 dBi
- **Horn antennas**: 15–25 dBi
- **Parabolic dishes**: 25–45 dBi

### When to Choose Low-Gain Antennas

Low-gain omnidirectional antennas (0–6 dBi) are preferred for:

- **IoT deployments** covering 360° azimuth
- **SCADA field nodes** requiring no beam alignment
- **Vehicle-mounted** systems with dynamic orientation
- **Urban small cells** serving multiple simultaneous users

### Polarization Considerations

Matching polarization between transmit and receive antennas minimizes polarization mismatch loss. Cross-polarized signals incur 20–30 dB additional loss.

- **Linear (V or H)**: Simple, cost-effective for fixed links
- **Circular (RHCP/LHCP)**: Reduces multipath effects; preferred in SATCOM
- **Dual-polarized**: Enables MIMO, polarization diversity, higher spectral efficiency

### Custom Antenna Development at Anand Technologies

Our RF engineering team designs custom antennas for specific frequency allocations, gain profiles, and environmental requirements. We support:

- Frequency customization across 400 MHz – 40 GHz
- Custom polarization and beam configurations
- MIL-SPEC environmental qualification
- Small-batch to production volumes
    `,
  },
  {
    slug: '5g-nr-rf-challenges',
    title: '5G NR RF Challenges: Filtering, Duplexing, and Interference Management at Scale',
    excerpt: 'Technical analysis of 5G NR RF challenges in sub-6 GHz and mmWave bands, and how precision components address them.',
    category: 'Technical Blogs',
    readTime: '10 min read',
    date: '2024-01-20',
    content: `
## 5G NR RF Challenges in Real-World Deployments

The transition to 5G New Radio introduces significant RF engineering challenges that require precision component solutions across both sub-6 GHz and millimeter-wave frequency bands.

### Sub-6 GHz Band Challenges

The sub-6 GHz spectrum hosts 5G NR bands alongside legacy 4G LTE, creating complex co-existence requirements:

**Band n41 (2.5 GHz)**: Adjacent to WLAN 2.4 GHz ISM band; requires filters with sharp roll-off to prevent desensitization of LTE Band 7 receivers operating in the same RRU.

**Band n78 (3.5 GHz)**: The primary 5G workhorse globally. High-power macro base stations require duplexers with TX-RX isolation exceeding 80 dB and passive intermodulation (PIM) levels below –153 dBc @ 2×43 dBm.

**Band n77 (3.3–4.2 GHz)**: Wide 900 MHz allocation demands filters with flat in-band response and controlled group delay across the entire passband.

### mmWave (26/28/39 GHz) Challenges

mmWave deployments present a fundamentally different RF challenge set:

**High path loss**: Free-space path loss at 28 GHz is ~20 dB greater than at 3.5 GHz, requiring high-EIRP systems with beamforming arrays.

**Beam management overhead**: Narrow beams (< 10° HPBW) require precise mechanical or electronic steering and beam tracking algorithms.

**Component integration**: SMA connectors are impractical at 28 GHz; waveguide or 2.92mm connectors with minimal insertion loss are required.

**Material sensitivity**: PCB laminate selection (low-Dk, low-Df materials like Rogers RO4350B) becomes critical for minimizing conductor and dielectric loss.

### PIM (Passive Intermodulation) Considerations

PIM is a critical quality metric for base station components. Loose mechanical connections, contaminated surfaces, or ferromagnetic materials in the RF path generate intermodulation products that desensitize the receive path.

Anand Technologies designs and tests all base station components to IEC 62037 PIM standards:

- **Filters and duplexers**: PIM < –153 dBc @ 2×43 dBm
- **Cable assemblies**: PIM < –160 dBc @ 2×43 dBm
- **Antennas**: PIM < –150 dBc @ 2×43 dBm

### Custom 5G RF Solutions

Our engineering team has designed and qualified 5G NR RF components for several Indian and international OEMs. We offer:

- Sub-6 GHz cavity duplexers for macro gRRU
- mmWave waveguide components for 28/39 GHz AAU
- Custom RF cable assemblies with low PIM
- Multi-band diplexers for combined 4G/5G RRU architectures

Contact us to discuss your 5G RF component requirements.
    `,
  },
]

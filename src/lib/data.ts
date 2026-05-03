export const productCategories = [
  { name: 'GSM / LTE Antennas', slug: 'gsm-lte-antennas', description: 'Quad-band GSM, 2G/3G/4G LTE antennas — external, internal, modem, sleeve, and fiberglass types.', icon: 'Radio' },
  { name: 'GPS / GNSS Antennas', slug: 'gps-gnss-antennas', description: 'GPS, GLONASS, IRNSS, and multi-constellation GNSS antennas with active and passive options.', icon: 'Satellite' },
  { name: 'WiFi Antennas', slug: 'wifi-antennas', description: 'Single and dual-band 2.4/5 GHz WiFi antennas — omni, Yagi, panel, fiberglass, and ceiling types.', icon: 'Wifi' },
  { name: 'VHF / UHF Antennas', slug: 'vhf-uhf-antennas', description: 'VHF and UHF antennas for land mobile radio, handheld terminals, and tactical communications.', icon: 'Antenna' },
  { name: 'High Gain Antennas', slug: 'high-gain-antennas', description: 'High-gain GSM, GPS, WiFi, and VHF antennas — helical, fiberglass networking, Yagi, and panel types.', icon: 'Signal' },
  { name: 'RFID Antennas', slug: 'rfid-antennas', description: 'LF/HF/UHF RFID antennas for asset tracking, access control, and logistics applications.', icon: 'Tag' },
  { name: 'LPA / Wideband Antennas', slug: 'lpa-antennas', description: 'Log-periodic and wideband antennas covering 1 MHz to 6 GHz for EMC, SIGINT, and measurement.', icon: 'Activity' },
  { name: 'Duplexers', slug: 'duplexers', description: 'Cavity duplexers for VHF, UHF, and cellular bands — 136 MHz to 1785 MHz.', icon: 'ArrowLeftRight' },
  { name: 'Diplexers', slug: 'diplexers', description: 'Frequency-combining diplexers for multi-band antenna port integration.', icon: 'Split' },
  { name: 'Power Splitters', slug: 'power-splitters', description: '1×2, 1×4, 1×8, 1×16 RF power splitters from 350 MHz to 8 GHz — low power and GPS types.', icon: 'GitBranch' },
  { name: 'Attenuators', slug: 'attenuators', description: 'Fixed, variable, and programmable RF attenuators — manual rotary and digital step types.', icon: 'Minus' },
  { name: 'Couplers', slug: 'couplers', description: 'Directional and hybrid RF couplers for power monitoring and signal sampling.', icon: 'Share2' },
  { name: 'Band Pass Filters', slug: 'band-pass-filters', description: 'RF bandpass filters for channel selection and interference rejection across cellular and ISM bands.', icon: 'Filter' },
  { name: 'Lightning Arrestors', slug: 'lightning-arrestors', description: 'RF lightning surge protectors for antenna feedlines up to 6 GHz.', icon: 'Zap' },
  { name: 'RF Cable Assemblies', slug: 'rf-cable-assemblies', description: 'Precision coaxial cable assemblies — SMA, RPSMA, BNC, UFL, MMCX, TNC, N-type on RG174/178/316/402.', icon: 'Cable' },
  { name: 'Power Amplifiers', slug: 'power-amplifiers', description: 'RF power amplifiers and LNA modules — 1W to 2W PA, driver stages, and switch modules.', icon: 'Zap' },
  { name: 'Waveguide Components', slug: 'waveguide', description: 'Waveguide couplers, loads, and horn antennas for microwave frequency applications.', icon: 'Waves' },
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
    products: ['Duplexers', 'Band Pass Filters', 'RF Cable Assemblies'],
    icon: 'Tower',
  },
  {
    name: 'Defense & Aerospace',
    slug: 'defense',
    description: 'Mission-critical RF components built to MIL-SPEC tolerances for defense systems.',
    challenge: 'Extreme environmental conditions, EMI resilience, and frequency agility across contested spectrums.',
    solutions: [
      'LPA wideband antennas for SIGINT and EW applications',
      'High-gain directional antennas for SATCOM and ECM',
      'Ruggedized cable assemblies and waveguide components',
    ],
    products: ['LPA / Wideband Antennas', 'High Gain Antennas', 'Waveguide Components'],
    icon: 'Shield',
  },
  {
    name: 'Automotive & V2X',
    slug: 'automotive',
    description: 'Compact, reliable RF solutions for connected vehicle communication and ADAS.',
    challenge: 'Multi-band coexistence, vibration tolerance, and integration in constrained automotive environments.',
    solutions: [
      'Multi-band GSM/GPS combo antennas for telematics',
      'Compact internal antennas for embedded vehicle modules',
      'Diplexers for V2X and LTE coexistence',
    ],
    products: ['GSM / LTE Antennas', 'GPS / GNSS Antennas', 'Diplexers'],
    icon: 'Car',
  },
  {
    name: 'Industrial & SCADA',
    slug: 'industrial',
    description: 'Reliable RF infrastructure for industrial automation, monitoring, and control systems.',
    challenge: 'Harsh RF environments, long-range communication requirements, and uptime-critical deployments.',
    solutions: [
      'Fiberglass networking antennas for SCADA field nodes',
      'Lightning arrestors for outdoor antenna protection',
      'Power splitters for distributed antenna systems',
    ],
    products: ['High Gain Antennas', 'Lightning Arrestors', 'Power Splitters'],
    icon: 'Factory',
  },
  {
    name: 'IoT & Smart Systems',
    slug: 'iot',
    description: 'Miniaturized RF components enabling reliable wireless connectivity for IoT ecosystems.',
    challenge: 'Low-power operation, multi-protocol coexistence, and mass deployment at scale.',
    solutions: [
      'PCB-mount and internal antennas for constrained IoT form factors',
      'WiFi and GSM combo antennas for gateway devices',
      'RFID antennas for asset tracking and smart logistics',
    ],
    products: ['WiFi Antennas', 'RFID Antennas', 'GSM / LTE Antennas'],
    icon: 'Cpu',
  },
]

// ─── FULL PRODUCT CATALOG ────────────────────────────────────────────────────

export const sampleProducts = [

  // ── GSM / LTE ANTENNAS ──────────────────────────────────────────────────────
  {
    id: 'gsm-001', name: 'AT-ANT-QGSM-SMA210-3.5(SL)', slug: 'at-ant-qgsm-sma210-35-sl',
    category: 'gsm-lte-antennas', short_spec: 'Quad-band GSM Sleeve Antenna, SMA, 210mm',
    frequency_range: '824–2170 MHz',
    description: 'Quad-band GSM/GPRS/EDGE sleeve-type external antenna with SMA male connector and 210mm cable. Covers all major GSM 850/900/1800/1900 bands.',
    specs: { 'Frequency': '824–960 / 1710–2170 MHz', 'Gain': '3.5 dBi', 'Type': 'Sleeve', 'Connector': 'SMA Male', 'Cable': 'RG174, 210mm', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1', 'Polarization': 'Vertical' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'gsm-002', name: 'AT-ANT-QGSM-SMA110-3.0(SL)', slug: 'at-ant-qgsm-sma110-30-sl',
    category: 'gsm-lte-antennas', short_spec: 'Quad-band GSM Sleeve Antenna, SMA, 110mm',
    frequency_range: '824–2170 MHz',
    description: 'Compact quad-band GSM sleeve antenna with SMA male connector and 110mm cable. Ideal for space-constrained modem and router applications.',
    specs: { 'Frequency': '824–960 / 1710–2170 MHz', 'Gain': '3.0 dBi', 'Type': 'Sleeve', 'Connector': 'SMA Male', 'Cable': 'RG174, 110mm', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'gsm-003', name: 'AT-ANT-QGSM-SMA305-5.0(SL)', slug: 'at-ant-qgsm-sma305-50-sl',
    category: 'gsm-lte-antennas', short_spec: 'Quad-band GSM Sleeve Antenna, SMA, 305mm',
    frequency_range: '824–2170 MHz',
    description: 'Long-cable quad-band GSM sleeve antenna for panel-mounted and DIN-rail industrial applications requiring cable routing.',
    specs: { 'Frequency': '824–2170 MHz', 'Gain': '5.0 dBi', 'Connector': 'SMA Male', 'Cable': 'RG174, 305mm', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'gsm-004', name: 'AT-ANT-QGSM-SMAR70-3.0', slug: 'at-ant-qgsm-smar70-30',
    category: 'gsm-lte-antennas', short_spec: 'Quad-band GSM Modem Antenna, SMA RA, 70mm',
    frequency_range: '824–2170 MHz',
    description: 'Right-angle SMA modem antenna for GSM/3G modems. 70mm stub with right-angle SMA male connector for board-edge mounting.',
    specs: { 'Frequency': '824–2170 MHz', 'Gain': '3.0 dBi', 'Connector': 'SMA Male RA', 'Length': '70mm', 'Impedance': '50 Ω', 'VSWR': '< 2.5:1' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'gsm-005', name: 'AT-ANT-QGSM-SMAR90-3.0', slug: 'at-ant-qgsm-smar90-30',
    category: 'gsm-lte-antennas', short_spec: 'Quad-band GSM Modem Antenna, SMA RA, 90mm',
    frequency_range: '824–2170 MHz',
    description: 'Compact right-angle stub antenna for GSM/3G/4G modem boards. SMA male right-angle connector, 90mm length.',
    specs: { 'Frequency': '824–2170 MHz', 'Gain': '3.0 dBi', 'Connector': 'SMA Male RA', 'Length': '90mm', 'Impedance': '50 Ω', 'VSWR': '< 2.5:1' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'gsm-006', name: 'AT-ANT-QGSM-UFL1.13-0.18-3.0', slug: 'at-ant-qgsm-ufl-018-30',
    category: 'gsm-lte-antennas', short_spec: 'Quad-band GSM Internal Antenna, UFL, 180mm',
    frequency_range: '824–2170 MHz',
    description: 'Internal PCB-mount quad-band GSM antenna with UFL connector and 1.13mm coax, 180mm cable. Designed for embedded M2M and IoT modules.',
    specs: { 'Frequency': '824–2170 MHz', 'Gain': '3.0 dBi', 'Connector': 'UFL (IPEX)', 'Cable': '1.13mm, 180mm', 'Impedance': '50 Ω', 'Mount': 'Adhesive / PCB' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'gsm-007', name: 'AT-ANT-QGSM-FGNW-NF600-5.0', slug: 'at-ant-qgsm-fgnw-nf600-50',
    category: 'gsm-lte-antennas', short_spec: 'Quad-band GSM Fiberglass Networking Antenna, N Female, 600mm',
    frequency_range: '824–2170 MHz',
    description: 'Heavy-duty outdoor fiberglass GSM antenna with N Female connector and 600mm radome. Suitable for cellular base repeaters, industrial routers, and outdoor access points.',
    specs: { 'Frequency': '824–2170 MHz', 'Gain': '5.0 dBi', 'Connector': 'N Female', 'Radome Length': '600mm', 'Material': 'Fibreglass', 'IP Rating': 'IP65', 'Impedance': '50 Ω', 'VSWR': '< 1.5:1', 'Mount': 'Pole mount included' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'gsm-008', name: 'AT-ANT-QGSM-HMM-SMA174-3-5.0', slug: 'at-ant-qgsm-hmm-sma174-3-50',
    category: 'gsm-lte-antennas', short_spec: 'Quad-band GSM Helical Antenna, SMA, 5.0 dBi',
    frequency_range: '824–2170 MHz',
    description: 'Helical coil quad-band GSM antenna with SMA male connector. High-gain helical design for improved link margin in challenging environments.',
    specs: { 'Frequency': '824–2170 MHz', 'Gain': '5.0 dBi', 'Type': 'Helical', 'Connector': 'SMA Male', 'Cable': 'RG174, 3m', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'gsm-009', name: 'AT-ANT-CDMA-SMA210-3.5(SL)', slug: 'at-ant-cdma-sma210-35-sl',
    category: 'gsm-lte-antennas', short_spec: 'CDMA Sleeve Antenna, SMA, 210mm',
    frequency_range: '824–894 / 1850–1990 MHz',
    description: 'CDMA 800/1900 MHz sleeve antenna with SMA male connector and 210mm cable. Used in CDMA modems, fixed wireless terminals, and M2M devices.',
    specs: { 'Frequency': '824–894 / 1850–1990 MHz', 'Gain': '3.5 dBi', 'Type': 'Sleeve', 'Connector': 'SMA Male', 'Cable': 'RG174, 210mm', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'gsm-010', name: 'AT-ANT-LTE-B1-SMA210-3.5(SL)', slug: 'at-ant-lte-b1-sma210-35-sl',
    category: 'gsm-lte-antennas', short_spec: 'LTE Band 1 Sleeve Antenna, SMA, 210mm',
    frequency_range: '1920–2170 MHz',
    description: 'LTE Band 1 (2100 MHz) sleeve antenna with SMA male connector. Optimised for 3G UMTS/WCDMA and LTE Band 1 operation.',
    specs: { 'Frequency': '1920–2170 MHz', 'Gain': '3.5 dBi', 'Type': 'Sleeve', 'Connector': 'SMA Male', 'Cable': 'RG174, 210mm', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'gsm-011', name: 'AT-ANT-LTE-B3-SMA260-3.5(SL)', slug: 'at-ant-lte-b3-sma260-35-sl',
    category: 'gsm-lte-antennas', short_spec: 'LTE Band 3 Sleeve Antenna, SMA, 260mm',
    frequency_range: '1710–1880 MHz',
    description: 'LTE Band 3 (1800 MHz) sleeve antenna — the primary band for Indian 4G deployments. SMA male with 260mm RG174 cable.',
    specs: { 'Frequency': '1710–1880 MHz', 'Gain': '3.5 dBi', 'Type': 'Sleeve', 'Connector': 'SMA Male', 'Cable': 'RG174, 260mm', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'gsm-012', name: 'AT-ANT-LTE-B28-SMA260-3.5(SL)', slug: 'at-ant-lte-b28-sma260-35-sl',
    category: 'gsm-lte-antennas', short_spec: 'LTE Band 28 Sleeve Antenna, SMA, 260mm',
    frequency_range: '700–803 MHz',
    description: 'LTE Band 28 (700 MHz APT) sleeve antenna for rural and deep-indoor 4G coverage. SMA male connector with 260mm cable.',
    specs: { 'Frequency': '700–803 MHz', 'Gain': '3.5 dBi', 'Type': 'Sleeve', 'Connector': 'SMA Male', 'Cable': 'RG174, 260mm', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'gsm-013', name: 'AT-ANT-LTE-B71-SMA290-3.5(SL)', slug: 'at-ant-lte-b71-sma290-35-sl',
    category: 'gsm-lte-antennas', short_spec: 'LTE Band 71 Sleeve Antenna, SMA, 290mm',
    frequency_range: '617–698 MHz',
    description: 'LTE Band 71 (600 MHz) sleeve antenna for extended rural coverage. Long 290mm cable for panel-mount routing.',
    specs: { 'Frequency': '617–698 MHz', 'Gain': '3.5 dBi', 'Type': 'Sleeve', 'Connector': 'SMA Male', 'Cable': 'RG174, 290mm', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'gsm-014', name: 'AT-ANT-4G-LTE-SMA3-200', slug: 'at-ant-4g-lte-sma3-200',
    category: 'gsm-lte-antennas', short_spec: '4G LTE Omni Antenna, SMA, 3 dBi, 200mm',
    frequency_range: '700–2700 MHz',
    description: 'Wideband 4G LTE omnidirectional antenna covering all major LTE bands from 700 MHz to 2700 MHz. SMA male with 200mm cable.',
    specs: { 'Frequency': '700–2700 MHz', 'Gain': '3 dBi', 'Connector': 'SMA Male', 'Cable': '200mm', 'Impedance': '50 Ω', 'VSWR': '< 2.5:1', 'Polarization': 'Vertical' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'gsm-015', name: 'AT-ANT-4G-LTE-SMA5-250', slug: 'at-ant-4g-lte-sma5-250',
    category: 'gsm-lte-antennas', short_spec: '4G LTE Omni Antenna, SMA, 5 dBi, 250mm',
    frequency_range: '700–2700 MHz',
    description: 'High-gain wideband 4G LTE antenna for CPE routers and industrial gateways. SMA male with 250mm cable.',
    specs: { 'Frequency': '700–2700 MHz', 'Gain': '5 dBi', 'Connector': 'SMA Male', 'Cable': '250mm', 'Impedance': '50 Ω', 'VSWR': '< 2.5:1' },
    datasheet_url: null, created_at: '2024-01-01',
  },

  // ── GPS / GNSS ANTENNAS ─────────────────────────────────────────────────────
  {
    id: 'gps-001', name: 'AT-ANT-GPSE-SMA-MM174-5.0TCS', slug: 'at-ant-gpse-sma-mm174-50tcs',
    category: 'gps-gnss-antennas', short_spec: 'GPS External Active Antenna, SMA, 28dB LNA, 5m Cable',
    frequency_range: '1575.42 MHz (L1)',
    description: 'GPS L1 active external antenna with integrated 28 dB LNA. SMA male connector with 5m RG174 cable and weather-resistant housing. Suitable for vehicle tracking and navigation systems.',
    specs: { 'Frequency': '1575.42 MHz', 'LNA Gain': '28 dB', 'Noise Figure': '< 1.5 dB', 'Connector': 'SMA Male', 'Cable': 'RG174, 5m', 'Supply Voltage': '2.7–5.5V DC', 'Current': '< 15 mA', 'IP Rating': 'IP65', 'Temperature': '-40°C to +85°C' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'gps-002', name: 'AT-ANT-GPSE-SMA-MM174-2.8NM', slug: 'at-ant-gpse-sma-mm174-28nm',
    category: 'gps-gnss-antennas', short_spec: 'GPS External Active Antenna, SMA, 28dB LNA, 2.8m Cable',
    frequency_range: '1575.42 MHz (L1)',
    description: 'GPS L1 active antenna with 28 dB LNA and 2.8m RG174 cable. Compact housing for automotive and machine control.',
    specs: { 'Frequency': '1575.42 MHz', 'LNA Gain': '28 dB', 'Connector': 'SMA Male', 'Cable': 'RG174, 2.8m', 'Supply Voltage': '2.7–5.5V', 'Current': '< 15 mA', 'IP Rating': 'IP65' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'gps-003', name: 'AT-ANT-GPSE-SMAM-MM174-30-10', slug: 'at-ant-gpse-smam-mm174-30-10',
    category: 'gps-gnss-antennas', short_spec: 'GPS External Active Antenna, SMA, 30dB LNA, 10m Cable',
    frequency_range: '1575.42 MHz (L1)',
    description: 'Long-cable GPS active antenna with 30 dB LNA for installations requiring extended cable runs. SMA male with 10m RG174 cable.',
    specs: { 'Frequency': '1575.42 MHz', 'LNA Gain': '30 dB', 'Connector': 'SMA Male', 'Cable': 'RG174, 10m', 'Supply Voltage': '3.3–5V', 'Current': '< 20 mA', 'IP Rating': 'IP65' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'gps-004', name: 'AT-ANT-GPSGNSS-UFL1.13-INTERNAL-28', slug: 'at-ant-gpsgnss-ufl-internal-28',
    category: 'gps-gnss-antennas', short_spec: 'GPS/GNSS Internal Active Antenna, UFL, 28dB LNA',
    frequency_range: '1575.42 MHz (L1)',
    description: 'Miniature internal GPS/GNSS active patch antenna with UFL connector. 28 dB LNA integrated. For PCB-level embedding in tracking modules and handhelds.',
    specs: { 'Frequency': '1575.42 MHz', 'LNA Gain': '28 dB', 'Connector': 'UFL (IPEX)', 'Dimensions': '25×25×4mm', 'Supply Voltage': '1.8–5.5V', 'Current': '< 10 mA', 'Mount': 'PCB / adhesive' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'gps-005', name: 'AT-ANT-GPSGNSS-UFL1.13-120-INT-18', slug: 'at-ant-gpsgnss-ufl-120-int-18',
    category: 'gps-gnss-antennas', short_spec: 'GPS/GNSS Internal Antenna, UFL, 18dB LNA, 120mm Cable',
    frequency_range: '1575.42 MHz (L1)',
    description: 'Internal GPS/GNSS patch antenna with UFL connector and 120mm 1.13mm coax cable. 18 dB integrated LNA for compact IoT and wearable devices.',
    specs: { 'Frequency': '1575.42 MHz', 'LNA Gain': '18 dB', 'Connector': 'UFL', 'Cable': '1.13mm, 120mm', 'Supply Voltage': '1.8–3.6V', 'Current': '< 8 mA' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'gps-006', name: 'AT-ANT-CSCM-SMA174-28-3.0', slug: 'at-ant-cscm-sma174-28-30',
    category: 'gps-gnss-antennas', short_spec: 'GPS/GLONASS/IRNSS Combo Antenna, SMA, 28dB, 3m',
    frequency_range: '1575.42 / 1602 / 1176–1227 MHz',
    description: 'Multi-constellation combo antenna supporting GPS L1, GLONASS L1, and IRNSS. 28 dB LNA, SMA male, 3m RG174 cable. For Indian defense and precision navigation systems.',
    specs: { 'Frequency': 'GPS L1 / GLONASS L1 / IRNSS L1+L5', 'LNA Gain': '28 dB', 'Connector': 'SMA Male', 'Cable': 'RG174, 3m', 'Supply Voltage': '2.7–5.5V', 'IP Rating': 'IP65', 'Impedance': '50 Ω' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'gps-007', name: 'AT-ANT-CSCM-SMA316-28-3.0', slug: 'at-ant-cscm-sma316-28-30',
    category: 'gps-gnss-antennas', short_spec: 'GPS/GLONASS/IRNSS Combo Antenna, SMA, RG316, 3m',
    frequency_range: '1575.42 / 1602 / 1176–1227 MHz',
    description: 'Multi-constellation GNSS combo antenna with RG316 low-loss cable for improved performance over longer cable runs. SMA male, 3m cable.',
    specs: { 'Frequency': 'GPS/GLONASS/IRNSS', 'LNA Gain': '28 dB', 'Connector': 'SMA Male', 'Cable': 'RG316, 3m', 'Supply Voltage': '3.3–5V', 'IP Rating': 'IP65' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'gps-008', name: 'AT-ANT-IRNSSL1L5', slug: 'at-ant-irnssl1l5',
    category: 'gps-gnss-antennas', short_spec: 'IRNSS/NavIC Dual-Band Antenna, L1+L5',
    frequency_range: '1176.45 MHz (L5) / 1227.6 MHz (L1)',
    description: 'Dedicated dual-band IRNSS/NavIC antenna covering both L1 and L5 frequencies. Designed for Indian navigation system receivers in defense and transport applications.',
    specs: { 'Frequency': '1176.45 MHz (L5) & 1227.6 MHz (L1)', 'Type': 'Active patch', 'LNA Gain': '28 dB', 'Connector': 'SMA Male', 'IP Rating': 'IP67', 'Temperature': '-40°C to +85°C' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'gps-009', name: 'AT-GPS-FDAMP-SMAF-28', slug: 'at-gps-fdamp-smaf-28',
    category: 'gps-gnss-antennas', short_spec: 'GPS In-Line Feeder Amplifier, SMA Female, 28dB',
    frequency_range: '1575.42 MHz',
    description: 'In-line GPS signal amplifier to compensate cable loss on long antenna feeder runs. 28 dB gain, SMA female in/out, DC pass-through.',
    specs: { 'Frequency': '1575.42 MHz', 'Gain': '28 dB', 'Noise Figure': '< 2.0 dB', 'Connector': 'SMA Female (in/out)', 'Supply Voltage': '3.3–5V (DC via coax)', 'Current': '< 25 mA', 'Impedance': '50 Ω' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'gps-010', name: 'AT-ANT-GPS-HGSCD-NF-40.0(SCADA)', slug: 'at-ant-gps-hgscd-nf-400-scada',
    category: 'gps-gnss-antennas', short_spec: 'GPS High-Gain SCADA Antenna, N Female, 40dB LNA',
    frequency_range: '1575.42 MHz',
    description: 'High-gain GPS antenna specifically designed for SCADA and RTK applications. 40 dB LNA, N Female connector, ruggedised outdoor housing with pole mount.',
    specs: { 'Frequency': '1575.42 MHz', 'LNA Gain': '40 dB', 'Noise Figure': '< 1.0 dB', 'Connector': 'N Female', 'IP Rating': 'IP67', 'Supply Voltage': '5–12V', 'Temperature': '-55°C to +85°C', 'Mount': 'Pole mount' },
    datasheet_url: null, created_at: '2024-01-01',
  },

  // ── WiFi ANTENNAS ───────────────────────────────────────────────────────────
  {
    id: 'wifi-001', name: 'AT-ANT-WIFI-DB-RPSMA205-305-5.0-W', slug: 'at-ant-wifi-db-rpsma205-305-50-w',
    category: 'wifi-antennas', short_spec: 'Dual-band WiFi Antenna, RP-SMA, 5 dBi, 205/305mm',
    frequency_range: '2400–2500 / 5150–5850 MHz',
    description: 'Dual-band 2.4/5 GHz WiFi antenna with RP-SMA male connector. 5 dBi gain across both bands. Weatherproof version for outdoor access points.',
    specs: { 'Frequency': '2.4 GHz & 5 GHz', 'Gain': '5 dBi', 'Connector': 'RP-SMA Male', 'Cable': 'RG174, 205/305mm', 'VSWR': '< 2.0:1', 'Impedance': '50 Ω', 'Polarization': 'Vertical' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'wifi-002', name: 'AT-ANT-WIFI-DB-RPSMA375-7.0', slug: 'at-ant-wifi-db-rpsma375-70',
    category: 'wifi-antennas', short_spec: 'Dual-band WiFi Antenna, RP-SMA, 7 dBi, 375mm',
    frequency_range: '2400–2500 / 5150–5850 MHz',
    description: 'High-gain dual-band WiFi antenna with 7 dBi gain and RP-SMA connector. Suitable for IEEE 802.11 a/b/g/n/ac access points and CPE devices.',
    specs: { 'Frequency': '2.4 & 5 GHz', 'Gain': '7 dBi', 'Connector': 'RP-SMA Male', 'Cable': '375mm', 'VSWR': '< 2.0:1', 'Impedance': '50 Ω' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'wifi-003', name: 'AT-ANT-WIFI-DB-RPSMA430-9.0', slug: 'at-ant-wifi-db-rpsma430-90',
    category: 'wifi-antennas', short_spec: 'Dual-band WiFi Antenna, RP-SMA, 9 dBi, 430mm',
    frequency_range: '2400–2500 / 5150–5850 MHz',
    description: 'High-gain 9 dBi dual-band WiFi antenna with RP-SMA connector and 430mm cable. Ideal for long-range outdoor WiFi links and industrial routers.',
    specs: { 'Frequency': '2.4 & 5 GHz', 'Gain': '9 dBi', 'Connector': 'RP-SMA Male', 'Cable': '430mm', 'VSWR': '< 2.0:1', 'Impedance': '50 Ω' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'wifi-004', name: 'AT-ANT-WIFI-DB-UFL1.13-120-5.0', slug: 'at-ant-wifi-db-ufl-120-50',
    category: 'wifi-antennas', short_spec: 'Dual-band WiFi Internal Antenna, UFL, 5 dBi, 120mm',
    frequency_range: '2400–2500 / 5150–5850 MHz',
    description: 'Internal dual-band WiFi antenna with UFL connector and 120mm 1.13mm coax. Designed for embedded routers and access points.',
    specs: { 'Frequency': '2.4 & 5 GHz', 'Gain': '5 dBi', 'Connector': 'UFL', 'Cable': '1.13mm, 120mm', 'Impedance': '50 Ω', 'Mount': 'Adhesive / clip' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'wifi-005', name: 'AT-ANT-WIFI-FGNW-NFST-12.0', slug: 'at-ant-wifi-fgnw-nfst-120',
    category: 'wifi-antennas', short_spec: 'WiFi Fiberglass Networking Antenna, N Female, 12 dBi',
    frequency_range: '2400–2500 MHz',
    description: 'High-gain outdoor fiberglass WiFi omnidirectional antenna with 12 dBi gain. N Female connector with stainless steel pole mount for outdoor access points and mesh networks.',
    specs: { 'Frequency': '2400–2500 MHz', 'Gain': '12 dBi', 'Connector': 'N Female (stainless)', 'Radome': 'Fibreglass UV-stabilised', 'VSWR': '< 1.5:1', 'IP Rating': 'IP67', 'Wind Rating': '150 km/h', 'Mount': 'Pole mount (stainless)' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'wifi-006', name: 'AT-ANT-WIFI-FGNW-NFST-5.0', slug: 'at-ant-wifi-fgnw-nfst-50',
    category: 'wifi-antennas', short_spec: 'WiFi Fiberglass Networking Antenna, N Female, 5 dBi',
    frequency_range: '2400–2500 MHz',
    description: 'Outdoor fiberglass omnidirectional WiFi antenna with 5 dBi gain. Compact form factor for urban access points and smart city deployments.',
    specs: { 'Frequency': '2400–2500 MHz', 'Gain': '5 dBi', 'Connector': 'N Female', 'IP Rating': 'IP65', 'VSWR': '< 1.5:1', 'Mount': 'Pole mount' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'wifi-007', name: 'AT-ANT-WIFI-YAGI-SMAST58-3-12.0', slug: 'at-ant-wifi-yagi-12dbi',
    category: 'wifi-antennas', short_spec: 'WiFi Yagi Directional Antenna, SMA, 12 dBi',
    frequency_range: '2400–2500 MHz',
    description: 'Directional Yagi antenna for long-range point-to-point WiFi links at 2.4 GHz. 12 dBi gain with narrow beamwidth for link budget improvement.',
    specs: { 'Frequency': '2400–2500 MHz', 'Gain': '12 dBi', 'Type': 'Yagi', 'Connector': 'SMA Male', 'Cable': 'RG58, 3m', 'HPBW': '≈ 30°', 'VSWR': '< 1.5:1', 'Impedance': '50 Ω' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'wifi-008', name: 'AT-ANT-WIFI-PP-NF-18.0', slug: 'at-ant-wifi-pp-nf-180',
    category: 'wifi-antennas', short_spec: 'WiFi Panel Antenna, N Female, 18 dBi',
    frequency_range: '2400–2500 MHz',
    description: 'High-gain flat panel directional WiFi antenna for sector coverage and point-to-point backhaul. 18 dBi gain, N Female connector.',
    specs: { 'Frequency': '2400–2500 MHz', 'Gain': '18 dBi', 'Type': 'Panel / flat patch array', 'Connector': 'N Female', 'HPBW (Az/El)': '≈ 15° / 15°', 'VSWR': '< 1.5:1', 'IP Rating': 'IP65', 'Mount': 'Wall / pole' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'wifi-009', name: 'AT-ANT-WIFI-CEILING-SMA58-500-6.0', slug: 'at-ant-wifi-ceiling-6dbi',
    category: 'wifi-antennas', short_spec: 'WiFi Ceiling Dome Antenna, SMA, 6 dBi, 500mm',
    frequency_range: '2400–2500 MHz',
    description: 'Indoor ceiling-mount omnidirectional WiFi antenna for indoor access point deployments. 6 dBi gain with SMA male connector and 500mm cable.',
    specs: { 'Frequency': '2400–2500 MHz', 'Gain': '6 dBi', 'Type': 'Ceiling dome', 'Connector': 'SMA Male', 'Cable': 'RG58, 500mm', 'VSWR': '< 1.5:1', 'Mount': 'Ceiling T-bar / screw' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'wifi-010', name: 'AT-ANT-WIFI-HORN-NFST-24.0', slug: 'at-ant-wifi-horn-24dbi',
    category: 'wifi-antennas', short_spec: 'WiFi Horn Antenna, N Female, 24 dBi',
    frequency_range: '2400–2500 MHz',
    description: 'High-gain horn antenna for long-range directional WiFi links. 24 dBi gain with very narrow beamwidth for point-to-point applications up to several km.',
    specs: { 'Frequency': '2400–2500 MHz', 'Gain': '24 dBi', 'Type': 'Horn', 'Connector': 'N Female (stainless)', 'HPBW': '≈ 10°', 'VSWR': '< 1.5:1', 'Material': 'Aluminium', 'Mount': 'Pole / tripod' },
    datasheet_url: null, created_at: '2024-01-01',
  },

  // ── VHF / UHF ANTENNAS ──────────────────────────────────────────────────────
  {
    id: 'vhf-001', name: 'AT-ANT-VHF-SMA-DR-3.0', slug: 'at-ant-vhf-sma-dr-30',
    category: 'vhf-uhf-antennas', short_spec: 'VHF Dipole Rubber Duck Antenna, SMA, 3 dBi',
    frequency_range: '136–174 MHz',
    description: 'VHF rubber duck antenna for land mobile radio and military communication handsets. SMA male connector, flexible whip with 3 dBi gain.',
    specs: { 'Frequency': '136–174 MHz', 'Gain': '3 dBi', 'Type': 'Rubber duck / dipole', 'Connector': 'SMA Male', 'Length': '≈ 420mm', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'vhf-002', name: 'AT-ANT-VHF-RPSMA-DR-3.0', slug: 'at-ant-vhf-rpsma-dr-30',
    category: 'vhf-uhf-antennas', short_spec: 'VHF Dipole Rubber Duck Antenna, RP-SMA, 3 dBi',
    frequency_range: '136–174 MHz',
    description: 'VHF rubber duck antenna with RP-SMA male connector for devices using RP-SMA interface in the 136–174 MHz VHF band.',
    specs: { 'Frequency': '136–174 MHz', 'Gain': '3 dBi', 'Connector': 'RP-SMA Male', 'Length': '≈ 420mm', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'vhf-003', name: 'AT-ANT-VHF-SMAR-HHT-3.0', slug: 'at-ant-vhf-smar-hht-30',
    category: 'vhf-uhf-antennas', short_spec: 'VHF Handheld Terminal Antenna, SMA RA, 3 dBi',
    frequency_range: '136–174 MHz',
    description: 'VHF handheld terminal antenna with right-angle SMA connector for tactical radio handsets and body-worn devices.',
    specs: { 'Frequency': '136–174 MHz', 'Gain': '3 dBi', 'Connector': 'SMA Male RA', 'Type': 'Helical stub', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'vhf-004', name: 'AT-ANT-VHF-BNC-5.0', slug: 'at-ant-vhf-bnc-50',
    category: 'vhf-uhf-antennas', short_spec: 'VHF Antenna, BNC, 5 dBi',
    frequency_range: '136–174 MHz',
    description: 'VHF antenna with BNC male connector for test equipment, radio scanners, and land mobile radio base stations.',
    specs: { 'Frequency': '136–174 MHz', 'Gain': '5 dBi', 'Connector': 'BNC Male', 'Impedance': '50 Ω', 'VSWR': '< 1.5:1', 'Polarization': 'Vertical' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'vhf-005', name: 'AT-ANT-VHF-BNC440-7.0(SL)', slug: 'at-ant-vhf-bnc440-70-sl',
    category: 'vhf-uhf-antennas', short_spec: 'VHF High-Gain Sleeve Antenna, BNC, 7 dBi, 440mm',
    frequency_range: '136–174 MHz',
    description: 'High-gain VHF sleeve antenna with BNC male connector and 440mm cable. For vehicle-mounted and fixed base station VHF communication.',
    specs: { 'Frequency': '136–174 MHz', 'Gain': '7 dBi', 'Type': 'Sleeve', 'Connector': 'BNC Male', 'Cable': '440mm', 'Impedance': '50 Ω', 'VSWR': '< 1.5:1' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'vhf-006', name: 'AT-ANT-UHF-SMA210-3.5(SL)', slug: 'at-ant-uhf-sma210-35-sl',
    category: 'vhf-uhf-antennas', short_spec: 'UHF Sleeve Antenna, SMA, 3.5 dBi, 210mm',
    frequency_range: '400–470 MHz',
    description: 'UHF sleeve antenna covering the 400–470 MHz TETRA/P25 and IoT frequency bands. SMA male with 210mm cable.',
    specs: { 'Frequency': '400–470 MHz', 'Gain': '3.5 dBi', 'Type': 'Sleeve', 'Connector': 'SMA Male', 'Cable': 'RG174, 210mm', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1' },
    datasheet_url: null, created_at: '2024-01-01',
  },

  // ── HIGH GAIN ANTENNAS ──────────────────────────────────────────────────────
  {
    id: 'hga-001', name: 'AT-ANT-GPS-HGM-SMA58-1-35.0', slug: 'at-ant-gps-hgm-sma58-1-350',
    category: 'high-gain-antennas', short_spec: 'GPS High-Gain Active Antenna, SMA, 35dB LNA, 1m Cable',
    frequency_range: '1575.42 MHz',
    description: 'High-gain GPS active antenna with 35 dB LNA for long cable runs. SMA male with RG58 1m cable and large-aperture patch element for maximum signal capture.',
    specs: { 'Frequency': '1575.42 MHz', 'LNA Gain': '35 dB', 'Noise Figure': '< 1.0 dB', 'Connector': 'SMA Male', 'Cable': 'RG58, 1m', 'Supply': '3.3–5V', 'IP Rating': 'IP67', 'Temperature': '-40°C to +85°C' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'hga-002', name: 'AT-ANT-QGSM-FGNW-NF213-500-10.0', slug: 'at-ant-qgsm-fgnw-nf213-500-100',
    category: 'high-gain-antennas', short_spec: 'GSM High-Gain Fiberglass Antenna, N Female, 10 dBi, 500mm',
    frequency_range: '824–2170 MHz',
    description: 'High-gain outdoor omnidirectional GSM/3G fiberglass antenna for base repeaters and long-range coverage. 10 dBi gain, N Female, 500mm radome.',
    specs: { 'Frequency': '824–2170 MHz', 'Gain': '10 dBi', 'Connector': 'N Female', 'Radome': 'Fibreglass, 500mm', 'IP Rating': 'IP67', 'VSWR': '< 1.5:1', 'Mount': 'Pole mount' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'hga-003', name: 'AT-ANT-QGSM-FGNW-NF213-500-7.0', slug: 'at-ant-qgsm-fgnw-nf213-500-70',
    category: 'high-gain-antennas', short_spec: 'GSM High-Gain Fiberglass Antenna, N Female, 7 dBi',
    frequency_range: '824–2170 MHz',
    description: 'Medium-gain outdoor fiberglass GSM antenna with 7 dBi gain. For urban repeater and multi-operator DAS applications.',
    specs: { 'Frequency': '824–2170 MHz', 'Gain': '7 dBi', 'Connector': 'N Female', 'IP Rating': 'IP65', 'VSWR': '< 1.5:1', 'Mount': 'Pole' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'hga-004', name: 'AT-ANT-WIFI-BFIRE-NF240-500-24.0', slug: 'at-ant-wifi-bfire-nf240-500-240',
    category: 'high-gain-antennas', short_spec: 'WiFi Backfire Antenna, N Female, 24 dBi',
    frequency_range: '2400–2500 MHz',
    description: 'Ultra high-gain backfire directional antenna for long-range 2.4 GHz WiFi links. 24 dBi gain, N Female connector, very narrow beam for point-to-point links over several km.',
    specs: { 'Frequency': '2400–2500 MHz', 'Gain': '24 dBi', 'Type': 'Backfire', 'Connector': 'N Female', 'HPBW': '≈ 8°', 'VSWR': '< 1.5:1', 'Mount': 'Pole / tripod' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'hga-005', name: 'AT-ANT-WIFI-PRB-NFST-500-24.0', slug: 'at-ant-wifi-prb-nfst-500-240',
    category: 'high-gain-antennas', short_spec: 'WiFi Parabolic Dish Antenna, N Female, 24 dBi',
    frequency_range: '2400–2500 MHz',
    description: 'Parabolic reflector WiFi antenna with 24 dBi gain for long-range point-to-point wireless backhaul links at 2.4 GHz.',
    specs: { 'Frequency': '2400–2500 MHz', 'Gain': '24 dBi', 'Type': 'Parabolic reflector', 'Connector': 'N Female', 'HPBW': '≈ 8°', 'F/B Ratio': '> 35 dB', 'IP Rating': 'IP65', 'Mount': 'Pole / tripod' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'hga-006', name: 'AT-ANT-VHF-PM-BNC174-200-6.0', slug: 'at-ant-vhf-pm-bnc174-200-60',
    category: 'high-gain-antennas', short_spec: 'VHF Pole-Mount High-Gain Antenna, BNC, 6 dBi, 200mm',
    frequency_range: '136–174 MHz',
    description: 'High-gain VHF pole-mount antenna with BNC male and RG174 cable. For fixed base station and repeater applications in the VHF land mobile band.',
    specs: { 'Frequency': '136–174 MHz', 'Gain': '6 dBi', 'Connector': 'BNC Male', 'Cable': 'RG174, 200mm', 'VSWR': '< 1.5:1', 'Mount': 'Pole', 'IP Rating': 'IP65' },
    datasheet_url: null, created_at: '2024-01-01',
  },

  // ── RFID ANTENNAS ───────────────────────────────────────────────────────────
  {
    id: 'rfid-001', name: 'AT-ANT-UHF-RFID', slug: 'at-ant-uhf-rfid',
    category: 'rfid-antennas', short_spec: 'UHF RFID Antenna, 865–868 MHz',
    frequency_range: '865–868 MHz',
    description: 'UHF RFID antenna for Indian RFID frequency band (865–868 MHz). Circular polarisation for reliable tag read regardless of orientation. SMA female connector.',
    specs: { 'Frequency': '865–868 MHz', 'Polarization': 'RHCP', 'Gain': '6 dBic', 'Connector': 'SMA Female', 'VSWR': '< 1.5:1', 'Impedance': '50 Ω', 'IP Rating': 'IP54', 'Applications': 'Logistics, access control, asset tracking' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'rfid-002', name: 'AT-ANT-LF-HF-RFID', slug: 'at-ant-lf-hf-rfid',
    category: 'rfid-antennas', short_spec: 'LF/HF RFID Antenna, 125 kHz / 13.56 MHz',
    frequency_range: '125 kHz / 13.56 MHz',
    description: 'Dual-frequency LF and HF RFID antenna supporting 125 kHz EM4100 and 13.56 MHz ISO 15693 / NFC protocols. For access control and industrial tracking.',
    specs: { 'Frequency': '125 kHz / 13.56 MHz', 'Protocol': 'EM4100, ISO 15693, NFC', 'Connector': 'SMA Female', 'Read Range': 'Up to 10cm (HF), up to 8cm (LF)', 'Impedance': '50 Ω' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'rfid-003', name: 'AT-UHF-RFID-2CH4PO-MR6132A', slug: 'at-uhf-rfid-2ch4po-mr6132a',
    category: 'rfid-antennas', short_spec: 'UHF RFID Reader Module, 2-Channel 4-Port, 865–868 MHz',
    frequency_range: '865–868 MHz',
    description: 'UHF RFID reader module with 2-channel, 4-port antenna switching. RS232/USB interface. Suitable for multi-zone tracking and conveyor applications.',
    specs: { 'Frequency': '865–868 MHz', 'Channels': '2', 'Antenna Ports': '4', 'Output Power': 'Up to 30 dBm', 'Interface': 'RS232 / USB', 'Protocol': 'EPC Gen2 / ISO 18000-6C', 'Supply': '5V DC' },
    datasheet_url: null, created_at: '2024-01-01',
  },

  // ── LPA / WIDEBAND ANTENNAS ─────────────────────────────────────────────────
  {
    id: 'lpa-001', name: 'LPA-20-3000MHz', slug: 'lpa-20-3000mhz',
    category: 'lpa-antennas', short_spec: 'Log-Periodic Antenna, 20–3000 MHz',
    frequency_range: '20–3000 MHz',
    description: 'Broadband log-periodic dipole array antenna covering 20 MHz to 3 GHz. For EMC testing, SIGINT, spectrum monitoring, and wideband RF measurement.',
    specs: { 'Frequency': '20–3000 MHz', 'Gain': '6–9 dBi (avg)', 'Type': 'Log-Periodic Dipole Array', 'Connector': 'N Female', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1', 'Polarization': 'Linear', 'Power': '100W' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'lpa-002', name: 'LPA-1-30MHz', slug: 'lpa-1-30mhz',
    category: 'lpa-antennas', short_spec: 'Log-Periodic Antenna, 1–30 MHz (HF)',
    frequency_range: '1–30 MHz',
    description: 'HF log-periodic antenna for 1–30 MHz coverage. Used in HF communications monitoring, SIGINT, and shortwave broadcasting measurement.',
    specs: { 'Frequency': '1–30 MHz', 'Gain': '5–8 dBi', 'Type': 'Log-Periodic', 'Connector': 'N Female', 'Impedance': '50 Ω', 'Polarization': 'Linear horizontal', 'Power': '200W' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'lpa-003', name: 'LPA-30-500MHz', slug: 'lpa-30-500mhz',
    category: 'lpa-antennas', short_spec: 'Log-Periodic Antenna, 30–500 MHz (VHF/UHF)',
    frequency_range: '30–500 MHz',
    description: 'VHF/UHF log-periodic antenna from 30–500 MHz for EMC pre-compliance, military comms monitoring, and broadcast monitoring.',
    specs: { 'Frequency': '30–500 MHz', 'Gain': '6–9 dBi', 'Connector': 'N Female', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1', 'Polarization': 'Linear', 'Power': '150W' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'lpa-004', name: 'LPA-500-6000MHz', slug: 'lpa-500-6000mhz',
    category: 'lpa-antennas', short_spec: 'Log-Periodic Antenna, 500 MHz–6 GHz',
    frequency_range: '500–6000 MHz',
    description: 'Wideband log-periodic antenna covering 500 MHz to 6 GHz. Ideal for 5G/WiFi/cellular spectrum monitoring, EMC testing, and wideband signal intelligence.',
    specs: { 'Frequency': '500–6000 MHz', 'Gain': '7–10 dBi', 'Connector': 'N Female', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1', 'Polarization': 'Linear', 'Power': '50W' },
    datasheet_url: null, created_at: '2024-01-01',
  },

  // ── DUPLEXERS ───────────────────────────────────────────────────────────────
  {
    id: 'dup-001', name: 'DUPLEXER-136-174MHz', slug: 'duplexer-136-174mhz',
    category: 'duplexers', short_spec: 'VHF Cavity Duplexer, 136–174 MHz',
    frequency_range: '136–174 MHz',
    description: 'VHF cavity duplexer for land mobile radio base stations operating in the 136–174 MHz band. Enables simultaneous transmit and receive on a single antenna.',
    specs: { 'TX Band': '136–148 MHz', 'RX Band': '148–174 MHz', 'Insertion Loss TX': '< 1.5 dB', 'Insertion Loss RX': '< 1.5 dB', 'TX-RX Isolation': '> 70 dB', 'VSWR': '< 1.3:1', 'Power': '50W avg', 'Connector': 'N Female', 'Temperature': '-30°C to +70°C' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'dup-002', name: 'DUPLEXER-703-733MHz', slug: 'duplexer-703-733mhz',
    category: 'duplexers', short_spec: 'LTE Band 28 Cavity Duplexer, 703–733 MHz',
    frequency_range: '703–748 MHz',
    description: 'Cavity duplexer for LTE Band 28 (APT 700) base stations. Covers 703–733 MHz TX and 758–788 MHz RX with high isolation and low insertion loss.',
    specs: { 'TX Band': '703–733 MHz', 'RX Band': '758–788 MHz', 'Insertion Loss TX': '< 1.2 dB', 'Insertion Loss RX': '< 1.2 dB', 'TX-RX Isolation': '> 75 dB', 'VSWR': '< 1.3:1', 'Power': '100W avg', 'Connector': 'N Female' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'dup-003', name: 'DUPLEXER-758-803MHz', slug: 'duplexer-758-803mhz',
    category: 'duplexers', short_spec: 'LTE Band 20 Cavity Duplexer, 758–803 MHz',
    frequency_range: '758–862 MHz',
    description: 'LTE Band 20 (800 MHz) cavity duplexer for European and Indian rural 4G base stations. High isolation and low PIM design.',
    specs: { 'TX Band': '791–821 MHz', 'RX Band': '832–862 MHz', 'Insertion Loss': '< 1.0 dB', 'TX-RX Isolation': '> 80 dB', 'PIM': '< –153 dBc @ 2×43dBm', 'Connector': 'N Female', 'Power': '100W avg' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'dup-004', name: 'DUPLEXER-1710-1785MHz', slug: 'duplexer-1710-1785mhz',
    category: 'duplexers', short_spec: 'LTE Band 3 Cavity Duplexer, 1710–1785 MHz',
    frequency_range: '1710–1880 MHz',
    description: 'LTE Band 3 (1800 MHz) cavity duplexer for Indian 4G base station deployments. The most widely deployed band in India for Airtel, Jio, and Vi networks.',
    specs: { 'TX Band': '1710–1785 MHz', 'RX Band': '1805–1880 MHz', 'Insertion Loss': '< 0.9 dB', 'TX-RX Isolation': '> 80 dB', 'PIM': '< –153 dBc @ 2×43dBm', 'VSWR': '< 1.3:1', 'Power': '100W avg', 'Connector': 'N Female' },
    datasheet_url: null, created_at: '2024-01-01',
  },

  // ── DIPLEXERS ───────────────────────────────────────────────────────────────
  {
    id: 'dip-001', name: 'OV-DIPLEXR-006072023', slug: 'ov-diplexr-006072023',
    category: 'diplexers', short_spec: 'RF Diplexer, Dual-Band Frequency Combiner',
    frequency_range: 'Custom bands',
    description: 'RF diplexer for combining or separating two distinct frequency bands on a single antenna port. Custom-specified passband frequencies available for cellular, WiFi, and private network applications.',
    specs: { 'Type': 'Diplexer', 'Topology': 'Cavity / LC', 'Insertion Loss': '< 1.5 dB per port', 'Port Isolation': '> 40 dB', 'VSWR': '< 1.3:1', 'Connector': 'SMA / N-Type Female', 'Impedance': '50 Ω', 'Custom bands': 'Available on request' },
    datasheet_url: null, created_at: '2024-01-01',
  },

  // ── POWER SPLITTERS ─────────────────────────────────────────────────────────
  {
    id: 'spl-001', name: 'AT-LPW-SP-2-500-6000', slug: 'at-lpw-sp-2-500-6000',
    category: 'power-splitters', short_spec: '1×2 Low Power RF Splitter, 500–6000 MHz',
    frequency_range: '500–6000 MHz',
    description: 'Compact 1-to-2 resistive power splitter covering 500 MHz to 6 GHz. Excellent amplitude and phase balance for signal distribution in antenna test setups and indoor DAS.',
    specs: { 'Frequency': '500–6000 MHz', 'Division': '1×2', 'Insertion Loss': '< 4.0 dB (each port)', 'Amplitude Balance': '±0.5 dB', 'Phase Balance': '±5°', 'Port Isolation': '> 20 dB', 'VSWR': '< 1.5:1', 'Connector': 'SMA Female', 'Power': '1W max' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'spl-002', name: 'AT-LPW-SP-2-1500-8000', slug: 'at-lpw-sp-2-1500-8000',
    category: 'power-splitters', short_spec: '1×2 Low Power RF Splitter, 1500–8000 MHz',
    frequency_range: '1500–8000 MHz',
    description: '1-to-2 power splitter for the cellular and microwave bands from 1.5 GHz to 8 GHz. Used in base station monitoring, antenna alignment, and lab test setups.',
    specs: { 'Frequency': '1500–8000 MHz', 'Division': '1×2', 'Insertion Loss': '< 4.5 dB', 'Amplitude Balance': '±0.5 dB', 'Port Isolation': '> 20 dB', 'VSWR': '< 1.5:1', 'Connector': 'SMA Female' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'spl-003', name: 'AT-LPW-SP-4-8000', slug: 'at-lpw-sp-4-8000',
    category: 'power-splitters', short_spec: '1×4 Low Power RF Splitter, up to 8000 MHz',
    frequency_range: '500–8000 MHz',
    description: '1-to-4 power splitter covering up to 8 GHz. For 4-way signal distribution in MIMO test beds, antenna array setups, and multi-receiver RF systems.',
    specs: { 'Frequency': '500–8000 MHz', 'Division': '1×4', 'Insertion Loss': '< 7.5 dB (each port)', 'Amplitude Balance': '±0.5 dB', 'Phase Balance': '±5°', 'Port Isolation': '> 20 dB', 'VSWR': '< 1.5:1', 'Connector': 'SMA Female' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'spl-004', name: 'AT-LPW-SP-16-6000', slug: 'at-lpw-sp-16-6000',
    category: 'power-splitters', short_spec: '1×16 Low Power RF Splitter, up to 6000 MHz',
    frequency_range: '500–6000 MHz',
    description: '1-to-16 power splitter for large DAS, repeater signal distribution networks, and multi-antenna test systems. Compact housing with SMA female connectors.',
    specs: { 'Frequency': '500–6000 MHz', 'Division': '1×16', 'Insertion Loss': '< 14 dB (each port)', 'Amplitude Balance': '±1.0 dB', 'VSWR': '< 1.8:1', 'Connector': 'SMA Female', 'Housing': 'Aluminium' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'spl-005', name: 'AT-gps-splitter', slug: 'at-gps-splitter',
    category: 'power-splitters', short_spec: 'GPS Active Splitter, 1×4, 1575 MHz',
    frequency_range: '1575.42 MHz',
    description: 'Active GPS signal splitter with built-in LNA to compensate split loss. Distributes one GPS antenna signal to 4 receivers without degradation. DC pass-through on port 1.',
    specs: { 'Frequency': '1575.42 MHz', 'Division': '1×4 active', 'Gain': '0 dB net (compensated)', 'DC Pass': 'Port 1 (antenna power)', 'Supply': '5V, 200mA', 'Connector': 'SMA Female', 'Noise Figure': '< 3 dB' },
    datasheet_url: null, created_at: '2024-01-01',
  },

  // ── ATTENUATORS ─────────────────────────────────────────────────────────────
  {
    id: 'att-001', name: 'AT-ATT-FIXED-SMA', slug: 'at-att-fixed-sma',
    category: 'attenuators', short_spec: 'Fixed RF Attenuator, SMA, 1–30 dB',
    frequency_range: 'DC–6 GHz',
    description: 'Fixed precision RF attenuator in SMA inline package. Available in standard values: 1, 2, 3, 6, 10, 20, 30 dB. Used in test benches and signal chain management.',
    specs: { 'Frequency': 'DC–6 GHz', 'Attenuation': '1 / 2 / 3 / 6 / 10 / 20 / 30 dB', 'Power': '2W', 'VSWR': '< 1.3:1', 'Connector': 'SMA Male–Female', 'Accuracy': '±0.5 dB', 'Impedance': '50 Ω' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'att-002', name: 'AttenuatorVA-Series', slug: 'attenuator-va-series',
    category: 'attenuators', short_spec: 'Variable RF Attenuator, SMA, 0–90 dB',
    frequency_range: 'DC–4 GHz',
    description: 'Manual continuously variable RF attenuator series (VA1–VA7) with calibrated dial. Available in 0–30 dB, 0–60 dB, and 0–90 dB variants. Ideal for receiver testing and antenna range calibration.',
    specs: { 'Frequency': 'DC–4 GHz', 'Attenuation Range': '0–30, 0–60, 0–90 dB', 'Step Resolution': 'Continuous / 10 dB step', 'VSWR': '< 1.5:1 @ 1 GHz', 'Power': '1W', 'Connector': 'SMA Female', 'Control': 'Manual rotary dial' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'att-003', name: 'AttenuatordkVA-90', slug: 'attenuator-dkva-90',
    category: 'attenuators', short_spec: 'Digital-Step Variable Attenuator, 0–90 dB',
    frequency_range: 'DC–3 GHz',
    description: 'Digital-step variable attenuator with 0–90 dB range in 10 dB steps. Push-button control for quick attenuation changes in lab and production test environments.',
    specs: { 'Frequency': 'DC–3 GHz', 'Range': '0–90 dB', 'Step Size': '10 dB', 'VSWR': '< 1.8:1', 'Power': '0.5W', 'Connector': 'SMA Female', 'Control': 'Push-button digital' },
    datasheet_url: null, created_at: '2024-01-01',
  },

  // ── COUPLERS ────────────────────────────────────────────────────────────────
  {
    id: 'cpl-001', name: 'AT-COUPLER-800-2500', slug: 'at-coupler-800-2500',
    category: 'couplers', short_spec: 'Directional Coupler, 800–2500 MHz, SMA',
    frequency_range: '800–2500 MHz',
    description: 'Directional RF coupler for power monitoring and signal sampling across the cellular spectrum 800–2500 MHz. Compact SMA housing.',
    specs: { 'Frequency': '800–2500 MHz', 'Coupling': '10 / 20 / 30 dB options', 'Directivity': '> 20 dB', 'Insertion Loss': '< 0.5 dB (main line)', 'VSWR': '< 1.3:1', 'Power': '20W', 'Connector': 'SMA Female', 'Impedance': '50 Ω' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'cpl-002', name: 'AT-COUPLER-117', slug: 'at-coupler-117',
    category: 'couplers', short_spec: 'Hybrid Coupler, 90°, SMA',
    frequency_range: '800–2500 MHz',
    description: '90° hybrid coupler for power splitting with phase quadrature. Used in IQ demodulators, antenna feed networks, and balanced amplifier designs.',
    specs: { 'Frequency': '800–2500 MHz', 'Type': '90° Hybrid', 'Coupling': '3 dB (equal split)', 'Phase Balance': '90° ±5°', 'Amplitude Balance': '±0.5 dB', 'Isolation': '> 20 dB', 'Connector': 'SMA Female', 'Power': '5W' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'cpl-003', name: 'ZGDC35-93HP+', slug: 'zgdc35-93hp-plus',
    category: 'couplers', short_spec: 'High-Power Directional Coupler, 35 dB, N Female',
    frequency_range: '700–2700 MHz',
    description: 'High-power 35 dB directional coupler covering 700–2700 MHz cellular bands. N Female connectors for base station power monitoring and VSWR measurement.',
    specs: { 'Frequency': '700–2700 MHz', 'Coupling': '35 dB', 'Directivity': '> 25 dB', 'Insertion Loss': '< 0.3 dB', 'Power': '200W avg', 'VSWR': '< 1.2:1', 'Connector': 'N Female' },
    datasheet_url: null, created_at: '2024-01-01',
  },

  // ── BAND PASS FILTERS ───────────────────────────────────────────────────────
  {
    id: 'bpf-001', name: 'AT-BPF-GSM900', slug: 'at-bpf-gsm900',
    category: 'band-pass-filters', short_spec: 'GSM 900 Bandpass Filter, 880–960 MHz',
    frequency_range: '880–960 MHz',
    description: 'Cavity bandpass filter for GSM 900 MHz band. Provides high out-of-band rejection for base station receivers and transmitters in the Indian P-GSM 900 allocation.',
    specs: { 'Passband': '880–960 MHz', 'Insertion Loss': '< 1.5 dB', 'Return Loss': '> 18 dB', 'Rejection (±50 MHz)': '> 50 dBc', 'Power': '20W avg', 'Connector': 'N Female', 'Temperature': '-40°C to +85°C' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'bpf-002', name: 'AT-BPF-LTE1800', slug: 'at-bpf-lte1800',
    category: 'band-pass-filters', short_spec: 'LTE Band 3 Bandpass Filter, 1710–1880 MHz',
    frequency_range: '1710–1880 MHz',
    description: 'Cavity bandpass filter for LTE Band 3 (1800 MHz). Critical for Indian 4G network base stations to reject adjacent and cross-band interference.',
    specs: { 'Passband': '1710–1880 MHz', 'Insertion Loss': '< 1.2 dB', 'Return Loss': '> 20 dB', 'Rejection (±100 MHz)': '> 55 dBc', 'Power': '20W avg', 'Connector': 'N Female' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'bpf-003', name: 'AT-BPF-2400-WIFI', slug: 'at-bpf-2400-wifi',
    category: 'band-pass-filters', short_spec: 'WiFi 2.4 GHz Bandpass Filter',
    frequency_range: '2400–2485 MHz',
    description: 'Compact bandpass filter for 2.4 GHz WiFi and ISM band. Suppresses out-of-band interference from adjacent cellular and industrial equipment.',
    specs: { 'Passband': '2400–2485 MHz', 'Insertion Loss': '< 1.0 dB', 'Return Loss': '> 18 dB', 'Rejection (±200 MHz)': '> 40 dBc', 'Power': '5W', 'Connector': 'SMA Female' },
    datasheet_url: null, created_at: '2024-01-01',
  },

  // ── LIGHTNING ARRESTORS ─────────────────────────────────────────────────────
  {
    id: 'la-001', name: 'AT-LA-N-2000', slug: 'at-la-n-2000',
    category: 'lightning-arrestors', short_spec: 'RF Lightning Arrestor, N Type, DC–2 GHz',
    frequency_range: 'DC–2000 MHz',
    description: 'Gas discharge tube RF lightning arrestor with N Male/Female connectors. Protects antenna feedlines from lightning surges up to 2 GHz. Outdoor IP67 rated.',
    specs: { 'Frequency': 'DC–2000 MHz', 'Insertion Loss': '< 0.3 dB', 'VSWR': '< 1.2:1', 'Discharge Current': '20 kA (8/20 µs)', 'DC Breakdown': '90V', 'Connector': 'N Male – N Female', 'IP Rating': 'IP67', 'Temperature': '-40°C to +85°C' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'la-002', name: 'AT-LA-N6000', slug: 'at-la-n6000',
    category: 'lightning-arrestors', short_spec: 'RF Lightning Arrestor, N Type, DC–6 GHz',
    frequency_range: 'DC–6000 MHz',
    description: 'Wideband gas discharge tube RF lightning arrestor covering DC to 6 GHz. Suitable for 5G sub-6 GHz antenna feedlines and outdoor WiFi installations.',
    specs: { 'Frequency': 'DC–6000 MHz', 'Insertion Loss': '< 0.5 dB', 'VSWR': '< 1.3:1', 'Discharge Current': '20 kA (8/20 µs)', 'DC Breakdown': '90V', 'Connector': 'N Male – N Female', 'IP Rating': 'IP67' },
    datasheet_url: null, created_at: '2024-01-01',
  },

  // ── RF CABLE ASSEMBLIES ─────────────────────────────────────────────────────
  {
    id: 'ca-001', name: 'AT-CA-SMAM-SMAM-XXX', slug: 'at-ca-smam-smam-custom',
    category: 'rf-cable-assemblies', short_spec: 'SMA Male to SMA Male Cable Assembly, Custom Length',
    frequency_range: 'DC–6 GHz',
    description: 'SMA Male to SMA Male coaxial cable assembly on RG174/RG316. Custom lengths from 50mm to 5000mm. Used in test setups, PCB to chassis connections, and instrument connections.',
    specs: { 'Frequency': 'DC–6 GHz', 'Connectors': 'SMA Male both ends', 'Cable Options': 'RG174, RG316, RG58', 'Impedance': '50 Ω', 'VSWR': '< 1.3:1 @ 3 GHz', 'Length': 'Custom (50mm–5000mm)', 'Insertion Loss': '< 1.5 dB/m @ 1 GHz' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'ca-002', name: 'AT-CA-RPSMA-UFL-100-MH2', slug: 'at-ca-rpsma-ufl-100-mh2',
    category: 'rf-cable-assemblies', short_spec: 'RP-SMA to UFL/MHF2 Cable Assembly, 100mm',
    frequency_range: 'DC–6 GHz',
    description: 'RP-SMA Male to UFL/MHF2 pigtail cable assembly, 100mm length, 1.13mm coax. For connecting mini-PCIe WiFi/LTE cards to external antennas.',
    specs: { 'Frequency': 'DC–6 GHz', 'Connector A': 'RP-SMA Male', 'Connector B': 'UFL / MHF2', 'Cable': '1.13mm coax, 100mm', 'Impedance': '50 Ω', 'Insertion Loss': '< 0.5 dB @ 2.4 GHz' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'ca-003', name: 'AT-CA-RPSMA-UFL-140-XX', slug: 'at-ca-rpsma-ufl-140',
    category: 'rf-cable-assemblies', short_spec: 'RP-SMA to UFL Cable Assembly, 140mm',
    frequency_range: 'DC–6 GHz',
    description: 'RP-SMA Male to UFL pigtail, 140mm 1.13mm coax. Slightly longer than 100mm for boards with more space between card and connector panel.',
    specs: { 'Connector A': 'RP-SMA Male', 'Connector B': 'UFL (IPEX)', 'Cable': '1.13mm, 140mm', 'Impedance': '50 Ω', 'Frequency': 'DC–6 GHz' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'ca-004', name: 'AT-CA-BNCM-SMAM-1000', slug: 'at-ca-bncm-smam-1000',
    category: 'rf-cable-assemblies', short_spec: 'BNC Male to SMA Male Cable Assembly, 1000mm',
    frequency_range: 'DC–3 GHz',
    description: 'BNC Male to SMA Male cable assembly on RG174 coax, 1000mm length. For test bench connections between BNC instruments and SMA antenna/DUT ports.',
    specs: { 'Connector A': 'BNC Male', 'Connector B': 'SMA Male', 'Cable': 'RG174, 1000mm', 'Frequency': 'DC–3 GHz', 'Impedance': '50 Ω', 'VSWR': '< 1.3:1' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'ca-005', name: 'AT-CA-SMABH-UFL-100-XX', slug: 'at-ca-smabh-ufl-100',
    category: 'rf-cable-assemblies', short_spec: 'SMA Bulkhead to UFL Cable Assembly, 100mm',
    frequency_range: 'DC–6 GHz',
    description: 'SMA Female Bulkhead to UFL pigtail for panel-mount antenna connections to internal PCB modules. 100mm 1.13mm coax.',
    specs: { 'Connector A': 'SMA Female Bulkhead', 'Connector B': 'UFL', 'Cable': '1.13mm, 100mm', 'Impedance': '50 Ω', 'Frequency': 'DC–6 GHz', 'Mount': 'Panel / bulkhead' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'ca-006', name: 'AT-CA-UFL-UFL-40-1.13', slug: 'at-ca-ufl-ufl-40-113',
    category: 'rf-cable-assemblies', short_spec: 'UFL to UFL Cable Assembly, 40mm, 1.13mm Coax',
    frequency_range: 'DC–6 GHz',
    description: 'Ultra-short UFL to UFL jumper assembly, 40mm 1.13mm coax. For board-to-board RF connections inside compact embedded systems.',
    specs: { 'Connector A': 'UFL (IPEX)', 'Connector B': 'UFL (IPEX)', 'Cable': '1.13mm, 40mm', 'Impedance': '50 Ω', 'Frequency': 'DC–6 GHz', 'Insertion Loss': '< 0.2 dB @ 2.4 GHz' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'ca-007', name: 'AT-CA-NM-SMAF-BH-XXX', slug: 'at-ca-nm-smaf-bh-custom',
    category: 'rf-cable-assemblies', short_spec: 'N Male to SMA Female Bulkhead Assembly, Custom Length',
    frequency_range: 'DC–6 GHz',
    description: 'N Male to SMA Female Bulkhead cable assembly for connecting outdoor N-type antenna cables to indoor SMA equipment. Custom lengths available.',
    specs: { 'Connector A': 'N Male', 'Connector B': 'SMA Female Bulkhead', 'Cable Options': 'RG174, RG316, LMR-195', 'Length': 'Custom', 'Frequency': 'DC–6 GHz', 'Impedance': '50 Ω' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'ca-008', name: 'AT-CA-MMCXRT-SMA-ST-RG316', slug: 'at-ca-mmcxrt-sma-rg316',
    category: 'rf-cable-assemblies', short_spec: 'MMCX Right-Angle to SMA Straight Cable, RG316',
    frequency_range: 'DC–6 GHz',
    description: 'MMCX right-angle male to SMA straight male assembly on RG316 low-loss coax. For compact WiFi/cellular module connections in automotive and industrial devices.',
    specs: { 'Connector A': 'MMCX Male Right-Angle', 'Connector B': 'SMA Male Straight', 'Cable': 'RG316', 'Frequency': 'DC–6 GHz', 'Impedance': '50 Ω', 'VSWR': '< 1.3:1' },
    datasheet_url: null, created_at: '2024-01-01',
  },

  // ── POWER AMPLIFIERS ────────────────────────────────────────────────────────
  {
    id: 'pa-001', name: 'AT-PA-1.0W', slug: 'at-pa-10w',
    category: 'power-amplifiers', short_spec: 'RF Power Amplifier Module, 1W',
    frequency_range: '800–2500 MHz',
    description: '1W (30 dBm) RF power amplifier module for cellular band signal boosters and test equipment. SMA connectors.',
    specs: { 'Frequency': '800–2500 MHz', 'Output Power': '30 dBm (1W)', 'Gain': '30 dB', 'IP3': '+40 dBm', 'Supply': '+5V / 800mA', 'Connector': 'SMA Female', 'Efficiency': '25%' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'pa-002', name: 'AT-PA-2.0W', slug: 'at-pa-20w',
    category: 'power-amplifiers', short_spec: 'RF Power Amplifier Module, 2W',
    frequency_range: '800–2500 MHz',
    description: '2W (33 dBm) RF power amplifier for repeaters and signal boosters. Higher output stage with heat sink.',
    specs: { 'Frequency': '800–2500 MHz', 'Output Power': '33 dBm (2W)', 'Gain': '33 dB', 'Supply': '+5V / 1.5A', 'Connector': 'SMA Female', 'Efficiency': '28%', 'Cooling': 'Heat sink required' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'pa-003', name: 'AT-PA-LNA', slug: 'at-pa-lna',
    category: 'power-amplifiers', short_spec: 'Low Noise Amplifier Module, 0.5–3 GHz',
    frequency_range: '500–3000 MHz',
    description: 'Ultra-low noise amplifier module for receiver front-ends. 20 dB gain with < 1 dB noise figure covering 500 MHz to 3 GHz.',
    specs: { 'Frequency': '500–3000 MHz', 'Gain': '20 dB', 'Noise Figure': '< 1 dB', 'IP3 (Input)': '+10 dBm', 'Supply': '+3.3 or +5V / 80mA', 'Connector': 'SMA Female', 'P1dB': '+18 dBm' },
    datasheet_url: null, created_at: '2024-01-01',
  },

  // ── WAVEGUIDE COMPONENTS ────────────────────────────────────────────────────
  {
    id: 'wg-001', name: 'AT-ANT-WAVEGUIDE-coupler', slug: 'at-ant-waveguide-coupler',
    category: 'waveguide', short_spec: 'Waveguide Directional Coupler',
    frequency_range: '8.2–12.4 GHz (X-Band)',
    description: 'X-band waveguide directional coupler for power monitoring and signal sampling in radar and SATCOM systems. WR-90 flange.',
    specs: { 'Frequency': '8.2–12.4 GHz', 'Coupling': '20 / 30 dB', 'Directivity': '> 25 dB', 'Insertion Loss': '< 0.2 dB', 'Flange': 'WR-90', 'Material': 'Brass, silver-plated', 'VSWR': '< 1.15:1' },
    datasheet_url: null, created_at: '2024-01-01',
  },
  {
    id: 'wg-002', name: 'AT-ANT-WAVEGUIDE-load', slug: 'at-ant-waveguide-load',
    category: 'waveguide', short_spec: 'Waveguide Matched Termination Load',
    frequency_range: '8.2–12.4 GHz (X-Band)',
    description: 'Waveguide matched load for X-band systems. Used to terminate unused ports and as a calibration standard in waveguide measurements.',
    specs: { 'Frequency': '8.2–12.4 GHz', 'Return Loss': '> 30 dB', 'Power': '5W avg (10W peak)', 'Flange': 'WR-90', 'Material': 'Brass, silver-plated', 'Temperature': '-40°C to +100°C' },
    datasheet_url: null, created_at: '2024-01-01',
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

**Applications**: LTE/5G base station filtering, radar front-ends, SATCOM receiver chains.

### Cavity Filters vs. LC Filters

| Type | Frequency Range | Q Factor | Power | Size |
|------|----------------|----------|-------|------|
| Cavity | 400 MHz – 20 GHz | 1000–5000 | High (100W+) | Large |
| LC lumped | DC – 1 GHz | 50–200 | Medium (10W) | Small |
| SAW | 100 MHz – 3 GHz | 500–1000 | Low (<1W) | Tiny |
| BAW/FBAR | 1 GHz – 6 GHz | 1000–2000 | Low (<2W) | Tiny |

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

- **Point-to-point links** require maximum range
- **Sector coverage** with defined geographic footprint
- **SATCOM terminals** require precision pointing
- **Electronic surveillance** systems need spatial discrimination

### When to Choose Low-Gain Antennas

- **IoT deployments** covering 360° azimuth
- **SCADA field nodes** requiring no beam alignment
- **Vehicle-mounted** systems with dynamic orientation

Contact us to discuss antenna selection for your application.
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

The transition to 5G New Radio introduces significant RF engineering challenges across both sub-6 GHz and millimeter-wave frequency bands.

### Sub-6 GHz Band Challenges

**Band n41 (2.5 GHz)**: Adjacent to WLAN 2.4 GHz ISM band; requires filters with sharp roll-off.

**Band n78 (3.5 GHz)**: High-power macro base stations require duplexers with TX-RX isolation exceeding 80 dB and PIM below –153 dBc @ 2×43 dBm.

### PIM Considerations

Anand Technologies designs and tests all base station components to IEC 62037:

- **Filters and duplexers**: PIM < –153 dBc @ 2×43 dBm
- **Cable assemblies**: PIM < –160 dBc @ 2×43 dBm
- **Antennas**: PIM < –150 dBc @ 2×43 dBm

Contact us to discuss your 5G RF component requirements.
    `,
  },
]

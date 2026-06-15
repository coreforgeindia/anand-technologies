// Datasheets are served as static files from /public/datasheets/
export function datasheetUrl(filename: string): string | null {
  if (!filename) return null
  const encoded = filename.split('').map(c => c === ' ' ? '%20' : c).join('')
  return `/datasheets/${encoded}`
}

// ─── PRODUCT NAME + DATASHEET MAPPING ───────────────────────────────────────
// product_name: human-readable display name shown on the product page
// pdf: exact filename in /public/datasheets/ (must match character-for-character)

const productMeta: Record<string, { product_name: string; pdf: string | null }> = {
  // GSM / LTE
  'gsm-001': { product_name: 'Quad-Band GSM Sleeve Antenna', pdf: 'AT-ANT-QGSM-SMA210-3.5(SL).pdf' },
  'gsm-002': { product_name: 'Quad-Band GSM Sleeve Antenna', pdf: 'AT-ANT-QGSM-SMA110-3.0 (SL).pdf' },
  'gsm-003': { product_name: 'Quad-Band GSM Sleeve Antenna', pdf: 'AT-ANT-QGSM-SMA305-5.0(SL).pdf' },
  'gsm-004': { product_name: 'Quad-Band GSM Modem Antenna', pdf: 'AT-ANT-QGSM-SMAR70-3.0.pdf' },
  'gsm-005': { product_name: 'Quad-Band GSM Modem Antenna', pdf: 'AT-ANT-QGSM-SMAR90-3.0.pdf' },
  'gsm-006': { product_name: 'Quad-Band GSM Internal Antenna', pdf: 'AT-ANT-QGSM-UFL1.13-0.18-3.0.pdf' },
  'gsm-007': { product_name: 'Quad-Band GSM Fiberglass Antenna', pdf: 'AT-ANT-QGSM-FGNW-NF600-5.0.pdf' },
  'gsm-008': { product_name: 'Quad-Band GSM Helical Antenna', pdf: 'AT-ANT-QGSM-HMM-SMA174-3-5.0.pdf' },
  'gsm-009': { product_name: 'CDMA Sleeve Antenna', pdf: 'AT-ANT-CDMA-SMA210-3.5(SL).pdf' },
  'gsm-010': { product_name: 'LTE Band 1 Sleeve Antenna', pdf: 'AT-ANT-LTE-ENH-SMA260-3.5(CDOT).pdf' },
  'gsm-011': { product_name: 'LTE Band 3 Sleeve Antenna', pdf: 'AT-ANT-LTE-ENH-SMA260-3.5(CDOT).pdf' },
  'gsm-012': { product_name: 'LTE Band 28 Sleeve Antenna', pdf: 'AT-ANT-LTE-ENH-SMA260-3.5(CDOT).pdf' },
  'gsm-013': { product_name: 'LTE Band 71 Sleeve Antenna', pdf: 'AT-ANT-LTE-ENH-SMA260-3.5(CDOT).pdf' },
  'gsm-014': { product_name: '4G LTE Omni Antenna 3dBi', pdf: 'AT-ANT-4G-LTE-SMA3-200.pdf' },
  'gsm-015': { product_name: '4G LTE Omni Antenna 5dBi', pdf: 'AT-ANT-4G-LTE-SMA5-250.pdf' },
  // GPS / GNSS
  'gps-001': { product_name: 'GPS External Active Antenna', pdf: 'AT-ANT-GPSE-SMA-MM174-5.0TCS.pdf' },
  'gps-002': { product_name: 'GPS External Active Antenna', pdf: 'AT-ANT-GPSE-SMA-MM174-5.0TCS.pdf' },
  'gps-003': { product_name: 'GPS External Active Antenna', pdf: 'AT-ANT-GPSE-SMA-MM174-30-10.pdf' },
  'gps-004': { product_name: 'GPS/GNSS Internal Active Antenna', pdf: 'AT-ANT-GPSGNSS-UFL1.13- INTERNAL-28.pdf' },
  'gps-005': { product_name: 'GPS/GNSS Internal Active Antenna', pdf: 'AT-ANT-GPSGNSS-UFL1.13- INTERNAL-28.pdf' },
  'gps-006': { product_name: 'GSM/GPS Combo Antenna RG174 3m', pdf: 'AT-ANT-CSCM-SMA174-28-3.0.pdf' },
  'gps-007': { product_name: 'GSM/GPS Combo Antenna RG316 3m', pdf: 'AT-ANT-CSCM-SMA316-28-3.0.pdf' },
  'gps-008': { product_name: 'IRNSS/NavIC Dual-Band Antenna', pdf: 'AT-ANT-IRNSS -28.pdf' },
  'gps-009': { product_name: 'GPS In-Line Feeder Amplifier', pdf: 'AT-GPS-FDAMP-SMAF-28.pdf' },
  'gps-010': { product_name: 'GPS High-Gain SCADA Antenna', pdf: 'AT-ANT-GPS-HGSCD-NF-40.0 (SCADA).pdf' },
  // WiFi
  'wifi-001': { product_name: 'Dual-Band WiFi Antenna 5dBi', pdf: 'AT-ANT-WIFI-DB-RPSMA305-5.0.pdf' },
  'wifi-002': { product_name: 'Dual-Band WiFi Antenna 7dBi', pdf: 'AT-ANT-WIFI-DB-RPSMA375-7.0.pdf' },
  'wifi-003': { product_name: 'Dual-Band WiFi Antenna 9dBi', pdf: 'AT-ANT-WIFI-DB-RPSMA430-9.0.pdf' },
  'wifi-004': { product_name: 'Dual-Band WiFi Internal Antenna', pdf: 'AT-ANT-WIFI-DB-UFL178-120-3.0(CDOT).pdf' },
  'wifi-005': { product_name: 'WiFi Fiberglass Networking Antenna 12dBi', pdf: 'AT-ANT-WIFI-FGNW-NFST-12.0.pdf' },
  'wifi-006': { product_name: 'WiFi Fiberglass Networking Antenna 5dBi', pdf: 'AT-ANT-WIFI-FGNW-NFST-5.0.pdf' },
  'wifi-007': { product_name: 'WiFi Yagi Directional Antenna 12dBi', pdf: 'AT-ANT-WIFI-YAGI-SMAST58-3-12.0.pdf' },
  'wifi-008': { product_name: 'WiFi Panel Antenna 18dBi', pdf: 'AT-ANT-WIFI-PP-NF-18.0.pdf' },
  'wifi-009': { product_name: 'WiFi Ceiling Dome Antenna 6dBi', pdf: 'AT-ANT-WIFI-CEILING-SMA58-500-6.0.pdf' },
  'wifi-010': { product_name: 'WiFi Horn Antenna 24dBi', pdf: 'AT-ANT-WIFI-HORN-NFST-24.0.pdf' },
  // VHF / UHF
  'vhf-001': { product_name: 'UHF Omni Antenna 2.15 dBi SMA', pdf: 'AT-ANT-VHF-SMART2.15.pdf' },
  'vhf-002': { product_name: 'UHF Omni Antenna 1.5 dBi SMA', pdf: 'AT-ANT-VHF-SMART1.5.pdf' },
  'vhf-003': { product_name: 'UHF Omni Antenna 2.15 dBi SMA RA', pdf: 'AT-ANT-VHF-SMART2.15.pdf' },
  'vhf-004': { product_name: 'UHF Antenna BNC 5 dBi', pdf: 'AT-ANT-VHF-BNC-5.pdf' },
  'vhf-005': { product_name: 'UHF High-Gain Sleeve Antenna BNC 7 dBi', pdf: 'AT-ANT-VHF-BNC440-7.0(SL).pdf' },
  'vhf-006': { product_name: 'UHF Sleeve Antenna BNC 7 dBi', pdf: 'AT-ANT-VHF-BNC440-7.0(SL).pdf' },
  // High Gain
  'hga-001': { product_name: 'GPS High-Gain Active Antenna 35dB', pdf: 'AT-ANT-GPS-HGM-SMA58-1-35.0.pdf' },
  'hga-002': { product_name: 'GSM High-Gain Fiberglass Antenna 10dBi', pdf: 'AT-ANT-QGSM-FGNW-NF213-500-10.0.pdf' },
  'hga-003': { product_name: 'GSM High-Gain Fiberglass Antenna 7dBi', pdf: 'AT-ANT-QGSM-FGNW-NF213-500-7.0.pdf' },
  'hga-004': { product_name: 'WiFi Backfire Antenna 24dBi', pdf: 'AT-ANT-WIFI-BFIRE-NF240-500-24.0.pdf' },
  'hga-005': { product_name: 'WiFi Parabolic Dish Antenna 24dBi', pdf: 'AT-ANT-WIFI-PRB-NFST-500-24.0.pdf' },
  'hga-006': { product_name: 'VHF High-Gain Pole-Mount Antenna', pdf: 'AT-ANT-VHF-PM-BNC174-200-6.0.pdf' },
  // RFID
  'rfid-001': { product_name: 'UHF RFID Gate Antenna 865–868 / 902–928 MHz', pdf: 'AT-ANT-UHF-RFID.pdf' },
  'rfid-002': { product_name: 'LF/HF RFID Antenna 125 kHz / 13.56 MHz', pdf: 'AT-ANT-LF-HF-RFID.pdf' },
  'rfid-003': { product_name: 'UHF RFID Reader 2-Channel 4-Port MR6132A', pdf: 'AT-UHF-RFID-2CH4PO-MR6132 A.pdf' },
  // LPA / Wideband
  'lpa-001': { product_name: 'Log-Periodic Wideband Antenna 20–3000 MHz', pdf: '20-3000 MHz.pdf' },
  'lpa-002': { product_name: 'Log-Periodic HF Antenna 1–30 MHz', pdf: '1-30 MHz.pdf' },
  'lpa-003': { product_name: 'Log-Periodic VHF/UHF Antenna 30–500 MHz', pdf: '30-500 MHz.pdf' },
  'lpa-004': { product_name: 'Log-Periodic Wideband Antenna 500 MHz–6 GHz', pdf: '500-6000MHz.pdf' },
  // Duplexers
  'dup-001': { product_name: 'Cavity Duplexer AT-MD-4460 (Tx 4400–4520 / Rx 4880–5000 MHz)', pdf: 'Duplexer.pdf' },
  'dup-002': { product_name: 'Cavity Duplexer AT-MD-4700 (Tx 4400–4520 / Rx 4640–4760 MHz)', pdf: 'Duplexer.pdf' },
  'dup-003': { product_name: 'Cavity Duplexer AT-MD-4940 (Tx 4880–5000 / Rx 4640–4760 MHz)', pdf: 'Duplexer.pdf' },
  'dup-004': { product_name: 'Cavity Duplexer AT-MDU-2875 (Tx 2680 / Rx 2510 MHz)', pdf: 'Duplexer.pdf' },
  // Diplexers
  'dip-001': { product_name: 'RF Diplexer AT-MD Series', pdf: 'Duplexer.pdf' },
  // Power Splitters
  'spl-001': { product_name: 'RF Power Splitter 2-Way 500–6000 MHz', pdf: 'AT-LPW-SP-2-500-6000.pdf' },
  'spl-002': { product_name: 'RF Power Splitter 2-Way 1500–8000 MHz', pdf: 'AT-LPW-SP-2 -1500-8000.pdf' },
  'spl-003': { product_name: 'RF Power Splitter 4-Way 8000 MHz', pdf: 'AT-LPW-SP-4 -8000.pdf' },
  'spl-004': { product_name: 'RF Power Splitter 16-Way 6000 MHz', pdf: 'AT-LPW-SP-16-6000  .pdf' },
  'spl-005': { product_name: 'GPS Signal Splitter', pdf: 'AT-gps splitter.pdf' },
  // Attenuators
  'att-001': { product_name: 'Fixed RF Attenuator N-Type', pdf: 'AttenuatorFX-H2.pdf' },
  'att-002': { product_name: 'Variable RF Attenuator VA-1 0–31 dB', pdf: 'AttenuatorVA1.pdf' },
  'att-003': { product_name: 'Dual Knob Variable Attenuator DkVA-90', pdf: 'AttenuatordkVA-90.pdf' },
  // Couplers
  'cpl-001': { product_name: 'Directional RF Coupler 800–2500 MHz', pdf: 'AT-COUPLER-800-2500.pdf' },
  'cpl-002': { product_name: 'Aviation Band Coupler 117.975–137 MHz', pdf: 'AT-COUPLER-117.pdf' },
  'cpl-003': { product_name: 'High-Power RF Coupler 800–2500 MHz', pdf: 'AT-COUPLER-800-2500.pdf' },
  // Band Pass Filters
  'bpf-001': { product_name: 'Band Pass Filter 1090 MHz', pdf: 'Band Pass Filter.pdf' },
  'bpf-002': { product_name: 'Band Pass Filter 4460 MHz', pdf: 'Band Pass Filter.pdf' },
  'bpf-003': { product_name: 'Band Pass Filter 4700–4940 MHz', pdf: 'Band Pass Filter.pdf' },
  // Lightning Arrestors
  'la-001': { product_name: 'RF Lightning Arrestor N-Type 2 GHz', pdf: 'AT-LA-N-2000.pdf' },
  'la-002': { product_name: 'RF Lightning Arrestor N-Type 6 GHz', pdf: 'AT-LA-N6000.pdf' },
  // RF Cable Assemblies
  'ca-001': { product_name: 'SMA Male to SMA Male Cable Assembly', pdf: 'AT-CA-SMA-SMA-402-2000 .pdf' },
  'ca-002': { product_name: 'RP-SMA to UFL Cable Assembly', pdf: 'AT-CA-SMA-UFL-1.13-150.pdf' },
  'ca-003': { product_name: 'RP-SMA to UFL Cable Assembly 140mm', pdf: 'AT-CA-SMAM-UFLF-200-D1.13.pdf' },
  'ca-004': { product_name: 'BNC Male to SMA Male Cable Assembly', pdf: 'AT-CA-SMA-BNC-402-2000 - .pdf' },
  'ca-005': { product_name: 'SMA Female Bulkhead to UFL Cable', pdf: 'AT-CA-MHF4-SMABH-IP-65-1.13-200.pdf' },
  'ca-006': { product_name: 'UFL to UFL Cable Assembly', pdf: 'AT-CA-UFL-UFL-40-1.13 .pdf' },
  'ca-007': { product_name: 'N Male to SMA Female Bulkhead Cable', pdf: 'AT-CA-NM-BNC-402-2000.pdf' },
  'ca-008': { product_name: 'MMCX Right-Angle to SMA Cable', pdf: 'AT-CA-MMCX RT-TNCFBH-120-RG178.pdf' },
  // Power Amplifiers
  'pa-001': { product_name: 'RF Power Amplifier 1.0W', pdf: 'AT-PA-1.0W.pdf' },
  'pa-002': { product_name: 'RF Power Amplifier 2.0W', pdf: 'AT-PA-2.0W.pdf' },
  'pa-003': { product_name: 'Low Noise Amplifier (LNA)', pdf: 'AT-PA-LNA.pdf' },
  // Waveguide
  'wg-001': { product_name: 'WR-90 Standard Gain Horn Antenna 20 dB', pdf: 'AT-ANT-HORN-WR90-N(F).pdf' },
  'wg-002': { product_name: 'WR-90 Standard Gain Horn Antenna 20 dB', pdf: 'AT-ANT-HORN-WR90-N(F).pdf' },
}

export function getProductName(id: string): string {
  return productMeta[id]?.product_name ?? ''
}

export function getDatasheetUrl(id: string): string | null {
  const pdf = productMeta[id]?.pdf
  if (!pdf) return null
  return datasheetUrl(pdf)
}

export const productCategories = [
  { name: 'VHF / UHF Antennas', slug: 'vhf-uhf-antennas', description: 'VHF and UHF antennas for land mobile radio, handheld terminals, and tactical communications.', icon: 'Antenna' },
  { name: 'GSM / LTE Antennas', slug: 'gsm-lte-antennas', description: 'Quad-band GSM, 2G/3G/4G LTE antennas including external, internal, modem, sleeve, and fiberglass types.', icon: 'Radio' },
  { name: 'WiFi Antennas', slug: 'wifi-antennas', description: 'Single and dual-band 2.4/5 GHz WiFi antennas including omni, Yagi, panel, fiberglass, and ceiling types.', icon: 'Wifi' },
  { name: 'LPA / Wideband Antennas', slug: 'lpa-antennas', description: 'Log-periodic and wideband antennas covering 1 MHz to 6 GHz for EMC, SIGINT, and measurement.', icon: 'Activity' },
  { name: 'GPS / GNSS Antennas', slug: 'gps-gnss-antennas', description: 'GPS, GLONASS, IRNSS, and multi-constellation GNSS antennas with active and passive options.', icon: 'Satellite' },
  { name: 'Duplexers', slug: 'duplexers', description: 'Cavity duplexers for VHF, UHF, and cellular bands from 136 MHz to 1785 MHz.', icon: 'ArrowLeftRight' },
  { name: 'Diplexers', slug: 'diplexers', description: 'Frequency-combining diplexers for multi-band antenna port integration.', icon: 'Split' },
  { name: 'Couplers', slug: 'couplers', description: 'Directional and hybrid RF couplers for power monitoring and signal sampling.', icon: 'Share2' },
  { name: 'Power Splitters', slug: 'power-splitters', description: '1×2, 1×4, 1×8, 1×16 RF power splitters from 350 MHz to 8 GHz including low power and GPS types.', icon: 'GitBranch' },
  { name: 'Attenuators', slug: 'attenuators', description: 'Fixed, variable, and programmable RF attenuators including manual rotary and digital step types.', icon: 'Minus' },
  { name: 'Band Pass Filters', slug: 'band-pass-filters', description: 'RF bandpass filters for channel selection and interference rejection across cellular and ISM bands.', icon: 'Filter' },
  { name: 'Lightning Arrestors', slug: 'lightning-arrestors', description: 'RF lightning surge protectors for antenna feedlines up to 6 GHz.', icon: 'Zap' },
  { name: 'Power Amplifiers', slug: 'power-amplifiers', description: 'RF power amplifiers and LNA modules including 1W to 2W PA, driver stages, and switch modules.', icon: 'Zap' },
  { name: 'RFID Antennas', slug: 'rfid-antennas', description: 'LF/HF/UHF RFID antennas for asset tracking, access control, and logistics applications.', icon: 'Tag' },
  { name: 'RF Cable Assemblies', slug: 'rf-cable-assemblies', description: 'Precision coaxial cable assemblies with SMA, RPSMA, BNC, UFL, MMCX, TNC, N-type on RG174/178/316/402.', icon: 'Cable' },
  { name: 'High Gain Antennas', slug: 'high-gain-antennas', description: 'High-gain GSM, GPS, WiFi, and VHF antennas including helical, fiberglass networking, Yagi, and panel types.', icon: 'Signal' },
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
    datasheet_url: null as string | null,
    image_url: '/product-images/AT-ANT-QGSM-SMA210-3.5 (SL)-photo.png',
    created_at: '2024-01-01',
  },
  {
    id: 'gsm-002', name: 'AT-ANT-QGSM-SMA110-3.0(SL)', slug: 'at-ant-qgsm-sma110-30-sl',
    category: 'gsm-lte-antennas', short_spec: 'Quad-band GSM Sleeve Antenna, SMA, 110mm',
    frequency_range: '824–2170 MHz',
    description: 'Compact quad-band GSM sleeve antenna with SMA male connector and 110mm cable. Ideal for space-constrained modem and router applications.',
    specs: { 'Frequency': '824–960 / 1710–2170 MHz', 'Gain': '3.0 dBi', 'Type': 'Sleeve', 'Connector': 'SMA Male', 'Cable': 'RG174, 110mm', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1' },
    datasheet_url: null as string | null,
    image_url: '/product-images/AT-ANT-QGSM-SMA110-3.0 (SL)-photo.png',
    created_at: '2024-01-01',
  },
  {
    id: 'gsm-003', name: 'AT-ANT-QGSM-SMA305-5.0(SL)', slug: 'at-ant-qgsm-sma305-50-sl',
    category: 'gsm-lte-antennas', short_spec: 'Quad-band GSM Sleeve Antenna, SMA, 305mm',
    frequency_range: '824–2170 MHz',
    description: 'Long-cable quad-band GSM sleeve antenna for panel-mounted and DIN-rail industrial applications requiring cable routing.',
    specs: { 'Frequency': '824–2170 MHz', 'Gain': '5.0 dBi', 'Connector': 'SMA Male', 'Cable': 'RG174, 305mm', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1' },
    datasheet_url: null as string | null,
    image_url: '/product-images/AT-ANT-QGSM-SMA305-5.0 (SL)-photo.png',
    created_at: '2024-01-01',
  },
  {
    id: 'gsm-004', name: 'AT-ANT-QGSM-SMAR70-3.0', slug: 'at-ant-qgsm-smar70-30',
    category: 'gsm-lte-antennas', short_spec: 'Quad-band GSM Modem Antenna, SMA RA, 70mm',
    frequency_range: '824–2170 MHz',
    description: 'Right-angle SMA modem antenna for GSM/3G modems. 70mm stub with right-angle SMA male connector for board-edge mounting.',
    specs: { 'Frequency': '824–2170 MHz', 'Gain': '3.0 dBi', 'Connector': 'SMA Male RA', 'Length': '70mm', 'Impedance': '50 Ω', 'VSWR': '< 2.5:1' },
    datasheet_url: null as string | null, image_url: '/product-images/AT-ANT-QGSM-SMAR70-3.0-photo.png', created_at: '2024-01-01',
  },
  {
    id: 'gsm-005', name: 'AT-ANT-QGSM-SMAR90-3.0', slug: 'at-ant-qgsm-smar90-30',
    category: 'gsm-lte-antennas', short_spec: 'Quad-band GSM Modem Antenna, SMA RA, 90mm',
    frequency_range: '824–2170 MHz',
    description: 'Compact right-angle stub antenna for GSM/3G/4G modem boards. SMA male right-angle connector, 90mm length.',
    specs: { 'Frequency': '824–2170 MHz', 'Gain': '3.0 dBi', 'Connector': 'SMA Male RA', 'Length': '90mm', 'Impedance': '50 Ω', 'VSWR': '< 2.5:1' },
    datasheet_url: null as string | null, image_url: '/product-images/AT-ANT-QGSM-SMAR90-3.0-photo.png', created_at: '2024-01-01',
  },
  {
    id: 'gsm-006', name: 'AT-ANT-QGSM-UFL1.13-0.18-3.0', slug: 'at-ant-qgsm-ufl-018-30',
    category: 'gsm-lte-antennas', short_spec: 'Quad-band GSM Internal Antenna, UFL, 180mm',
    frequency_range: '824–2170 MHz',
    description: 'Internal PCB-mount quad-band GSM antenna with UFL connector and 1.13mm coax, 180mm cable. Designed for embedded M2M and IoT modules.',
    specs: { 'Frequency': '824–2170 MHz', 'Gain': '3.0 dBi', 'Connector': 'UFL (IPEX)', 'Cable': '1.13mm, 180mm', 'Impedance': '50 Ω', 'Mount': 'Adhesive / PCB' },
    datasheet_url: null as string | null, image_url: '/product-images/AT-ANT-QGSM-UFL1.13-0.18-3.0-photo.png', created_at: '2024-01-01',
  },
  {
    id: 'gsm-007', name: 'AT-ANT-QGSM-FGNW-NF600-5.0', slug: 'at-ant-qgsm-fgnw-nf600-50',
    category: 'gsm-lte-antennas', short_spec: 'Quad-band GSM Fiberglass Networking Antenna, N Female, 600mm',
    frequency_range: '824–2170 MHz',
    description: 'Heavy-duty outdoor fiberglass GSM antenna with N Female connector and 600mm radome. Suitable for cellular base repeaters, industrial routers, and outdoor access points.',
    specs: { 'Frequency': '824–2170 MHz', 'Gain': '5.0 dBi', 'Connector': 'N Female', 'Radome Length': '600mm', 'Material': 'Fibreglass', 'IP Rating': 'IP65', 'Impedance': '50 Ω', 'VSWR': '< 1.5:1', 'Mount': 'Pole mount included' },
    datasheet_url: null as string | null, image_url: '/product-images/lgsm_7.png', created_at: '2024-01-01',
  },
  {
    id: 'gsm-008', name: 'AT-ANT-QGSM-HMM-SMA174-3-5.0', slug: 'at-ant-qgsm-hmm-sma174-3-50',
    category: 'gsm-lte-antennas', short_spec: 'Quad-band GSM Helical Antenna, SMA, 5.0 dBi',
    frequency_range: '824–2170 MHz',
    description: 'Helical coil quad-band GSM antenna with SMA male connector. High-gain helical design for improved link margin in challenging environments.',
    specs: { 'Frequency': '824–2170 MHz', 'Gain': '5.0 dBi', 'Type': 'Helical', 'Connector': 'SMA Male', 'Cable': 'RG174, 3m', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1' },
    datasheet_url: null as string | null, image_url: '/product-images/AT-ANT-QGSM-SMA174-3-3.0-photo.png', created_at: '2024-01-01',
  },
  {
    id: 'gsm-009', name: 'AT-ANT-CDMA-SMA210-3.5(SL)', slug: 'at-ant-cdma-sma210-35-sl',
    category: 'gsm-lte-antennas', short_spec: 'CDMA Sleeve Antenna, SMA, 210mm',
    frequency_range: '824–894 / 1850–1990 MHz',
    description: 'CDMA 800/1900 MHz sleeve antenna with SMA male connector and 210mm cable. Used in CDMA modems, fixed wireless terminals, and M2M devices.',
    specs: { 'Frequency': '824–894 / 1850–1990 MHz', 'Gain': '3.5 dBi', 'Type': 'Sleeve', 'Connector': 'SMA Male', 'Cable': 'RG174, 210mm', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1' },
    datasheet_url: null as string | null, image_url: '/product-images/AT-ANT-CDMA-SMA210-3.5-photo.png', created_at: '2024-01-01',
  },
  {
    id: 'gsm-010', name: 'AT-ANT-LTE-B1-SMA210-3.5(SL)', slug: 'at-ant-lte-b1-sma210-35-sl',
    category: 'gsm-lte-antennas', short_spec: 'LTE Band 1 Sleeve Antenna, SMA, 210mm',
    frequency_range: '1920–2170 MHz',
    description: 'LTE Band 1 (2100 MHz) sleeve antenna with SMA male connector. Optimised for 3G UMTS/WCDMA and LTE Band 1 operation.',
    specs: { 'Frequency': '1920–2170 MHz', 'Gain': '3.5 dBi', 'Type': 'Sleeve', 'Connector': 'SMA Male', 'Cable': 'RG174, 210mm', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1' },
    datasheet_url: null as string | null, image_url: '/product-images/AT-ANT-LTE-ENH-SMA260-3.5-photo.png', created_at: '2024-01-01',
  },
  {
    id: 'gsm-011', name: 'AT-ANT-LTE-B3-SMA260-3.5(SL)', slug: 'at-ant-lte-b3-sma260-35-sl',
    category: 'gsm-lte-antennas', short_spec: 'LTE Band 3 Sleeve Antenna, SMA, 260mm',
    frequency_range: '1710–1880 MHz',
    description: 'LTE Band 3 (1800 MHz) sleeve antenna, the primary band for Indian 4G deployments. SMA male with 260mm RG174 cable.',
    specs: { 'Frequency': '1710–1880 MHz', 'Gain': '3.5 dBi', 'Type': 'Sleeve', 'Connector': 'SMA Male', 'Cable': 'RG174, 260mm', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1' },
    datasheet_url: null as string | null, image_url: '/product-images/AT-ANT-LTE-ENH-SMA260-3.5-photo.png', created_at: '2024-01-01',
  },
  {
    id: 'gsm-012', name: 'AT-ANT-LTE-B28-SMA260-3.5(SL)', slug: 'at-ant-lte-b28-sma260-35-sl',
    category: 'gsm-lte-antennas', short_spec: 'LTE Band 28 Sleeve Antenna, SMA, 260mm',
    frequency_range: '700–803 MHz',
    description: 'LTE Band 28 (700 MHz APT) sleeve antenna for rural and deep-indoor 4G coverage. SMA male connector with 260mm cable.',
    specs: { 'Frequency': '700–803 MHz', 'Gain': '3.5 dBi', 'Type': 'Sleeve', 'Connector': 'SMA Male', 'Cable': 'RG174, 260mm', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1' },
    datasheet_url: null as string | null, image_url: '/product-images/AT-ANT-LTE-ENH-SMA260-3.5-photo.png', created_at: '2024-01-01',
  },
  {
    id: 'gsm-013', name: 'AT-ANT-LTE-B71-SMA290-3.5(SL)', slug: 'at-ant-lte-b71-sma290-35-sl',
    category: 'gsm-lte-antennas', short_spec: 'LTE Band 71 Sleeve Antenna, SMA, 290mm',
    frequency_range: '617–698 MHz',
    description: 'LTE Band 71 (600 MHz) sleeve antenna for extended rural coverage. Long 290mm cable for panel-mount routing.',
    specs: { 'Frequency': '617–698 MHz', 'Gain': '3.5 dBi', 'Type': 'Sleeve', 'Connector': 'SMA Male', 'Cable': 'RG174, 290mm', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1' },
    datasheet_url: null as string | null, image_url: '/product-images/AT-ANT-LTE-ENH-SMA260-3.5-photo.png', created_at: '2024-01-01',
  },
  {
    id: 'gsm-014', name: 'AT-ANT-4G-LTE-SMA3-200', slug: 'at-ant-4g-lte-sma3-200',
    category: 'gsm-lte-antennas', short_spec: '4G LTE Omni Antenna, SMA, 3 dBi, 200mm',
    frequency_range: '700–2700 MHz',
    description: 'Wideband 4G LTE omnidirectional antenna covering all major LTE bands from 700 MHz to 2700 MHz. SMA male with 200mm cable.',
    specs: { 'Frequency': '700–2700 MHz', 'Gain': '3 dBi', 'Connector': 'SMA Male', 'Cable': '200mm', 'Impedance': '50 Ω', 'VSWR': '< 2.5:1', 'Polarization': 'Vertical' },
    datasheet_url: null as string | null, image_url: '/product-images/lgsm_14.png', created_at: '2024-01-01',
  },
  {
    id: 'gsm-015', name: 'AT-ANT-4G-LTE-SMA5-250', slug: 'at-ant-4g-lte-sma5-250',
    category: 'gsm-lte-antennas', short_spec: '4G LTE Omni Antenna, SMA, 5 dBi, 250mm',
    frequency_range: '700–2700 MHz',
    description: 'High-gain wideband 4G LTE antenna for CPE routers and industrial gateways. SMA male with 250mm cable.',
    specs: { 'Frequency': '700–2700 MHz', 'Gain': '5 dBi', 'Connector': 'SMA Male', 'Cable': '250mm', 'Impedance': '50 Ω', 'VSWR': '< 2.5:1' },
    datasheet_url: null as string | null, image_url: '/product-images/lgsm_15.png', created_at: '2024-01-01',
  },

  // ── GPS / GNSS ANTENNAS ─────────────────────────────────────────────────────
  {
    id: 'gps-001', name: 'AT-ANT-GPSE-SMA-MM174-5.0TCS', slug: 'at-ant-gpse-sma-mm174-50tcs',
    category: 'gps-gnss-antennas', short_spec: 'GPS External Active Antenna, SMA, 27.5 dB LNA, 5m RG174',
    frequency_range: '1575.425 ±3 MHz',
    description: 'GPS L1 active external antenna with 27.5 dB LNA. SMA male connector, 5m RG174 cable, magnetic mount. Supply 1.5–3.0V DC.',
    specs: { 'Frequency': '1575.425 ±3 MHz', 'LNA Gain': '27.5 dB', 'Patch Gain': '3.5 dBi', 'Noise Figure': '1.5 dB', 'Connector': 'SMA Male', 'Cable': 'RG174, 5m', 'Supply Voltage': '1.5–3.0V DC', 'Mount': 'Magnetic', 'Dimensions': '38.5 × 46 mm', 'Impedance': '50 Ω', 'Polarization': 'RHCP', 'Temperature': '-20 to +65°C' },
    datasheet_url: null as string | null, image_url: '/product-images/lgps_1.png', created_at: '2024-01-01',
  },
  {
    id: 'gps-002', name: 'AT-ANT-GPSE-SMA-MM174-5.0TCS-V2', slug: 'at-ant-gpse-sma-mm174-50tcs-v2',
    category: 'gps-gnss-antennas', short_spec: 'GPS External Active Antenna, SMA, 27.5 dB LNA, 5m RG174',
    frequency_range: '1575.425 ±3 MHz',
    description: 'GPS L1 active external antenna, 27.5 dB LNA, SMA male, 5m RG174 cable, magnetic mount.',
    specs: { 'Frequency': '1575.425 ±3 MHz', 'LNA Gain': '27.5 dB', 'Patch Gain': '3.5 dBi', 'Noise Figure': '1.5 dB', 'Connector': 'SMA Male', 'Cable': 'RG174, 5m', 'Supply Voltage': '1.5–3.0V DC', 'Mount': 'Magnetic', 'Impedance': '50 Ω', 'Polarization': 'RHCP', 'Temperature': '-20 to +65°C' },
    datasheet_url: null as string | null, image_url: '/product-images/lgps_2.png', created_at: '2024-01-01',
  },
  {
    id: 'gps-003', name: 'AT-ANT-GPSE-SMA-MM174-30-10', slug: 'at-ant-gpse-smam-mm174-30-10',
    category: 'gps-gnss-antennas', short_spec: 'GPS External Active Antenna, SMA, 27.5 dB LNA, 10m RG174',
    frequency_range: '1575.425 MHz',
    description: 'Long-cable GPS active antenna with 27.5 dB LNA for extended cable runs. SMA male with 10m RG174 cable, magnetic mount. Dimensions 49×49 mm.',
    specs: { 'Frequency': '1575.425 MHz', 'LNA Gain': '27.5 dB', 'Patch Gain': '3.5 dBi', 'Noise Figure': '1.5 dB', 'Connector': 'SMA Male', 'Cable': 'RG174, 10m', 'Supply Voltage': '2.75–5.0V', 'Mount': 'Magnetic', 'Dimensions': '49 × 49 mm', 'Impedance': '50 Ω', 'Polarization': 'RHCP', 'Temperature': '-20 to +65°C' },
    datasheet_url: null as string | null, image_url: '/product-images/lgps_3.png', created_at: '2024-01-01',
  },
  {
    id: 'gps-004', name: 'AT-ANT-GPSI-UFL-28', slug: 'at-ant-gpsgnss-ufl-internal-28',
    category: 'gps-gnss-antennas', short_spec: 'GPS/GNSS Internal Active Antenna, 28 dB LNA, PCB Solder',
    frequency_range: '1575.425 ±3 MHz',
    description: 'Miniature internal GPS/GNSS active patch antenna. 28 dB LNA, direct PCB solder (no UFL connector), 120mm microcoaxial cable. Dimensions 25.4×25.4 mm.',
    specs: { 'Frequency': '1575.425 ±3 MHz', 'LNA Gain': '28 dB', 'Patch Gain': '4 dBi', 'Noise Figure': '1.5 dB', 'Connection': 'Direct PCB solder', 'Cable': 'Microcoaxial, 120mm', 'Supply Voltage': '2.75–5.0V', 'Dimensions': '25.4 × 25.4 mm', 'Polarization': 'RHCP', 'Temperature': '-20 to +65°C' },
    datasheet_url: null as string | null, image_url: '/product-images/pcb_1.png', created_at: '2024-01-01',
  },
  {
    id: 'gps-005', name: 'AT-ANT-GPSI-UFL-22', slug: 'at-ant-gpsgnss-ufl-120-int-22',
    category: 'gps-gnss-antennas', short_spec: 'GPS/GNSS Internal Active Antenna, 22 dB LNA, PCB Solder',
    frequency_range: '1575.425 ±3 MHz',
    description: 'Compact internal GPS/GNSS patch antenna, 22 dB LNA, direct PCB solder. Dimensions 20×20 mm.',
    specs: { 'Frequency': '1575.425 ±3 MHz', 'LNA Gain': '22 dB', 'Patch Gain': '3.5 dBi', 'Noise Figure': '1.5 dB', 'Connection': 'Direct PCB solder', 'Supply Voltage': '2.75–5.0V', 'Dimensions': '20 × 20 mm', 'Polarization': 'RHCP', 'Temperature': '-20 to +65°C' },
    datasheet_url: null as string | null, image_url: '/product-images/pcb_2.png', created_at: '2024-01-01',
  },
  {
    id: 'gps-006', name: 'AT-ANT-CSCM-SMA174-28-3.0', slug: 'at-ant-cscm-sma174-28-30',
    category: 'gps-gnss-antennas', short_spec: 'GSM/GPS Combo Antenna, GPS RPSMA + GSM SMA, 27.5 dB, 3m RG174',
    frequency_range: 'GPS 1575.425 MHz / GSM 850/900/1800/1900 MHz',
    description: 'Combo antenna integrating GPS L1 active patch (RHCP) and quad-band GSM omni element. GPS: RPSMA connector, 27.5 dB LNA. GSM: SMA male. 3m RG174 cable. Screw mount.',
    specs: { 'GPS Frequency': '1575.425 ±3 MHz', 'GSM Frequency': '850 / 900 / 1800 / 1900 MHz', 'GPS LNA Gain': '> 27.5 dB', 'GPS Patch Gain': '3.5 ±0.5 dBi', 'GSM Gain': '2.5 ±0.5 dBi', 'Noise Figure': '< 1.2–1.3 dB', 'GPS Connector': 'RPSMA', 'GSM Connector': 'SMA Male', 'Cable': 'RG174, 3m', 'Supply Voltage': '2.7–5.0V', 'Polarization': 'GPS: RHCP / GSM: Omni', 'Dimensions': '30 × Ø46 mm', 'Mount': 'Screw', 'Temperature': '-20 to +65°C' },
    datasheet_url: null as string | null, image_url: '/product-images/combo_1.png', created_at: '2024-01-01',
  },
  {
    id: 'gps-007', name: 'AT-ANT-CSCM-SMA316-28-3.0', slug: 'at-ant-cscm-sma316-28-30',
    category: 'gps-gnss-antennas', short_spec: 'GSM/GPS Combo Antenna, GPS RPSMA + GSM SMA, 27.5 dB, 3m RG316',
    frequency_range: 'GPS 1575.425 MHz / GSM 850/900/1800/1900 MHz',
    description: 'GSM/GPS combo antenna with RG316 low-loss cable. GPS RPSMA connector, 27.5 dB LNA. GSM SMA male. 3m cable. Screw mount. Dimensions 30×Ø53 mm.',
    specs: { 'GPS Frequency': '1575.425 ±3 MHz', 'GSM Frequency': '850 / 900 / 1800 / 1900 MHz', 'GPS LNA Gain': '> 27.5 dB', 'GPS Patch Gain': '3.5 ±0.5 dBi', 'GSM Gain': '2.5 ±0.5 dBi', 'GPS Connector': 'RPSMA', 'GSM Connector': 'SMA Male', 'Cable': 'RG316, 3m', 'Supply Voltage': '2.7–5.0V', 'Polarization': 'GPS: RHCP / GSM: Omni', 'Dimensions': '30 × Ø53 mm', 'Mount': 'Screw', 'Temperature': '-20 to +65°C' },
    datasheet_url: null as string | null, image_url: '/product-images/combo_2.png', created_at: '2024-01-01',
  },
  {
    id: 'gps-008', name: 'AT-ANT-IRNSSL1L5', slug: 'at-ant-irnssl1l5',
    category: 'gps-gnss-antennas', short_spec: 'IRNSS/NavIC Dual-Band Antenna, L1+L5',
    frequency_range: '1176.45 MHz (L5) / 1227.6 MHz (L1)',
    description: 'Dedicated dual-band IRNSS/NavIC antenna covering both L1 and L5 frequencies. Designed for Indian navigation system receivers in defense and transport applications.',
    specs: { 'Frequency': '1176.45 MHz (L5) & 1227.6 MHz (L1)', 'Type': 'Active patch', 'LNA Gain': '28 dB', 'Connector': 'SMA Male', 'IP Rating': 'IP67', 'Temperature': '-40°C to +85°C' },
    datasheet_url: null as string | null, image_url: '/product-images/irnss_1.png', created_at: '2024-01-01',
  },
  {
    id: 'gps-009', name: 'AT-GPS-FDAMP-SMAF-28', slug: 'at-gps-fdamp-smaf-28',
    category: 'gps-gnss-antennas', short_spec: 'GPS In-Line Feeder Amplifier, SMA Female, 28dB',
    frequency_range: '1575.42 MHz',
    description: 'In-line GPS signal amplifier to compensate cable loss on long antenna feeder runs. 28 dB gain, SMA female in/out, DC pass-through.',
    specs: { 'Frequency': '1575.42 MHz', 'Gain': '28 dB', 'Noise Figure': '< 2.0 dB', 'Connector': 'SMA Female (in/out)', 'Supply Voltage': '3.3–5V (DC via coax)', 'Current': '< 25 mA', 'Impedance': '50 Ω' },
    datasheet_url: null as string | null, image_url: '/product-images/lgps_4.png', created_at: '2024-01-01',
  },
  {
    id: 'gps-010', name: 'AT-ANT-GPS-HGSCD-NF-40.0(SCADA)', slug: 'at-ant-gps-hgscd-nf-400-scada',
    category: 'gps-gnss-antennas', short_spec: 'GPS High-Gain SCADA Antenna, N Female, 40dB LNA',
    frequency_range: '1575.42 MHz',
    description: 'High-gain GPS antenna specifically designed for SCADA and RTK applications. 40 dB LNA, N Female connector, ruggedised outdoor housing with pole mount.',
    specs: { 'Frequency': '1575.42 MHz', 'LNA Gain': '40 dB', 'Noise Figure': '< 1.0 dB', 'Connector': 'N Female', 'IP Rating': 'IP67', 'Supply Voltage': '5–12V', 'Temperature': '-55°C to +85°C', 'Mount': 'Pole mount' },
    datasheet_url: null as string | null, image_url: '/product-images/high/hgps_1.png', created_at: '2024-01-01',
  },

  // ── WiFi ANTENNAS ───────────────────────────────────────────────────────────
  {
    id: 'wifi-001', name: 'AT-ANT-WIFI-DB-RPSMA205-305-5.0-W', slug: 'at-ant-wifi-db-rpsma205-305-50-w',
    category: 'wifi-antennas', short_spec: 'Dual-band WiFi Antenna, RP-SMA, 5 dBi, 205/305mm',
    frequency_range: '2400–2500 / 5150–5850 MHz',
    description: 'Dual-band 2.4/5 GHz WiFi antenna with RP-SMA male connector. 5 dBi gain across both bands. Weatherproof version for outdoor access points.',
    specs: { 'Frequency': '2.4 GHz & 5 GHz', 'Gain': '5 dBi', 'Connector': 'RP-SMA Male', 'Cable': 'RG174, 205/305mm', 'VSWR': '< 2.0:1', 'Impedance': '50 Ω', 'Polarization': 'Vertical' },
    datasheet_url: null as string | null, image_url: '/product-images/wifi_low_1.png', created_at: '2024-01-01',
  },
  {
    id: 'wifi-002', name: 'AT-ANT-WIFI-DB-RPSMA375-7.0', slug: 'at-ant-wifi-db-rpsma375-70',
    category: 'wifi-antennas', short_spec: 'Dual-band WiFi Antenna, RP-SMA, 7 dBi, 375mm',
    frequency_range: '2400–2500 / 5150–5850 MHz',
    description: 'High-gain dual-band WiFi antenna with 7 dBi gain and RP-SMA connector. Suitable for IEEE 802.11 a/b/g/n/ac access points and CPE devices.',
    specs: { 'Frequency': '2.4 & 5 GHz', 'Gain': '7 dBi', 'Connector': 'RP-SMA Male', 'Cable': '375mm', 'VSWR': '< 2.0:1', 'Impedance': '50 Ω' },
    datasheet_url: null as string | null, image_url: '/product-images/wifi_low_2.png', created_at: '2024-01-01',
  },
  {
    id: 'wifi-003', name: 'AT-ANT-WIFI-DB-RPSMA430-9.0', slug: 'at-ant-wifi-db-rpsma430-90',
    category: 'wifi-antennas', short_spec: 'Dual-band WiFi Antenna, RP-SMA, 9 dBi, 430mm',
    frequency_range: '2400–2500 / 5150–5850 MHz',
    description: 'High-gain 9 dBi dual-band WiFi antenna with RP-SMA connector and 430mm cable. Ideal for long-range outdoor WiFi links and industrial routers.',
    specs: { 'Frequency': '2.4 & 5 GHz', 'Gain': '9 dBi', 'Connector': 'RP-SMA Male', 'Cable': '430mm', 'VSWR': '< 2.0:1', 'Impedance': '50 Ω' },
    datasheet_url: null as string | null, image_url: '/product-images/wifi_low_3.png', created_at: '2024-01-01',
  },
  {
    id: 'wifi-004', name: 'AT-ANT-WIFI-DB-UFL178-120-3.0(CDOT)', slug: 'at-ant-wifi-db-ufl-120-cdot',
    category: 'wifi-antennas', short_spec: 'WiFi CDOT Antenna, UFL, 2.1–3.4 dBi, 120mm RG178',
    frequency_range: '2400–2500 / 4900–5875 MHz',
    description: 'Dual-band WiFi internal antenna with UFL connector and 120mm RG178 cable. CDOT approved. Gain 2.1 dBi @ 2.45 GHz to 3.4 dBi @ 5.875 GHz.',
    specs: { 'Frequency': '2400–2500 / 4900–5875 MHz', 'Gain': '2.1 dBi @ 2.45 GHz / 3.4 dBi @ 5.875 GHz', 'VSWR': '2.1 max', 'Connector': 'UFL', 'Cable': 'RG178, 120mm', 'Dimensions': '102±2 × Ø9.5 mm', 'Impedance': '50 Ω', 'Polarization': 'Vertical / Horizontal', 'Mount': 'Adjustable straight / right angle', 'Temperature': '-25 to +45°C' },
    datasheet_url: null as string | null, image_url: '/product-images/wifi_low_4.png', created_at: '2024-01-01',
  },
  {
    id: 'wifi-005', name: 'AT-ANT-WIFI-FGNW-NFST-12.0', slug: 'at-ant-wifi-fgnw-nfst-120',
    category: 'wifi-antennas', short_spec: 'WiFi Fiberglass Networking Antenna, N Female, 12 dBi',
    frequency_range: '2400–2500 MHz',
    description: 'High-gain outdoor fiberglass WiFi omnidirectional antenna with 12 dBi gain. N Female connector with stainless steel pole mount for outdoor access points and mesh networks.',
    specs: { 'Frequency': '2400–2500 MHz', 'Gain': '12 dBi', 'Connector': 'N Female (stainless)', 'Radome': 'Fibreglass UV-stabilised', 'VSWR': '< 1.5:1', 'IP Rating': 'IP67', 'Wind Rating': '150 km/h', 'Mount': 'Pole mount (stainless)' },
    datasheet_url: null as string | null, image_url: '/product-images/high/hwifi_1.png', created_at: '2024-01-01',
  },
  {
    id: 'wifi-006', name: 'AT-ANT-WIFI-FGNW-NFST-5.0', slug: 'at-ant-wifi-fgnw-nfst-50',
    category: 'wifi-antennas', short_spec: 'WiFi Fiberglass Networking Antenna, N Female, 5 dBi',
    frequency_range: '2400–2500 MHz',
    description: 'Outdoor fiberglass omnidirectional WiFi antenna with 5 dBi gain. Compact form factor for urban access points and smart city deployments.',
    specs: { 'Frequency': '2400–2500 MHz', 'Gain': '5 dBi', 'Connector': 'N Female', 'IP Rating': 'IP65', 'VSWR': '< 1.5:1', 'Mount': 'Pole mount' },
    datasheet_url: null as string | null, image_url: '/product-images/high/hwifi_2.png', created_at: '2024-01-01',
  },
  {
    id: 'wifi-007', name: 'AT-ANT-WIFI-YAGI-SMAST58-3-12.0', slug: 'at-ant-wifi-yagi-12dbi',
    category: 'wifi-antennas', short_spec: 'WiFi Yagi-UDA Directional Antenna, N/TNC Female, 7–16 dBi',
    frequency_range: '2400–2500 MHz',
    description: 'Yagi-UDA directional antenna for 2.4 GHz WiFi. Available in 7, 9, 10, 12, 14, 16 dBi configurations. N or TNC Female connector. Roof / wall mount.',
    specs: { 'Frequency': '2400–2500 MHz', 'Gain Options': '7 / 9 / 10 / 12 / 14 / 16 dBi', 'Type': 'Yagi-UDA', 'Connector': 'N or TNC Female', 'Impedance': '50 Ω', 'Mount': 'Roof / wall', 'Polarization': 'Vertical / Horizontal', 'Temperature': '-20 to +65°C' },
    datasheet_url: null as string | null, image_url: '/product-images/yagi.png', created_at: '2024-01-01',
  },
  {
    id: 'wifi-008', name: 'AT-ANT-WIFI-PP-NF-18.0', slug: 'at-ant-wifi-pp-nf-180',
    category: 'wifi-antennas', short_spec: 'WiFi Panel Antenna, N Female, 18 dBi',
    frequency_range: '2400–2500 MHz',
    description: 'High-gain flat panel directional WiFi antenna for sector coverage and point-to-point backhaul. 18 dBi gain, N Female connector.',
    specs: { 'Frequency': '2400–2500 MHz', 'Gain': '18 dBi', 'Type': 'Panel / flat patch array', 'Connector': 'N Female', 'HPBW (Az/El)': '≈ 15° / 15°', 'VSWR': '< 1.5:1', 'IP Rating': 'IP65', 'Mount': 'Wall / pole' },
    datasheet_url: null as string | null, image_url: '/product-images/patch.png', created_at: '2024-01-01',
  },
  {
    id: 'wifi-009', name: 'AT-ANT-WIFI-CEILING-SMA58-500-6.0', slug: 'at-ant-wifi-ceiling-6dbi',
    category: 'wifi-antennas', short_spec: 'WiFi Ceiling Mount Antenna, RP-SMA, 6 dBi, RG58 0.5m',
    frequency_range: '2400–2500 MHz',
    description: 'Indoor ceiling-mount omnidirectional WiFi antenna. 6 dBi gain, RP-SMA connector, RG58 0.5m cable. Dimensions 150×Ø165 mm.',
    specs: { 'Frequency': '2400–2500 MHz', 'Gain': '6 dBi', 'Type': 'Ceiling Mount Omni', 'Connector': 'RP-SMA', 'Cable': 'RG58, 0.5m', 'Dimensions': '150±5 × Ø165±5 mm', 'Impedance': '50 Ω', 'Polarization': 'Vertical', 'Mount': 'Ceiling mount', 'Temperature': '-20 to +65°C' },
    datasheet_url: null as string | null, image_url: '/product-images/wifi_low_5.png', created_at: '2024-01-01',
  },
  {
    id: 'wifi-010', name: 'AT-ANT-WIFI-HORN-NFST-24.0', slug: 'at-ant-wifi-horn-24dbi',
    category: 'wifi-antennas', short_spec: 'WiFi Horn Antenna, N Female, 24 dBi, Circular Polarization',
    frequency_range: '2400–2500 MHz',
    description: 'High-gain horn antenna for long-range directional WiFi links. 24 dBi gain, circular polarization, N Female connector. Dimensions 430×Ø200 mm.',
    specs: { 'Frequency': '2400–2500 MHz', 'Gain': '24 dBi', 'Type': 'Horn', 'Connector': 'N Female', 'Polarization': 'Circular', 'Dimensions': '430 × Ø200 mm', 'Impedance': '50 Ω', 'Mount': 'Ceiling / pole', 'Temperature': '-20 to +65°C' },
    datasheet_url: null as string | null, image_url: '/product-images/high/hwifi_3.png', created_at: '2024-01-01',
  },

  // ── VHF / UHF ANTENNAS ──────────────────────────────────────────────────────
  {
    id: 'vhf-001', name: 'AT-ANT-VHF-SMART2.15', slug: 'at-ant-vhf-smart215',
    category: 'vhf-uhf-antennas', short_spec: 'UHF Omni Antenna, SMA RA, 2.15 dBi, 433 MHz',
    frequency_range: '433 MHz',
    description: 'UHF omni antenna for 433 MHz ISM band. SMA male right-angle connector, modem-type mount. Dimensions 53×Ø9 mm.',
    specs: { 'Frequency': '433 MHz', 'Gain': '2.15 dBi', 'Type': 'Omni', 'Connector': 'SMA Male Right Angle', 'Dimensions': '53±2 × Ø9 mm', 'Impedance': '50 Ω', 'Polarization': 'Vertical / Horizontal', 'Temperature': '-20 to +65°C' },
    datasheet_url: null as string | null, image_url: '/product-images/lvhf_1.png', created_at: '2024-01-01',
  },
  {
    id: 'vhf-002', name: 'AT-ANT-VHF-SMART1.5', slug: 'at-ant-vhf-smart15',
    category: 'vhf-uhf-antennas', short_spec: 'UHF Omni Antenna, SMA RA, 1.5 dBi, 401–433 MHz',
    frequency_range: '401–433 MHz',
    description: 'UHF omni antenna covering 401–433 MHz ISM band. SMA male right-angle connector, modem-type mount. Dimensions 47×Ø6.5 mm.',
    specs: { 'Frequency': '401–433 MHz', 'Gain': '1.5 dBi', 'Type': 'Omni', 'Connector': 'SMA Male Right Angle', 'Dimensions': '47±2 × Ø6.5 mm', 'Impedance': '50 Ω', 'Polarization': 'Vertical / Horizontal', 'Temperature': '-20 to +65°C' },
    datasheet_url: null as string | null, image_url: '/product-images/lvhf_2.png', created_at: '2024-01-01',
  },
  {
    id: 'vhf-003', name: 'AT-ANT-VHF-SMART2.15-RA', slug: 'at-ant-vhf-smart215-ra',
    category: 'vhf-uhf-antennas', short_spec: 'UHF Omni Antenna, SMA RA, 2.15 dBi, 433 MHz',
    frequency_range: '433 MHz',
    description: 'UHF omni antenna for 433 MHz with right-angle SMA connector for modem/handheld terminal mounting.',
    specs: { 'Frequency': '433 MHz', 'Gain': '2.15 dBi', 'Type': 'Omni', 'Connector': 'SMA Male Right Angle', 'Dimensions': '53±2 × Ø9 mm', 'Impedance': '50 Ω', 'Polarization': 'Vertical / Horizontal', 'Temperature': '-20 to +65°C' },
    datasheet_url: null as string | null, image_url: '/product-images/lvhf_3.png', created_at: '2024-01-01',
  },
  {
    id: 'vhf-004', name: 'AT-ANT-VHF-BNC-5', slug: 'at-ant-vhf-bnc-5',
    category: 'vhf-uhf-antennas', short_spec: 'UHF Antenna, BNC Male, 5 dBi, 433 MHz',
    frequency_range: '433 MHz',
    description: 'UHF omni antenna at 433 MHz with BNC male connector. Modem-mount type. Dimensions 440×Ø14.2 mm.',
    specs: { 'Frequency': '433 MHz', 'Gain': '5 dBi', 'Type': 'Omni', 'Connector': 'BNC Male', 'Dimensions': '440 × Ø14.2 mm', 'Impedance': '50 Ω', 'Polarization': 'Vertical', 'Temperature': '-20 to +65°C' },
    datasheet_url: null as string | null, image_url: '/product-images/lvhf_4.png', created_at: '2024-01-01',
  },
  {
    id: 'vhf-005', name: 'AT-ANT-VHF-BNC440-7.0(SL)', slug: 'at-ant-vhf-bnc440-70-sl',
    category: 'vhf-uhf-antennas', short_spec: 'UHF High-Gain Omni Antenna, BNC, 7 dBi, 400–470 MHz',
    frequency_range: '400–470 MHz',
    description: 'High-gain UHF omni antenna covering 400–470 MHz with BNC connector. Modem-mount type. Dimensions 440×Ø15 mm.',
    specs: { 'Frequency': '400–470 MHz', 'Gain': '7 dBi', 'Type': 'Omni', 'Connector': 'BNC', 'Dimensions': '440 × Ø15 mm', 'Impedance': '50 Ω', 'Polarization': 'Vertical / Horizontal', 'Temperature': '-20 to +65°C' },
    datasheet_url: null as string | null, image_url: '/product-images/high/hvhf_1.png', created_at: '2024-01-01',
  },
  {
    id: 'vhf-006', name: 'AT-ANT-VHF-BNC440-7.0(SL)-UHF', slug: 'at-ant-vhf-bnc440-70-sl-uhf',
    category: 'vhf-uhf-antennas', short_spec: 'UHF Sleeve Antenna, BNC, 7 dBi, 400–470 MHz',
    frequency_range: '400–470 MHz',
    description: 'UHF sleeve-type antenna for 400–470 MHz TETRA/P25 and IoT frequency bands. BNC connector, 440mm length.',
    specs: { 'Frequency': '400–470 MHz', 'Gain': '7 dBi', 'Type': 'Omni', 'Connector': 'BNC', 'Dimensions': '440 × Ø15 mm', 'Impedance': '50 Ω', 'Polarization': 'Vertical / Horizontal', 'Temperature': '-20 to +65°C' },
    datasheet_url: null as string | null, image_url: '/product-images/high/hvhf_2.png', created_at: '2024-01-01',
  },

  // ── HIGH GAIN ANTENNAS ──────────────────────────────────────────────────────
  {
    id: 'hga-001', name: 'AT-ANT-GPS-HGM-SMA58-1-35.0', slug: 'at-ant-gps-hgm-sma58-1-350',
    category: 'high-gain-antennas', short_spec: 'GPS High-Gain Active Antenna, SMA, 35dB LNA, 1m Cable',
    frequency_range: '1575.42 MHz',
    description: 'High-gain GPS active antenna with 35 dB LNA for long cable runs. SMA male with RG58 1m cable and large-aperture patch element for maximum signal capture.',
    specs: { 'Frequency': '1575.42 MHz', 'LNA Gain': '35 dB', 'Noise Figure': '< 1.0 dB', 'Connector': 'SMA Male', 'Cable': 'RG58, 1m', 'Supply': '3.3–5V', 'IP Rating': 'IP67', 'Temperature': '-40°C to +85°C' },
    datasheet_url: null as string | null, image_url: '/product-images/high/hgps_2.png', created_at: '2024-01-01',
  },
  {
    id: 'hga-002', name: 'AT-ANT-QGSM-FGNW-NF213-500-10.0', slug: 'at-ant-qgsm-fgnw-nf213-500-100',
    category: 'high-gain-antennas', short_spec: 'GSM High-Gain Fiberglass Antenna, N Female, 10 dBi, 500mm',
    frequency_range: '824–2170 MHz',
    description: 'High-gain outdoor omnidirectional GSM/3G fiberglass antenna for base repeaters and long-range coverage. 10 dBi gain, N Female, 500mm radome.',
    specs: { 'Frequency': '824–2170 MHz', 'Gain': '10 dBi', 'Connector': 'N Female', 'Radome': 'Fibreglass, 500mm', 'IP Rating': 'IP67', 'VSWR': '< 1.5:1', 'Mount': 'Pole mount' },
    datasheet_url: null as string | null, image_url: '/product-images/high/hgsm_1.png', created_at: '2024-01-01',
  },
  {
    id: 'hga-003', name: 'AT-ANT-QGSM-FGNW-NF213-500-7.0', slug: 'at-ant-qgsm-fgnw-nf213-500-70',
    category: 'high-gain-antennas', short_spec: 'GSM High-Gain Fiberglass Antenna, N Female, 7 dBi',
    frequency_range: '824–2170 MHz',
    description: 'Medium-gain outdoor fiberglass GSM antenna with 7 dBi gain. For urban repeater and multi-operator DAS applications.',
    specs: { 'Frequency': '824–2170 MHz', 'Gain': '7 dBi', 'Connector': 'N Female', 'IP Rating': 'IP65', 'VSWR': '< 1.5:1', 'Mount': 'Pole' },
    datasheet_url: null as string | null, image_url: '/product-images/high/hgsm_2.png', created_at: '2024-01-01',
  },
  {
    id: 'hga-004', name: 'AT-ANT-WIFI-BFIRE-NF240-500-24.0', slug: 'at-ant-wifi-bfire-nf240-500-240',
    category: 'high-gain-antennas', short_spec: 'WiFi Backfire Antenna, N Female, 24 dBi',
    frequency_range: '2400–2500 MHz',
    description: 'Ultra high-gain backfire directional antenna for long-range 2.4 GHz WiFi links. 24 dBi gain, N Female connector, very narrow beam for point-to-point links over several km.',
    specs: { 'Frequency': '2400–2500 MHz', 'Gain': '24 dBi', 'Type': 'Backfire', 'Connector': 'N Female', 'HPBW': '≈ 8°', 'VSWR': '< 1.5:1', 'Mount': 'Pole / tripod' },
    datasheet_url: null as string | null, image_url: '/product-images/high/hwifi_4.png', created_at: '2024-01-01',
  },
  {
    id: 'hga-005', name: 'AT-ANT-WIFI-PRB-NFST-500-24.0', slug: 'at-ant-wifi-prb-nfst-500-240',
    category: 'high-gain-antennas', short_spec: 'WiFi Parabolic Dish Antenna, N Female, 24 dBi',
    frequency_range: '2400–2500 MHz',
    description: 'Parabolic reflector WiFi antenna with 24 dBi gain for long-range point-to-point wireless backhaul links at 2.4 GHz.',
    specs: { 'Frequency': '2400–2500 MHz', 'Gain': '24 dBi', 'Type': 'Parabolic reflector', 'Connector': 'N Female', 'HPBW': '≈ 8°', 'F/B Ratio': '> 35 dB', 'IP Rating': 'IP65', 'Mount': 'Pole / tripod' },
    datasheet_url: null as string | null, image_url: '/product-images/high/hwifi_5.png', created_at: '2024-01-01',
  },
  {
    id: 'hga-006', name: 'AT-ANT-VHF-PM-BNC174-200-6.0', slug: 'at-ant-vhf-pm-bnc174-200-60',
    category: 'high-gain-antennas', short_spec: 'VHF Pole-Mount High-Gain Antenna, BNC, 6 dBi, 200mm',
    frequency_range: '136–174 MHz',
    description: 'High-gain VHF pole-mount antenna with BNC male and RG174 cable. For fixed base station and repeater applications in the VHF land mobile band.',
    specs: { 'Frequency': '136–174 MHz', 'Gain': '6 dBi', 'Connector': 'BNC Male', 'Cable': 'RG174, 200mm', 'VSWR': '< 1.5:1', 'Mount': 'Pole', 'IP Rating': 'IP65' },
    datasheet_url: null as string | null, image_url: '/product-images/high/hvhf_3.png', created_at: '2024-01-01',
  },

  // ── RFID ANTENNAS ───────────────────────────────────────────────────────────
  {
    id: 'rfid-001', name: 'AT-ANT-UHF-RFID', slug: 'at-ant-uhf-rfid',
    category: 'rfid-antennas', short_spec: 'UHF RFID Gate Antenna, 865–868 / 902–928 MHz',
    frequency_range: '865–868 MHz / 902–928 MHz',
    description: 'UHF RFID gate/panel antenna covering 865–868 MHz (India) and 902–928 MHz (US ISM). Supply 3–5V DC. Operating temperature -20 to +60°C.',
    specs: { 'Frequency': '902–928 MHz / 865–868 MHz', 'Supply Voltage': '3–5V DC', 'Impedance': '50 Ω', 'Operating Temperature': '-20 to +60°C', 'Description': 'RFID Gate Antenna' },
    datasheet_url: null as string | null, image_url: '/product-images/rfid_1.png', created_at: '2024-01-01',
  },
  {
    id: 'rfid-002', name: 'AT-ANT-LF-HF-RFID', slug: 'at-ant-lf-hf-rfid',
    category: 'rfid-antennas', short_spec: 'LF/HF RFID Antenna, 125/134.34 kHz / 13.56 MHz',
    frequency_range: '125 kHz / 134.34 kHz / 13.56 MHz',
    description: 'LF and HF RFID antenna. LF: 125 kHz / 134.34 kHz. HF: 13.56 MHz. Supply 3–5V DC. Operating temperature -40 to +85°C.',
    specs: { 'LF Frequency': '125 / 134.34 kHz', 'HF Frequency': '13.56 MHz', 'Supply Voltage': '3–5V DC', 'Impedance': '50 Ω', 'Operating Temperature': '-40 to +85°C' },
    datasheet_url: null as string | null, image_url: '/product-images/rfid_2.png', created_at: '2024-01-01',
  },
  {
    id: 'rfid-003', name: 'AT-UHF-RFID-2CH4PO-MR6132 A', slug: 'at-uhf-rfid-2ch4po-mr6132a',
    category: 'rfid-antennas', short_spec: 'UHF RFID Reader, 2-Channel 4-Port, 865–868 / 902–928 MHz',
    frequency_range: '865–868 MHz / 902–928 MHz',
    description: 'UHF RFID reader module. Ant 1+3 (TX+RX team 1), Ant 2+4 (TX+RX team 2). RS232 / RJ45 TCP-IP / RS485 interface. IP Level 56.',
    specs: { 'Frequency': '902–928 MHz or 865–868 MHz', 'Protocol': 'ISO18000-6B, ISO18000-6C (EPC GEN2)', 'Operation Mode': 'FHSS', 'RF Output Power': '0–30 dBm (software configurable)', 'Antenna Ports': '4 (2 TX + 2 RX)', 'Interface': 'RS232 / RJ45 TCP/IP / RS485', 'IP Level': '56', 'Supply': 'DC +9V', 'Dimensions': '310 × 210 × 40 mm', 'Weight': '2 kg', 'Operating Temperature': '-20 to +80°C' },
    datasheet_url: null as string | null, image_url: '/product-images/rfid_3.png', created_at: '2024-01-01',
  },

  // ── LPA / WIDEBAND ANTENNAS ─────────────────────────────────────────────────
  {
    id: 'lpa-001', name: 'LPA-20-3000MHz', slug: 'lpa-20-3000mhz',
    category: 'lpa-antennas', short_spec: 'Log-Periodic Antenna, 20–3000 MHz',
    frequency_range: '20–3000 MHz',
    description: 'Broadband log-periodic dipole array antenna covering 20 MHz to 3 GHz. For EMC testing, SIGINT, spectrum monitoring, and wideband RF measurement.',
    specs: { 'Frequency': '20–3000 MHz', 'Gain': '6–9 dBi (avg)', 'Type': 'Log-Periodic Dipole Array', 'Connector': 'N Female', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1', 'Polarization': 'Linear', 'Power': '100W' },
    datasheet_url: null as string | null, image_url: '/product-images/lpa_low_1.png', created_at: '2024-01-01',
  },
  {
    id: 'lpa-002', name: 'LPA-1-30MHz', slug: 'lpa-1-30mhz',
    category: 'lpa-antennas', short_spec: 'Log-Periodic Antenna, 1–30 MHz (HF)',
    frequency_range: '1–30 MHz',
    description: 'HF log-periodic antenna for 1–30 MHz coverage. Used in HF communications monitoring, SIGINT, and shortwave broadcasting measurement.',
    specs: { 'Frequency': '1–30 MHz', 'Gain': '5–8 dBi', 'Type': 'Log-Periodic', 'Connector': 'N Female', 'Impedance': '50 Ω', 'Polarization': 'Linear horizontal', 'Power': '200W' },
    datasheet_url: null as string | null, image_url: '/product-images/lpa_low_2.png', created_at: '2024-01-01',
  },
  {
    id: 'lpa-003', name: 'LPA-30-500MHz', slug: 'lpa-30-500mhz',
    category: 'lpa-antennas', short_spec: 'Log-Periodic Antenna, 30–500 MHz (VHF/UHF)',
    frequency_range: '30–500 MHz',
    description: 'VHF/UHF log-periodic antenna from 30–500 MHz for EMC pre-compliance, military comms monitoring, and broadcast monitoring.',
    specs: { 'Frequency': '30–500 MHz', 'Gain': '6–9 dBi', 'Connector': 'N Female', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1', 'Polarization': 'Linear', 'Power': '150W' },
    datasheet_url: null as string | null, image_url: '/product-images/lpa_low_3.png', created_at: '2024-01-01',
  },
  {
    id: 'lpa-004', name: 'LPA-500-6000MHz', slug: 'lpa-500-6000mhz',
    category: 'lpa-antennas', short_spec: 'Log-Periodic Antenna, 500 MHz–6 GHz',
    frequency_range: '500–6000 MHz',
    description: 'Wideband log-periodic antenna covering 500 MHz to 6 GHz. Ideal for 5G/WiFi/cellular spectrum monitoring, EMC testing, and wideband signal intelligence.',
    specs: { 'Frequency': '500–6000 MHz', 'Gain': '7–10 dBi', 'Connector': 'N Female', 'Impedance': '50 Ω', 'VSWR': '< 2.0:1', 'Polarization': 'Linear', 'Power': '50W' },
    datasheet_url: null as string | null, image_url: '/product-images/lpa_low_4.png', created_at: '2024-01-01',
  },

  // ── DUPLEXERS ───────────────────────────────────────────────────────────────
  {
    id: 'dup-001', name: 'AT-MD-4460', slug: 'at-md-4460',
    category: 'duplexers', short_spec: 'Cavity Duplexer, Tx 4400–4520 MHz / Rx 4880–5000 MHz',
    frequency_range: '4400–5000 MHz',
    description: 'Cavity duplexer AT-MD-4460. Tx 4400–4520 MHz, Rx 4880–5000 MHz. Coupler 20 dB±2 dB, 25W power handling.',
    specs: { 'TX Band': '4400–4520 MHz', 'RX Band': '4880–5000 MHz', 'Insertion Loss TX/RX': '1.0 dB max', 'Return Loss': '16 dB min', 'Ripple': '±0.1 dB', 'TX-RX Isolation': '> 85 dB', 'Coupler': '20 dB ±2 dB', 'Power': '25W', 'Impedance': '50 Ω', 'Material': 'Aluminium, Silver Plating' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/duplex_2.png', created_at: '2024-01-01',
  },
  {
    id: 'dup-002', name: 'AT-MD-4700', slug: 'at-md-4700',
    category: 'duplexers', short_spec: 'Cavity Duplexer, Tx 4400–4520 MHz / Rx 4640–4760 MHz',
    frequency_range: '4400–4760 MHz',
    description: 'Cavity duplexer AT-MD-4700. Tx 4400–4520 MHz, Rx 4640–4760 MHz. 0.8 dB insertion loss, 25W power.',
    specs: { 'TX Band': '4400–4520 MHz', 'RX Band': '4640–4760 MHz', 'Insertion Loss': '0.8 dB', 'Return Loss': '16 dB min', 'TX-RX Isolation': '> 85 dB', 'Power': '25W', 'Impedance': '50 Ω', 'Material': 'Aluminium, Silver Plating' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/duplex_2.png', created_at: '2024-01-01',
  },
  {
    id: 'dup-003', name: 'AT-MD-4940', slug: 'at-md-4940',
    category: 'duplexers', short_spec: 'Cavity Duplexer, Tx 4880–5000 MHz / Rx 4640–4760 MHz',
    frequency_range: '4640–5000 MHz',
    description: 'Cavity duplexer AT-MD-4940. Tx 4880–5000 MHz, Rx 4640–4760 MHz. 0.8 dB insertion loss, 25W power.',
    specs: { 'TX Band': '4880–5000 MHz', 'RX Band': '4640–4760 MHz', 'Insertion Loss': '0.8 dB', 'Return Loss': '16 dB min', 'TX-RX Isolation': '> 85 dB', 'Power': '25W', 'Impedance': '50 Ω', 'Material': 'Aluminium, Silver Plating' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/duplex_2.png', created_at: '2024-01-01',
  },
  {
    id: 'dup-004', name: 'AT-MDU-2875', slug: 'at-mdu-2875',
    category: 'duplexers', short_spec: 'Cavity Duplexer, Tx 2680 MHz / Rx 2510 MHz',
    frequency_range: '2510–2680 MHz',
    description: 'Cavity duplexer AT-MDU-2875. Tx 2680±10 MHz, Rx 2510±10 MHz. > 100 dB TX-RX isolation, 10W power.',
    specs: { 'TX Band': '2680 ±10 MHz', 'RX Band': '2510 ±10 MHz', 'Insertion Loss TX': '1.1 dB max', 'Insertion Loss RX': '0.85 dB max', 'Return Loss': '16 dB min', 'Ripple': '±0.2 dB max', 'TX-RX Isolation': '> 100 dB', 'Power': '10W', 'Impedance': '50 Ω', 'Material': 'Aluminium, Silver Plating' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/duplex_2.png', created_at: '2024-01-01',
  },

  // ── DIPLEXERS ───────────────────────────────────────────────────────────────
  {
    id: 'dip-001', name: 'AT-MD-Series Diplexer', slug: 'at-md-series-diplexer',
    category: 'diplexers', short_spec: 'RF Diplexer AT-MD Series, Cavity Type',
    frequency_range: '2510–5000 MHz',
    description: 'Cavity diplexer from the AT-MD series for combining two frequency bands on a single antenna port. Available in 4.4/4.88 GHz and 2.51/2.68 GHz band configurations.',
    specs: { 'Type': 'Cavity Diplexer', 'Models': 'AT-MD-4460 / AT-MD-4700 / AT-MD-4940 / AT-MDU-2875', 'Insertion Loss': '0.8–1.1 dB per port', 'TX-RX Isolation': '> 85 dB', 'Return Loss': '16 dB min', 'Power': '10–25W', 'Impedance': '50 Ω', 'Material': 'Aluminium, Silver Plating' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/duplex_2.png', created_at: '2024-01-01',
  },

  // ── POWER SPLITTERS ─────────────────────────────────────────────────────────
  {
    id: 'spl-001', name: 'AT-LPW-SP-2-500-6000', slug: 'at-lpw-sp-2-500-6000',
    category: 'power-splitters', short_spec: '1×2 Low Power RF Splitter, 500–6000 MHz',
    frequency_range: '500–6000 MHz',
    description: 'Compact 1-to-2 resistive power splitter covering 500 MHz to 6 GHz. Excellent amplitude and phase balance for signal distribution in antenna test setups and indoor DAS.',
    specs: { 'Frequency': '500–6000 MHz', 'Division': '1×2', 'Insertion Loss': '< 4.0 dB (each port)', 'Amplitude Balance': '±0.5 dB', 'Phase Balance': '±5°', 'Port Isolation': '> 20 dB', 'VSWR': '< 1.5:1', 'Connector': 'SMA Female', 'Power': '1W max' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/ps_1.png', created_at: '2024-01-01',
  },
  {
    id: 'spl-002', name: 'AT-LPW-SP-2-1500-8000', slug: 'at-lpw-sp-2-1500-8000',
    category: 'power-splitters', short_spec: '1×2 Low Power RF Splitter, 1500–8000 MHz',
    frequency_range: '1500–8000 MHz',
    description: '1-to-2 power splitter for the cellular and microwave bands from 1.5 GHz to 8 GHz. Used in base station monitoring, antenna alignment, and lab test setups.',
    specs: { 'Frequency': '1500–8000 MHz', 'Division': '1×2', 'Insertion Loss': '< 4.5 dB', 'Amplitude Balance': '±0.5 dB', 'Port Isolation': '> 20 dB', 'VSWR': '< 1.5:1', 'Connector': 'SMA Female' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/ps_2.png', created_at: '2024-01-01',
  },
  {
    id: 'spl-003', name: 'AT-LPW-SP-4-8000', slug: 'at-lpw-sp-4-8000',
    category: 'power-splitters', short_spec: '1×4 Low Power RF Splitter, up to 8000 MHz',
    frequency_range: '500–8000 MHz',
    description: '1-to-4 power splitter covering up to 8 GHz. For 4-way signal distribution in MIMO test beds, antenna array setups, and multi-receiver RF systems.',
    specs: { 'Frequency': '500–8000 MHz', 'Division': '1×4', 'Insertion Loss': '< 7.5 dB (each port)', 'Amplitude Balance': '±0.5 dB', 'Phase Balance': '±5°', 'Port Isolation': '> 20 dB', 'VSWR': '< 1.5:1', 'Connector': 'SMA Female' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/ps_3.png', created_at: '2024-01-01',
  },
  {
    id: 'spl-004', name: 'AT-LPW-SP-16-6000', slug: 'at-lpw-sp-16-6000',
    category: 'power-splitters', short_spec: '1×16 Low Power RF Splitter, up to 6000 MHz',
    frequency_range: '500–6000 MHz',
    description: '1-to-16 power splitter for large DAS, repeater signal distribution networks, and multi-antenna test systems. Compact housing with SMA female connectors.',
    specs: { 'Frequency': '500–6000 MHz', 'Division': '1×16', 'Insertion Loss': '< 14 dB (each port)', 'Amplitude Balance': '±1.0 dB', 'VSWR': '< 1.8:1', 'Connector': 'SMA Female', 'Housing': 'Aluminium' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/ps_4.png', created_at: '2024-01-01',
  },
  {
    id: 'spl-005', name: 'AT-gps-splitter', slug: 'at-gps-splitter',
    category: 'power-splitters', short_spec: 'GPS Active Splitter, 1×4, 1575 MHz',
    frequency_range: '1575.42 MHz',
    description: 'Active GPS signal splitter with built-in LNA to compensate split loss. Distributes one GPS antenna signal to 4 receivers without degradation. DC pass-through on port 1.',
    specs: { 'Frequency': '1575.42 MHz', 'Division': '1×4 active', 'Gain': '0 dB net (compensated)', 'DC Pass': 'Port 1 (antenna power)', 'Supply': '5V, 200mA', 'Connector': 'SMA Female', 'Noise Figure': '< 3 dB' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/ps_5.png', created_at: '2024-01-01',
  },

  // ── ATTENUATORS ─────────────────────────────────────────────────────────────
  {
    id: 'att-001', name: 'AT-Attenuator-FX-H2', slug: 'at-attenuator-fx-h2',
    category: 'attenuators', short_spec: 'Fixed RF Attenuator, N-Type, 3–40 dB, DC–3 GHz',
    frequency_range: 'DC–3 GHz',
    description: 'Fixed RF attenuator with N-type connector. Available in 3, 6, 10, 20, 30, 40 dB. 80W power handling.',
    specs: { 'Frequency': 'DC–3 GHz', 'Attenuation': '3 / 6 / 10 / 20 / 30 / 40 dB', 'Accuracy': '0.6 dB (DC–3 GHz)', 'Power': '80W', 'VSWR': '< 1.30:1 (DC–3 GHz)', 'Connector': 'N-Type', 'Impedance': '50 Ω', 'Temperature': '-55 to +125°C' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/attenu_1.png', created_at: '2024-01-01',
  },
  {
    id: 'att-002', name: 'Attenuator-VA-1', slug: 'attenuator-va-1',
    category: 'attenuators', short_spec: 'Variable RF Attenuator VA-1, 0–31 dB, DC–2.7 GHz',
    frequency_range: 'DC–2.7 GHz',
    description: 'Manual step variable RF attenuator, 0–31 dB range in 1 dB steps. DC to 2.7 GHz coverage.',
    specs: { 'Frequency': 'DC–2.7 GHz', 'Attenuation Range': '0–31 dB', 'Step Size': '1 dB', 'Insertion Loss': '0.7 dB @ 2 GHz / 1.2 dB @ 2.7 GHz', 'Accuracy': '0.5 dB max @ 1 GHz', 'VSWR': '< 1.50:1', 'Power': '2W', 'Impedance': '50 Ω', 'Temperature': '-40 to +85°C' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/attenu_2.png', created_at: '2024-01-01',
  },
  {
    id: 'att-003', name: 'AT-DKVA-90', slug: 'at-dkva-90',
    category: 'attenuators', short_spec: 'Dual Knob Variable Attenuator, 0–100/110 dB, DC–3 GHz',
    frequency_range: 'DC–3 GHz',
    description: 'Dual knob variable attenuator with 0–100/110 dB range in 1 dB steps (two controls: 1–10 dB and 10–90 dB). SMA female connectors.',
    specs: { 'Frequency': 'DC–3 GHz', 'Range': '0–100 / 110 dB', 'Step Size': '1 dB', 'VSWR': '≤ 1.50 (DC–2.5 GHz)', 'Insertion Loss': '≤ 1.45 dB', 'Accuracy': '±0.5 dB (< 50 dB) / ±5% (> 50 dB)', 'Power': '10W', 'Connector': 'SMA Female', 'Impedance': '50 Ω', 'Temperature': '-25 to +85°C' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/attenu_3.png', created_at: '2024-01-01',
  },

  // ── COUPLERS ────────────────────────────────────────────────────────────────
  {
    id: 'cpl-001', name: 'AT-COUPLER-800-2500', slug: 'at-coupler-800-2500',
    category: 'couplers', short_spec: 'Directional Coupler, 800–2500 MHz, N Female, –5 dB',
    frequency_range: '800–2500 MHz',
    description: 'Directional RF coupler for power monitoring and signal sampling, 800–2500 MHz. –5 dB coupling, N Female connectors, 200W average power.',
    specs: { 'Frequency': '800–2500 MHz', 'Coupling': '–5 dB', 'Inband Ripple': '±0.6 dB', 'Directivity': '≥ 20 dB', 'Insertion Loss': '≤ 2.0 dB', 'VSWR': '≤ 1.20', 'Power': '200W avg / 1500W peak', 'Connector': 'N Female', 'Impedance': '50 Ω', 'Dimensions': '120 × 40 mm' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/coup_1.png', created_at: '2024-01-01',
  },
  {
    id: 'cpl-002', name: 'AT-COUPLER-117', slug: 'at-coupler-117',
    category: 'couplers', short_spec: 'Aviation Band Coupler, 117.975–137 MHz, N Female',
    frequency_range: '117.975–137 MHz',
    description: 'Dual-cavity band pass coupler for VHF aviation band (117.975–137 MHz). 4-port, 19" rack-mountable. Minimum 100 kHz channel spacing.',
    specs: { 'Frequency': '117.975–137 MHz', 'Type': 'Dual Cavity Band Pass', 'Insertion Loss': '0.2–0.5 dB adj', 'Return Loss': '< –14 dB', 'VSWR': '< 1.5:1', 'Isolation O/P–O/P': '> 20 dB', 'Isolation O/P–I/P': '> 20 dB', 'Selectivity': '> 15 dB @ 500 kHz offset', 'Min Channel': '100 kHz', 'Connector': 'N Female', 'Ports': '4', 'Temperature': '-30 to +60°C' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/coup_2.png', created_at: '2024-01-01',
  },
  {
    id: 'cpl-003', name: 'AT-COUPLER-800-2500-HP', slug: 'at-coupler-800-2500-hp',
    category: 'couplers', short_spec: 'High-Power Directional Coupler, 800–2500 MHz, N Female',
    frequency_range: '800–2500 MHz',
    description: 'High-power version of the AT-COUPLER-800-2500 for base station power monitoring applications.',
    specs: { 'Frequency': '800–2500 MHz', 'Coupling': '–5 dB', 'Directivity': '≥ 20 dB', 'Insertion Loss': '≤ 2.0 dB', 'VSWR': '≤ 1.20', 'Power': '200W avg / 1500W peak', 'Connector': 'N Female', 'Impedance': '50 Ω' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/coup_1.png', created_at: '2024-01-01',
  },

  // ── BAND PASS FILTERS ───────────────────────────────────────────────────────
  {
    id: 'bpf-001', name: 'AT-MF-1090', slug: 'at-mf-1090',
    category: 'band-pass-filters', short_spec: 'Band Pass Filter, 1090 MHz, 1085–1095 MHz BW',
    frequency_range: '1085–1095 MHz',
    description: 'Cavity band pass filter at 1090 MHz with 10 MHz passband. Used in ADS-B / Mode-S transponder systems.',
    specs: { 'Center Frequency': '1090 MHz', 'Passband': '1085–1095 MHz', 'Insertion Loss': '2.5 dB', 'Ripple': '±0.1 dB', 'Return Loss': '20 dB min', 'Rejection 2nd Harmonic': '60 dB', 'Power': '10W', 'Impedance': '50 Ω', 'Material': 'Aluminium, Silver Plating' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/micro_bpf.png', created_at: '2024-01-01',
  },
  {
    id: 'bpf-002', name: 'AT-MF-4460', slug: 'at-mf-4460',
    category: 'band-pass-filters', short_spec: 'Band Pass Filter, 4460 MHz, 4400–4520 MHz BW',
    frequency_range: '4400–4520 MHz',
    description: 'Cavity band pass filter at 4460 MHz with 120 MHz passband. 80 dB rejection at 2nd and 3rd harmonic.',
    specs: { 'Center Frequency': '4460 MHz', 'Passband': '4400–4520 MHz', 'Insertion Loss': '0.8 dB', 'Ripple': '±0.1 dB', 'Return Loss': '17.7 dB min', 'Rejection 80 dB BW': '4300–4620 MHz', 'Power': '50W', 'Impedance': '50 Ω', 'Material': 'Aluminium, Silver Plating' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/micro_bpf.png', created_at: '2024-01-01',
  },
  {
    id: 'bpf-003', name: 'AT-MF-4700/4940', slug: 'at-mf-4700-4940',
    category: 'band-pass-filters', short_spec: 'Band Pass Filter, 4700 / 4940 MHz',
    frequency_range: '4640–5000 MHz',
    description: 'Cavity band pass filters at 4700 MHz (4640–4760 MHz BW) and 4940 MHz (4880–5000 MHz BW). High rejection, 50W power handling.',
    specs: { 'Models': 'AT-MF-4700 / AT-MF-4940', 'Passbands': '4640–4760 MHz / 4880–5000 MHz', 'Insertion Loss': '0.8 dB', 'Power': '50W', 'Impedance': '50 Ω', 'Material': 'Aluminium, Silver Plating' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/micro_bpf.png', created_at: '2024-01-01',
  },

  // ── LIGHTNING ARRESTORS ─────────────────────────────────────────────────────
  {
    id: 'la-001', name: 'AT-LA-N-2000', slug: 'at-la-n-2000',
    category: 'lightning-arrestors', short_spec: 'RF Lightning Arrestor, N Type, DC–2 GHz',
    frequency_range: 'DC–2000 MHz',
    description: 'Gas discharge tube RF lightning arrestor with N Male/Female connectors. Protects antenna feedlines from lightning surges up to 2 GHz. Outdoor IP67 rated.',
    specs: { 'Frequency': 'DC–2000 MHz', 'Insertion Loss': '< 0.3 dB', 'VSWR': '< 1.2:1', 'Discharge Current': '20 kA (8/20 µs)', 'DC Breakdown': '90V', 'Connector': 'N Male – N Female', 'IP Rating': 'IP67', 'Temperature': '-40°C to +85°C' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/light_1.png', created_at: '2024-01-01',
  },
  {
    id: 'la-002', name: 'AT-LA-N6000', slug: 'at-la-n6000',
    category: 'lightning-arrestors', short_spec: 'RF Lightning Arrestor, N Type, DC–6 GHz',
    frequency_range: 'DC–6000 MHz',
    description: 'Wideband gas discharge tube RF lightning arrestor covering DC to 6 GHz. Suitable for 5G sub-6 GHz antenna feedlines and outdoor WiFi installations.',
    specs: { 'Frequency': 'DC–6000 MHz', 'Insertion Loss': '< 0.5 dB', 'VSWR': '< 1.3:1', 'Discharge Current': '20 kA (8/20 µs)', 'DC Breakdown': '90V', 'Connector': 'N Male – N Female', 'IP Rating': 'IP67' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/light_2.png', created_at: '2024-01-01',
  },

  // ── RF CABLE ASSEMBLIES ─────────────────────────────────────────────────────
  {
    id: 'ca-001', name: 'AT-CA-SMAM-SMAM-XXX', slug: 'at-ca-smam-smam-custom',
    category: 'rf-cable-assemblies', short_spec: 'SMA Male to SMA Male Cable Assembly, Custom Length',
    frequency_range: 'DC–6 GHz',
    description: 'SMA Male to SMA Male coaxial cable assembly on RG174/RG316. Custom lengths from 50mm to 5000mm. Used in test setups, PCB to chassis connections, and instrument connections.',
    specs: { 'Frequency': 'DC–6 GHz', 'Connectors': 'SMA Male both ends', 'Cable Options': 'RG174, RG316, RG58', 'Impedance': '50 Ω', 'VSWR': '< 1.3:1 @ 3 GHz', 'Length': 'Custom (50mm–5000mm)', 'Insertion Loss': '< 1.5 dB/m @ 1 GHz' },
    datasheet_url: null as string | null, image_url: '/product-images/rf/stand_1.png', created_at: '2024-01-01',
  },
  {
    id: 'ca-002', name: 'AT-CA-RPSMA-UFL-100-MH2', slug: 'at-ca-rpsma-ufl-100-mh2',
    category: 'rf-cable-assemblies', short_spec: 'RP-SMA to UFL/MHF2 Cable Assembly, 100mm',
    frequency_range: 'DC–6 GHz',
    description: 'RP-SMA Male to UFL/MHF2 pigtail cable assembly, 100mm length, 1.13mm coax. For connecting mini-PCIe WiFi/LTE cards to external antennas.',
    specs: { 'Frequency': 'DC–6 GHz', 'Connector A': 'RP-SMA Male', 'Connector B': 'UFL / MHF2', 'Cable': '1.13mm coax, 100mm', 'Impedance': '50 Ω', 'Insertion Loss': '< 0.5 dB @ 2.4 GHz' },
    datasheet_url: null as string | null, image_url: '/product-images/rf/pre_1.png', created_at: '2024-01-01',
  },
  {
    id: 'ca-003', name: 'AT-CA-RPSMA-UFL-140-XX', slug: 'at-ca-rpsma-ufl-140',
    category: 'rf-cable-assemblies', short_spec: 'RP-SMA to UFL Cable Assembly, 140mm',
    frequency_range: 'DC–6 GHz',
    description: 'RP-SMA Male to UFL pigtail, 140mm 1.13mm coax. Slightly longer than 100mm for boards with more space between card and connector panel.',
    specs: { 'Connector A': 'RP-SMA Male', 'Connector B': 'UFL (IPEX)', 'Cable': '1.13mm, 140mm', 'Impedance': '50 Ω', 'Frequency': 'DC–6 GHz' },
    datasheet_url: null as string | null, image_url: '/product-images/rf/pre_3.png', created_at: '2024-01-01',
  },
  {
    id: 'ca-004', name: 'AT-CA-BNCM-SMAM-1000', slug: 'at-ca-bncm-smam-1000',
    category: 'rf-cable-assemblies', short_spec: 'BNC Male to SMA Male Cable Assembly, 1000mm',
    frequency_range: 'DC–3 GHz',
    description: 'BNC Male to SMA Male cable assembly on RG174 coax, 1000mm length. For test bench connections between BNC instruments and SMA antenna/DUT ports.',
    specs: { 'Connector A': 'BNC Male', 'Connector B': 'SMA Male', 'Cable': 'RG174, 1000mm', 'Frequency': 'DC–3 GHz', 'Impedance': '50 Ω', 'VSWR': '< 1.3:1' },
    datasheet_url: null as string | null, image_url: '/product-images/rf/stand_2.png', created_at: '2024-01-01',
  },
  {
    id: 'ca-005', name: 'AT-CA-SMABH-UFL-100-XX', slug: 'at-ca-smabh-ufl-100',
    category: 'rf-cable-assemblies', short_spec: 'SMA Bulkhead to UFL Cable Assembly, 100mm',
    frequency_range: 'DC–6 GHz',
    description: 'SMA Female Bulkhead to UFL pigtail for panel-mount antenna connections to internal PCB modules. 100mm 1.13mm coax.',
    specs: { 'Connector A': 'SMA Female Bulkhead', 'Connector B': 'UFL', 'Cable': '1.13mm, 100mm', 'Impedance': '50 Ω', 'Frequency': 'DC–6 GHz', 'Mount': 'Panel / bulkhead' },
    datasheet_url: null as string | null, image_url: '/product-images/rf/stand_3.png', created_at: '2024-01-01',
  },
  {
    id: 'ca-006', name: 'AT-CA-UFL-UFL-40-1.13', slug: 'at-ca-ufl-ufl-40-113',
    category: 'rf-cable-assemblies', short_spec: 'UFL to UFL Cable Assembly, 40mm, 1.13mm Coax',
    frequency_range: 'DC–6 GHz',
    description: 'Ultra-short UFL to UFL jumper assembly, 40mm 1.13mm coax. For board-to-board RF connections inside compact embedded systems.',
    specs: { 'Connector A': 'UFL (IPEX)', 'Connector B': 'UFL (IPEX)', 'Cable': '1.13mm, 40mm', 'Impedance': '50 Ω', 'Frequency': 'DC–6 GHz', 'Insertion Loss': '< 0.2 dB @ 2.4 GHz' },
    datasheet_url: null as string | null, image_url: '/product-images/rf/mixed_1.png', created_at: '2024-01-01',
  },
  {
    id: 'ca-007', name: 'AT-CA-NM-SMAF-BH-XXX', slug: 'at-ca-nm-smaf-bh-custom',
    category: 'rf-cable-assemblies', short_spec: 'N Male to SMA Female Bulkhead Assembly, Custom Length',
    frequency_range: 'DC–6 GHz',
    description: 'N Male to SMA Female Bulkhead cable assembly for connecting outdoor N-type antenna cables to indoor SMA equipment. Custom lengths available.',
    specs: { 'Connector A': 'N Male', 'Connector B': 'SMA Female Bulkhead', 'Cable Options': 'RG174, RG316, LMR-195', 'Length': 'Custom', 'Frequency': 'DC–6 GHz', 'Impedance': '50 Ω' },
    datasheet_url: null as string | null, image_url: '/product-images/rf/mixed_2.png', created_at: '2024-01-01',
  },
  {
    id: 'ca-008', name: 'AT-CA-MMCXRT-SMA-ST-RG316', slug: 'at-ca-mmcxrt-sma-rg316',
    category: 'rf-cable-assemblies', short_spec: 'MMCX Right-Angle to SMA Straight Cable, RG316',
    frequency_range: 'DC–6 GHz',
    description: 'MMCX right-angle male to SMA straight male assembly on RG316 low-loss coax. For compact WiFi/cellular module connections in automotive and industrial devices.',
    specs: { 'Connector A': 'MMCX Male Right-Angle', 'Connector B': 'SMA Male Straight', 'Cable': 'RG316', 'Frequency': 'DC–6 GHz', 'Impedance': '50 Ω', 'VSWR': '< 1.3:1' },
    datasheet_url: null as string | null, image_url: '/product-images/rf/mixed_4.png', created_at: '2024-01-01',
  },

  // ── POWER AMPLIFIERS ────────────────────────────────────────────────────────
  {
    id: 'pa-001', name: 'AT-PA-1.0W', slug: 'at-pa-10w',
    category: 'power-amplifiers', short_spec: 'RF Power Amplifier Module, 1W',
    frequency_range: '800–2500 MHz',
    description: '1W (30 dBm) RF power amplifier module for cellular band signal boosters and test equipment. SMA connectors.',
    specs: { 'Frequency': '800–2500 MHz', 'Output Power': '30 dBm (1W)', 'Gain': '30 dB', 'IP3': '+40 dBm', 'Supply': '+5V / 800mA', 'Connector': 'SMA Female', 'Efficiency': '25%' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/pa_1.png', created_at: '2024-01-01',
  },
  {
    id: 'pa-002', name: 'AT-PA-2.0W', slug: 'at-pa-20w',
    category: 'power-amplifiers', short_spec: 'RF Power Amplifier Module, 2W',
    frequency_range: '800–2500 MHz',
    description: '2W (33 dBm) RF power amplifier for repeaters and signal boosters. Higher output stage with heat sink.',
    specs: { 'Frequency': '800–2500 MHz', 'Output Power': '33 dBm (2W)', 'Gain': '33 dB', 'Supply': '+5V / 1.5A', 'Connector': 'SMA Female', 'Efficiency': '28%', 'Cooling': 'Heat sink required' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/pa_2.png', created_at: '2024-01-01',
  },
  {
    id: 'pa-003', name: 'AT-PA-LNA', slug: 'at-pa-lna',
    category: 'power-amplifiers', short_spec: 'Low Noise Amplifier Module, 0.5–3 GHz',
    frequency_range: '500–3000 MHz',
    description: 'Ultra-low noise amplifier module for receiver front-ends. 20 dB gain with < 1 dB noise figure covering 500 MHz to 3 GHz.',
    specs: { 'Frequency': '500–3000 MHz', 'Gain': '20 dB', 'Noise Figure': '< 1 dB', 'IP3 (Input)': '+10 dBm', 'Supply': '+3.3 or +5V / 80mA', 'Connector': 'SMA Female', 'P1dB': '+18 dBm' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/pa_3.png', created_at: '2024-01-01',
  },

  // ── WAVEGUIDE COMPONENTS ────────────────────────────────────────────────────
  {
    id: 'wg-001', name: 'AT-ANT-HORN-WR90-N(F)', slug: 'at-ant-horn-wr90-nf',
    category: 'waveguide', short_spec: 'WR-90 Standard Gain Horn Antenna, N Female, 20 dB, 8.2–12.4 GHz',
    frequency_range: '8.2–12.4 GHz',
    description: 'WR-90 standard gain horn antenna for X-band (8.2–12.4 GHz). 20 dB gain, linear polarization, N Female connector. HPBW 18.9° both planes. Waveguide size WR-62.',
    specs: { 'Frequency': '8.2–12.4 GHz', 'Gain': '20 dB', 'Type': 'Standard Gain Horn', 'Connector': 'N Female', 'Input VSWR': '1.3:1', 'Polarization': 'Linear', 'HPBW H-plane': '18.9°', 'HPBW V-plane': '18.9°', 'Waveguide Size': 'WR-62', 'Dimensions': '171.5 × 73.1 × 53.6 mm', 'Impedance': '50 Ω' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/coup_1.png', created_at: '2024-01-01',
  },
  {
    id: 'wg-002', name: 'AT-ANT-HORN-WR90-N(F)-V2', slug: 'at-ant-horn-wr90-nf-v2',
    category: 'waveguide', short_spec: 'WR-90 Standard Gain Horn Antenna, N Female, 20 dB, 8.2–12.4 GHz',
    frequency_range: '8.2–12.4 GHz',
    description: 'WR-90 standard gain horn antenna, X-band. 20 dB gain, N Female, linear polarization. For radar, EMC testing, and microwave measurement.',
    specs: { 'Frequency': '8.2–12.4 GHz', 'Gain': '20 dB', 'Type': 'Standard Gain Horn', 'Connector': 'N Female', 'Input VSWR': '1.3:1', 'Polarization': 'Linear', 'HPBW': '18.9°', 'Waveguide Size': 'WR-62', 'Dimensions': '171.5 × 73.1 × 53.6 mm', 'Impedance': '50 Ω' },
    datasheet_url: null as string | null, image_url: '/product-images/micro/coup_2.png', created_at: '2024-01-01',
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

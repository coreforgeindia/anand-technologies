import { ImageResponse } from 'next/og'

export const alt = 'Anand Technologies RF and microwave engineering'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#0A0A0A',
          color: '#FFFFFF',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            color: '#00B8B8',
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 4,
            marginBottom: 28,
          }}
        >
          ANAND TECHNOLOGIES
        </div>
        <div style={{ display: 'flex', fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>
          RF &amp; Microwave
        </div>
        <div style={{ display: 'flex', fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>
          Engineering India
        </div>
        <div style={{ display: 'flex', color: '#B6C2C2', fontSize: 30, marginTop: 30 }}>
          Precision components for mission-critical systems
        </div>
      </div>
    ),
    size,
  )
}

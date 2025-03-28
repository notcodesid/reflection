import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'reflection';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation - same as the enhanced OpenGraph image
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 88,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div style={{ 
          display: 'flex', 
          alignItems: 'center',
          marginBottom: '40px'
        }}>
          <div
            style={{
              width: '36px', 
              height: '36px', 
              borderRadius: '50%', 
              border: '2px solid black',
              background: 'transparent', 
              marginRight: '10px',
            }}
          />
          <div
            style={{
              width: '36px', 
              height: '36px', 
              borderRadius: '50%', 
              background: 'black',
            }}
          />
          <span style={{ 
            marginLeft: '20px', 
            fontFamily: 'serif',
            fontWeight: '500',
          }}>
            reflection
          </span>
        </div>
        <div style={{
          fontSize: '40px',
          color: '#555',
          fontFamily: 'serif',
          maxWidth: '800px',
          textAlign: 'center',
          marginTop: '20px',
        }}>
          thoughts on life, tech, and growth.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 
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

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 88,
          background: 'hsl(60 30% 98%)', // Using the --background color from CSS
          color: 'hsl(144 13% 20%)', // Using the --foreground color from CSS
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
        }}>
          <div
            style={{
              width: '48px', 
              height: '48px', 
              borderRadius: '50%', 
              border: '2px solid hsl(144 13% 20%)', // Using the --primary color
              background: 'transparent', 
              marginRight: '10px',
            }}
          />
          <div
            style={{
              width: '48px', 
              height: '48px', 
              borderRadius: '50%', 
              background: 'hsl(144 13% 20%)', // Using the --primary color
            }}
          />
          <span style={{ 
            marginLeft: '20px', 
            fontFamily: 'serif',
            fontWeight: '500',
            fontSize: '72px',
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
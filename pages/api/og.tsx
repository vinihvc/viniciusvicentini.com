import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default function Og() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 72,
          background: 'black',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage:
            'linear-gradient(to bottom right, rgba(68, 3, 69, 0.1), rgba(201, 44, 96, 0.1), rgba(72, 104, 219, 0.1))',
        }}
      >
        Vinicius Vicentini
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  )
}

import Image from 'next/image'
import React from 'react'

export const NoiseBg = () => {
	return (
		<>
			<Image
				src="/images/gradient-bg.png"
				alt="Custom Background"
				className="absolute -z-[1] inset-x-0 top-10 sm:top-0 mx-auto opacity-30"
				width={1000}
				height={670}
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			/>

			{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
			<svg className="fixed inset-0 min-h-screen size-full isolate opacity-15 -z-[1] pointer-events-none">
				<filter id="noise">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.80"
						numOctaves="4"
						stitchTiles="stitch"
					/>
				</filter>
				<rect width="100%" height="100%" filter="url(#noise)" />
			</svg>
		</>
	)
}

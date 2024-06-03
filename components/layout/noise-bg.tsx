import Image from 'next/image'
import React from 'react'

export const NoiseBg = () => {
	return (
		<>
			<Image
				src="/images/gradient-bg.png"
				alt="Custom Background"
				className="absolute -z-[1] inset-x-0 top-0 mx-auto opacity-30"
				width={1000}
				height={670}
			/>

			<svg
				className="fixed -z-[1] w-full h-[calc(200px_+_100vh)] opacity-25 translate-y-0 left-0 top-0 contrast-[30%] brightness-[50%]"
				aria-hidden
			>
				<title>Custom Background</title>
				<filter id="noise">
					<feTurbulence
						type="fractalNoise"
						baseFrequency=".8"
						numOctaves="4"
						stitchTiles="stitch"
					/>
					<feColorMatrix type="saturate" values="0" />
				</filter>
				<rect width="100%" height="100%" filter="url(#noise)" />
			</svg>
		</>
	)
}

import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export const GET = async (request: NextRequest) => {
	const { searchParams } = request.nextUrl

	const title = searchParams.get('title')
	const fontSize = Number(searchParams.get('fontSize')) || 60

	const fontData = await fetch(
		new URL('../../../assets/fonts/Outfit-SemiBold.ttf', import.meta.url),
	).then((res) => res.arrayBuffer())

	return new ImageResponse(
		<div
			tw="h-full w-full flex flex-col items-center justify-center text-white"
			style={{
				backgroundImage: 'url(https://www.viniciusvicentini.com/images/og.jpg)',
			}}
		>
			<div tw="flex flex-col w-full h-full justify-between p-20">
				<img
					tw="rounded-full drop-shadow-md"
					src="https://github.com/vinihvc.png"
					alt=""
					width={260}
					height={260}
					style={{
						filter: 'grayscale(100%)',
					}}
				/>

				<div tw="flex flex-col">
					<h2
						tw="flex flex-col tracking-tight leading-tight font-semibold text-left"
						style={{
							fontSize: `${fontSize}px`,
						}}
					>
						{title}
					</h2>

					<p tw="text-neutral-400 text-3xl">viniciusvicentini.com</p>
				</div>
			</div>
		</div>,
		{
			width: 1600,
			height: 836,
			fonts: [
				{
					name: 'Outfit',
					data: fontData,
					style: 'normal',
				},
			],
		},
	)
}

import { ImageResponse } from '@vercel/og'
import type { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic' // defaults to auto

export const GET = async (request: NextRequest) => {
	const { searchParams } = request.nextUrl

	const title = searchParams.has('title')
		? searchParams.get('title')?.slice(0, 100)
		: 'My default title'

	return new ImageResponse(
		<div
			style={{
				backgroundImage:
					"url('https://www.viniciusvicentini.com/images/og.jpg') no-repeat center center",
			}}
			tw="h-full w-full flex items-start justify-start"
		>
			<div tw="flex items-start justify-start h-full">
				<div tw="flex flex-col justify-between w-full h-full p-20">
					oi
					<h1 tw="text-[60px] text-white font-bold text-left">{title}</h1>
				</div>
			</div>
		</div>,
		{
			width: 1200,
			height: 600,
		},
	)
}

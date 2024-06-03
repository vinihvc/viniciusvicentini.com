import type React from 'react'

import { cn } from '@/utils/cn'
import { tv } from 'tailwind-variants'

const GLYPHS =
	'ラドクリフマラソンわたしワタシんょンョたばこタバコとうきょうトウキョウ0123456789±!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZ🌮'

const glyphButton = tv({
	base: [
		'relative',
		'px-8 h-14',
		'text-red-500',
		'border-0',
		'bg-transparent',
		'uppercase',
		'font-inherit cursor-pointer',
		'after:content-[""] after:absolute after:[background:hsl(0_0%_100%)] after:opacity-[calc(var(--intent,0)_*_0.0875)] after:transition-opacity after:inset-0',
		'[transition:transform_0.5s_1s,scale_0.5s_3s,opacity_0s_3s]',
		'hover:[--intent:1] focus-visible:[--intent:1]',
	],
})

interface GlyphButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * The text to display
	 */
	text: string
	/**
	 * The speed of the animation
	 */
	speed?: number
}

export const GlyphButton = (props: GlyphButtonProps) => {
	const { text, speed = 0.25, type = 'button', className, ...rest } = props

	return (
		<>
			<style>
				{`
          button > span:not(.sr-only)::after {
            content: attr(data-char);
            position: absolute;
            display: inline-block;
            inset: 0;
            color: canvasText;
          }

          button:is(:hover, :focus-visible) > span:not(.sr-only)::after {
            animation: flash calc(var(--speed, 0.25) * 1s) calc(var(--index, 0) * 0.05s) steps(1, end);
          }

          @keyframes flash {
            0%, 20%   { content: '_'; }
            40%  { content: var(--char-1); }
            60%  { content: var(--char-2); }
            80%  { content: var(--char-3); }
          }
      `}
			</style>

			<button
				type={type}
				className={cn(glyphButton({ className }))}
				style={{ '--speed': speed } as React.CSSProperties}
				{...rest}
			>
				{text.split('').map((char, index) => (
					<span
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						className="relative text-transparent"
						data-char={char}
						style={
							{
								'--index': index,
								'--char-1': `"${
									GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
								}"`,
								'--char-2': `"${
									GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
								}"`,
								'--char-3': `"${
									GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
								}"`,
							} as React.CSSProperties
						}
					>
						{char}
					</span>
				))}

				<span className="sr-only">{text}</span>
			</button>
		</>
	)
}

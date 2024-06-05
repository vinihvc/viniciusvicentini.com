import { getBase64 } from '@/utils/base-64'
import Image, { type ImageProps } from 'next/image'

interface DynamicImageProps extends ImageProps {
	/**
	 * The type of placeholder to be used
	 *
	 * @default 'blur'
	 */
	type?: 'blur' | 'color'
}

export const DynamicImage = async (props: DynamicImageProps) => {
	const { type = 'blur', src, ...rest } = props

	const { base64, color } = await getBase64(src as string)

	return (
		<Image
			src={src}
			{...(type === 'blur' && { placeholder: 'blur', blurDataURL: base64 })}
			{...(type === 'color' && { style: { backgroundColor: color.hex } })}
			{...rest}
		/>
	)
}

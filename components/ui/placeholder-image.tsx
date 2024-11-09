import fs from 'node:fs/promises'
import Image, { type ImageProps } from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

export const getBase64 = async (path: string) => {
  const buffer = await fs.readFile(`./public${path}`)

  const { base64, color } = await getPlaiceholder(buffer)

  return { base64, color }
}

interface PlaceholderImageProps extends ImageProps {
  /**
   * The type of placeholder to be used
   *
   * @default 'blur'
   */
  type?: 'blur' | 'color'
}

export const PlaceholderImage = async (props: PlaceholderImageProps) => {
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

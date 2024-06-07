import fs from 'node:fs/promises'
import { getPlaiceholder } from 'plaiceholder'

export const getBase64 = async (path: string) => {
	const buffer = await fs.readFile(`./public${path}`)

	const { base64, color } = await getPlaiceholder(buffer)

	return { base64, color }
}

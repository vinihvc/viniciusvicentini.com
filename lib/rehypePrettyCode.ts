import type { Options } from 'rehype-pretty-code'

export const rehypePrettyCodeOptions: Partial<Options> = {
	theme: 'one-dark-pro',
	tokensMap: {
		// VScode command palette: Inspect Editor Tokens and Scopes
		// https://github.com/Binaryify/OneDark-Pro/blob/47c66a2f2d3e5c85490e1aaad96f5fab3293b091/themes/OneDark-Pro.json
		fn: 'entity.name.function',
		objKey: 'meta.object-literal.key',
	},
	onVisitLine(node) {
		// Prevent lines from collapsing in `display: grid` mode, and
		// allow empty lines to be copy/pasted
		if (node.children.length === 0) {
			node.children = [{ type: 'text', value: ' ' }]
		}
		node.properties.className = ['']
	},
	onVisitHighlightedLine(node) {
		node.properties.className.push(
			'!border-l-blue-700/80 bg-blue-800/[15%] before:!text-blue-200/80',
		)
	},
}

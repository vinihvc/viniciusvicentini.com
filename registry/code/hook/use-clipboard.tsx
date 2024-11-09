import React from 'react'

export const useClipboard = (value: string, options?: { timeout?: number }) => {
  const { timeout = 2000 } = options ?? {}

  const [code, setCode] = React.useState(value)

  const [isCopied, setIsCopied] = React.useState(false)

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setIsCopied(true)
    } catch (error) {
      console.error('Error copying to clipboard', error)
    } finally {
      setTimeout(() => {
        setIsCopied(false)
      }, timeout)
    }
  }

  return { isCopied, setCode, onCopy }
}

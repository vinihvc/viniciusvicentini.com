import React from 'react'

interface Options {
  timeout?: number
}

export const useClipboard = (initValue: string, options?: Options) => {
  const { timeout = 2000 } = options ?? {}

  const [value, setValue] = React.useState(initValue)

  const [isCopied, setIsCopied] = React.useState(false)

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setIsCopied(true)
    } catch (error) {
      console.error('Error copying to clipboard', error)
    } finally {
      setTimeout(() => {
        setIsCopied(false)
      }, timeout)
    }
  }

  return { isCopied, setValue, onCopy }
}

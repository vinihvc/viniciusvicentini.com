'use client'

import { Button } from '@/registry/code/component/button'
import { useClipboard } from '@/registry/code/hook/use-clipboard'

const UseClipboardDemo = () => {
  const { isCopied, onCopy } = useClipboard('Hello, world!')

  return <Button onClick={onCopy}>{isCopied ? 'Copied' : 'Copy'}</Button>
}

export default UseClipboardDemo

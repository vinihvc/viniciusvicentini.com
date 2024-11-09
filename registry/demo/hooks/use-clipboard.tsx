'use client'

import { Button } from '@/registry/code/component/button'
import { useClipboard } from '@/registry/code/hook/use-clipboard'

const CopyDemo = () => {
  const { isCopied, onCopy } = useClipboard('copy me')

  return <Button onClick={onCopy}>{isCopied ? 'Copied' : 'Copy'}</Button>
}

export default CopyDemo

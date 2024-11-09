'use client'

import { useBreakpoint } from '@/registry/code/hook/use-breakpoint'

const UseBreakpointDemo = () => {
  const { isSm, isMd, isLg, isXl, is2Xl } = useBreakpoint()

  return (
    <>
      <p>isSm: {isSm ? 'true' : 'false'}</p>
      <p>isMd: {isMd ? 'true' : 'false'}</p>
      <p>isLg: {isLg ? 'true' : 'false'}</p>
      <p>isXl: {isXl ? 'true' : 'false'}</p>
      <p>is2Xl: {is2Xl ? 'true' : 'false'}</p>
    </>
  )
}

export default UseBreakpointDemo

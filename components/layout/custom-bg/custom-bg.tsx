import React from 'react'

export const CustomBg = () => {
  return (
    <div
      className="fixed inset-0 z-[-1] bg-background bg-[length:2rem_2rem]"
      style={{
        backgroundImage:
          'linear-gradient(to right,#111 1px,#0000 1px),linear-gradient(to bottom,#111 1px,#0000 1px)',
        boxShadow: '0px 0px 400px 100px rgba(0,0,0,0.5) inset',
      }}
    />
  )
}

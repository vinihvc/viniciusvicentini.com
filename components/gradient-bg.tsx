export const GradientBg = () => {
  return (
    <div className="absolute inset-0 z-[-1] min-h-screen w-full">
      <div
        className="fixed top-0 h-screen w-full"
        style={{
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s',
          filter: 'blur(100px)',
          backgroundImage:
            'linear-gradient(to bottom right, rgba(68, 3, 69, 0.13), rgba(201, 44, 96 ,0.13), rgba(72, 104, 219 ,0.13)',
        }}
      />
    </div>
  )
}

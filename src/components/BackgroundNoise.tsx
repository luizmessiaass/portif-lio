export function BackgroundNoise() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-[2] hidden md:block"
        style={{
          backgroundImage:
            "radial-gradient(rgba(17, 17, 17, 0.18) 0.6px, transparent 0.6px)",
          backgroundSize: "4px 4px",
          opacity: 0.035,
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 z-[-1]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0) 50%)",
        }}
      />
    </>
  );
}

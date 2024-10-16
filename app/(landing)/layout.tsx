const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full bg-[#111827] overflow-auto">
      <div className="bg-dark sm:px-[1.5rem] xl:px-[2.5rem] " data-theme="dark">
        {children}
      </div>
    </main>
  );
};

export default LandingLayout;

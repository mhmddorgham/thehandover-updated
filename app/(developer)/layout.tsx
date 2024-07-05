import DevHeader from "@/components/headers/dev-header/DevHeader";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col w-full ">
      <DevHeader />
      <main className="flex-1 bg-primary-50 bg-dotted-pattern ">
        {children}
      </main>
    </div>
  );
};

export default Layout;

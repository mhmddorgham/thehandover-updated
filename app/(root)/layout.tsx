import Header from "@/components/headers/public-header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col w-full ">
      <Header />
      <main className="flex-1 bg-primary-50 bg-dotted-pattern ">
        {children}
      </main>
    </div>
  );
};

export default Layout;

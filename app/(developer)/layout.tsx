import DevSidebar from "@/components/developer/shared/dev-sidebar";
import DevHeader from "@/components/headers/dev-header/DevHeader";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen flex-col w-full container ">
      <DevHeader />
      <section className="w-full h-full flex-1 grid md:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr] ">
        <DevSidebar />
        <main className="w-full h-full flex flex-col">
          {children}
          {/* <PromptAI /> */}
        </main>
      </section>
    </main>
  );
};

export default Layout;

import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-full flex items-start justify-center overflow-hidden">
      <div className="flex w-full max-w-[1600px] h-screen py-12 pl-8 pr-8 gap-8 border overflow-hidden">
          <Sidebar />

          <main className="flex-1 rounded-2xl border shadow-lg p-6 h-full overflow-auto">
            {children}
          </main>
      </div>
    </div>
  );
}

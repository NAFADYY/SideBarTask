import './globals.css';
import Sidebar         from './components/Sidebar';
import TabletNav       from './components/TabletNav';
import MobileBottomNav from './components/MobileBottomNav';

export const metadata = { title: 'SideBar App' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-100">
        {/* Desktop Sidebar */}
        <Sidebar />

        <div className="flex-1 flex flex-col lg:pr-8"> 
          
          {/* Tablet top nav */}
          <TabletNav className="sticky top-0 z-20" />

          {/* Main content */}
          <main className="flex-1 overflow-auto flex justify-center  ">
            {/* حاوية المحتوى نفسها */}
            <section className="w-full  rounded-xl shadow-lg
                                 p-6 md:p-10 lg:p-12">
              {children}
            </section>
          </main>
        </div>

        {/* Mobile bottom nav */}
        <MobileBottomNav />
      </body>
    </html>
  );
}

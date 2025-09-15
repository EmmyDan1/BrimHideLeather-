import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MiniCart from "../components/MiniCart";
import Toast from "../components/ui/Toast";
import { useUIStore } from "../store/useUIStore";

export default function RootLayout() {
  const location = useLocation();
  const { toast } = useUIStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHomePage = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      <Header transparent={isHomePage} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <MiniCart />
      {toast.message && <Toast />}
    </div>
  );
}

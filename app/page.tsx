import Image from "next/image";
import Header from "@/components/Header";
import CenterContent from "@/components/CenterContent";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <main>
      <Header />
      <CenterContent />
      <Menu />
      <Footer />
      </main>
  );
}

import TopArea from "@/components/atoms/TopArea";
import Footer from "@/components/atoms/footers/Footer";
import FooterLogo from "@/components/atoms/footers/FooterLogo";
import Header from "@/components/atoms/headers/Header.client";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>ホームページ</title>
        <meta name="description" content="Next.js" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </Head>
      <Header />
      <main>
        <TopArea />
        <div className="w-full h-[40px] md:h-[61px] relative"></div>
        <section className="main-content">
          <div className="flex">
            <div>
              <h2 className="text-black font-semibold text-3xl">SCHEDULE</h2>
            </div>
            <div className="w-[22.23px] h-3 pb-[10px] relative">
              <img src="/images/arrow.jpg" alt="" className="" />
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm text-black">スケジュールがありません。</p>
          </div>
        </section>
        <section className=""></section>
        <section className=""></section>
        <section className=""></section>
        <section className=""></section>
        <section className=""></section>
      </main>
      <Footer />
      <FooterLogo />
    </div>
  );
}

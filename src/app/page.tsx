import Footer from "@/components/atoms/layout/Footer";
import FooterLogo from "@/components/atoms/layout/FooterLogo";
import Header from "@/components/atoms/layout/Header.client";
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
        <div>
          <section className=""></section>
          <section className=""></section>
          <section className=""></section>
          <section className=""></section>
          <section className=""></section>
          <section className=""></section>
        </div>
      </main>
      <Footer />
      <FooterLogo />
    </div>
  );
}

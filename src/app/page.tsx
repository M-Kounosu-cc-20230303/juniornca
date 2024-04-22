import Header from "@/components/atoms/layout/Header";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </Head>
      <Header />
      <main>
        <div>
          <section></section>
          <section></section>
          <section></section>
          <section></section>
          <section></section>
          <section></section>
        </div>
      </main>
    </div>
  );
}

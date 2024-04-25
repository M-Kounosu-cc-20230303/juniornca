import Information from "@/components/atoms/layout/Information";
import TopArea from "@/components/atoms/layout/TopArea";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ホームページ</title>
        <meta name="description" content="Next.js" />
      </Head>
      <main className="bg-white">
        <TopArea />
        <Information />
      </main>
    </>
  );
}

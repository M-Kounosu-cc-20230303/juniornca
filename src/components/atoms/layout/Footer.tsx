import React from "react";
import Link from "next/link";

//ms:

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="w-full pt-11 pb-6 bg-bace2 text-white md:pb-0">
        <div className="mx-auto w-[300px] md:w-[768px]">
          <div className="leading-[27px] text-left ">
            NCAジュニアアスリートクラブ
          </div>
          <p className="text-left text-[12px] py-[1.5rem]">
            ＜主催＞
            <br />
            一般社団法人日本コンディショニング協会（NCA）
          </p>
        </div>
        <div className="mx-auto w-[300px] md:w-[768px] md:flex md:justify-between">
          <div className="md:w-[350px]">
            <div className="flex flex-col">
              <iframe
                width="350"
                height="200"
                src="http://maps.google.co.jp/maps?&output=embed&q=東京都世田谷区太子堂4-4-1 来るビル4F&z=18"
              ></iframe>
              <div className="my-[1.5rem]">
                <p className="inline-block text-left">
                  〒154-0004
                  <br />
                </p>
                <p className="inline-block text-left">
                  東京都世田谷区太子堂4-4-1 来るビル4F
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex">
                  <p className="ml-1">03-5779-6814</p>
                </div>
                <div className="flex">
                  <p className="ml-1">desk@e-nca.jp</p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between my-[2rem] md:mb-0">
              <Link
                href="/"
                
              >
                <div className="mb-0 hover:opacity-70">
                  <img
                    src="/images/instagram.png"
                    alt="instagram"
                    className="w-full"
                  />
                </div>
              </Link>
              <Link href="/">
                <div className="mb-0 hover:opacity-70">
                  <img
                    src="/images/facebook.png"
                    alt="facebook"
                    className="w-full"
                  />
                </div>
              </Link>
              <Link href="/">
                <div className="mb-0 hover:opacity-70">
                  <img src="/images/line.png" alt="line" className="w-full" />
                </div>
              </Link>
              <Link
                href="/"
              >
                <div className="mb-0 hover:opacity-70">
                  <img
                    src="/images/youtube.png"
                    alt="youtube"
                    className="w-full"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:h-full md:justify-between md:gap-7 banner">
            <div className="flex flex-col items-center gap-4">
              <Link href="/">
                <img src="/images/NCA.jpg" alt="logo" className="footer-logo" />
              </Link>
              <Link href="/">
                <img src="/images/Nm.jpg" alt="logo" className="footer-logo" />
              </Link>
              <Link href="/">
                <img
                  src="/images/Shop.jpg"
                  alt="logo"
                  className="footer-logo"
                />
              </Link>
              <Link href="/">
                <img
                  src="/images/YA_Official.jpg"
                  alt="logo"
                  className="footer-logo"
                />
              </Link>
              <Link href="/">
                <img
                  src="/images/HEARTH.jpg"
                  alt="logo"
                  className="footer-logo"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-[12px] md:text-[14px] flex flex-col gap-2 text-center py-8 md:flex-row md:gap-4 md:justify-center">
          <Link href="/" className="hover:underline">
            サイトマップ
          </Link>
          <div className="hidden md:inline-block">|</div>
          <Link href="/" className="hover:underline">
            会員規約
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

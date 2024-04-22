import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black absolute bottom-0 w-full pl-[350px]">
      <div className="pt-11 pb-6 bg-base2 text-white">
        <div>
          <div className="text-center mb-4">
            <h3 className="text-[20px]">NCAジュニアアスリートクラブ</h3>
            <div>
              ＜主催＞
              <br />
              一般社団法人日本コンディショニング協会（NCA）
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center w-full">
          <div className="flex flex-col w-full md:w-auto mr-14">
            <div className="">
              <iframe
                width="350"
                height="200"
                src="http://maps.google.co.jp/maps?&output=embed&q=東京都世田谷区太子堂4-4-1 来るビル4F&z=18"
              ></iframe>
              <div className="my-[1.5rem]">
                <p className="md:inline-block text-left">〒154-0004</p>
                <br />
                <p className="md:inline-block text-left">
                  東京都世田谷区太子堂4-4-1 来るビル4F
                </p>
              </div>
              <div className="my-[1.5rem]">
                <p className="md:inline-block text-left">03-5779-6814</p>
                <br />
                <p className="md:inline-block text-left">@e-nca.jp</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="mb-5 hover:opacity-70">
                  <Link href="/">
                    <img src="/images/instagram.png" alt="logo" />
                  </Link>
                </div>
                <div className="mb-5 hover:opacity-70">
                  <Link href="/">
                    <img src="/images/facebook.png" alt="logo" />
                  </Link>
                </div>
                <div className="mb-5 hover:opacity-70">
                  <Link href="/">
                    <img src="/images/line.png" alt="logo" />
                  </Link>
                </div>
                <div className="mb-5 hover:opacity-70">
                  <Link href="/">
                    <img src="/images/youtube.png" alt="logo" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Link href="/">
              <img src="/images/NCA.jpg" alt="logo" className="footer-logo" />
            </Link>
            <Link href="/">
              <img src="/images/Nm.jpg" alt="logo" className="footer-logo" />
            </Link>
            <Link href="/">
              <img src="/images/Shop.jpg" alt="logo" className="footer-logo" />
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
    </footer>
  );
};

export default Footer;

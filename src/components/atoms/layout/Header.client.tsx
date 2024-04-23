//PC・SPで見る
//そもそも実装に方法が違う
//コンポーネント分けたほうがいいです

'use client'

import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

type MenuItem = {
  href: string;
  name: string;
};
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const menuItems: MenuItem[] = [
    { name: "Top", href: "/" },
    { name: "NCAジュニアストリートクラブとは", href: "/" },
    { name: "コンディショニングとは", href: "/" },
    { name: "開発者・有吉与志恵について", href: "/" },
    { name: "実践しているアスリートたち", href: "/" },
    { name: "サービス内容", href: "/" },
    { name: "料金", href: "/" },
    { name: "利用者の声", href: "/" },
    { name: "オフィシャルサポーター", href: "/" },
    { name: "NEWS", href: "/" },
    { name: "よくある質問・お問い合わせ", href: "/" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed top-0 left-0 z-50 bg-white ${isMobile ? 'h-screen' : 'h-auto md:h-full'} w-full md:w-[350px] shadow border-b-8 border-red-500 px-6 py-6`}>
      <div className="flex flex-col items-center w-full mb-10">
        <div className="w-[150px] h-27 justify-center items-center flex">
          <Link href="/">
            <img src="/images/logo.jpg" alt="logo" />
          </Link>
          {isMobile && (
            <button onClick={toggleMenu} className="material-symbols-outlined">
              menu
            </button>
          )}
        </div>
        {isMobile ? (
          isOpen && (
            <div className="flex flex-col items-center w-full">
              {menuItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  <p className="text-zinc-950 text-center block py-2 border-t border-b border-red-500 w-full">
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
          )
        ) : (
          menuItems.map((item, index) => (
            <div key={index} className={`text-[15px] ${index === 0 ? "border-t" : ""} border-b border-red-500 text-center w-full`}>
              <Link href={item.href}>
                <p className="text-zinc-950 block py-2">
                  {item.name}
                </p>
              </Link>
            </div>
          ))
        )}
        <div className="my-5"></div>
        <div className=" text-sm border-t border-b self-stretch text-center bg-gradient-to-r from-red-500 via-red-500/50 to-red-500/10 py-2.5">
          <span className="material-symbols-outlined">edit_note</span>{" "}
          <Link className="text-white text-[20px]" href="/">
            新規会員登録
          </Link>
        </div>
        <div className="my-1"></div>
        <div className="text-sm border-t border-b self-stretch text-center bg-gradient-to-r from-red-500 via-red-500/50 to-red-500/10 py-2.5">
          <Link className="text-white text-[20px]" href="/">
            ログイン
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

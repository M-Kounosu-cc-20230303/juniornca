"use client";

import { useState } from "react";
import Link from "next/link";
import MenuItem from "./MenuItem";
import MobileHeader from "./MobileHeader";

type MenuItem = {
  href: string;
  name: string;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

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

  return (
    <>
      <div className="md:hidden">
        <MobileHeader />
      </div>
      <header className="hidden md:block fixed top-0 left-0 z-50 bg-white h-full md:w-[350px] shadow-md border-b-8 border-red-500 px-6 py-6">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <div className="flex flex-col items-center w-full mb-10">
          <div className="w-[150px] h-27 justify-center items-center flex">
            <Link href="/">
              <img src="/images/logo.jpg" alt="logo" />
            </Link>
          </div>
        </div>
        <div
          className={`flex-col items-center w-full md:block ${
            isOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <div className="w-full border-t" style={{ borderColor: "red" }}>
            {menuItems.map((item, index) => (
              <MenuItem key={index} href={item.href} name={item.name} />
            ))}
          </div>
          <div className="flex flex-col gap-3.5 my-6"> </div>
          <div className=" text-sm border-t border-b self-stretch text-center flex items-center bg-gradient-to-r from-red-500 via-red-500/50 to-red-500/10 py-2.5 gap-2">
            <span className="material-symbols-outlined items-center ml-2 text-white">
              edit_note
            </span>
            <Link className="text-white text-[20px]" href="/">
              新規会員登録
            </Link>
          </div>
          <div className="my-1"></div>
          <div className="text-sm border-t border-b self-stretch text-center flex items-center bg-gradient-to-r from-red-500 via-red-500/50 to-red-500/10 py-2.5 gap-2">
            <span className="material-symbols-outlined items-center ml-2 text-white">logout</span>
            <Link className="text-white text-[20px]" href="/">
              ログイン
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

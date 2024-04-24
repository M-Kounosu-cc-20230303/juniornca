import Link from "next/link";
import { useState } from "react";
import MenuItem from "./MenuItem";

type MenuItem = {
  href: string;
  name: string;
};

const MobileHeader = () => {
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
    <div className="fixed top-0 left-0 z-50 bg-white w-full  shadow-md  px-3 py-3 scrollbar-hidden overflow-y-scroll shadow-md">
      <div className="flex justify-between items-center w-full">
        <Link href="/">
          <p>
            <img
              src="/images/logo.jpg"
              alt="ロゴ"
              className="w-[100px] h-[45px]"
            />
          </p>
        </Link>
        <button onClick={toggleMenu}>
          <img src="/images/hamburger-icon.svg" alt="メニュー" />
        </button>
      </div>
      <div className={`w-full ${isOpen ? "flex" : "hidden"} flex-col`}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} href={item.href} name={item.name} />
        ))}
        <div className="flex flex-col gap-3.5 mt-5">
          <div className="text-sm border-t border-b self-stretch text-center bg-gradient-to-r from-red-500 via-red-500/50 to-red-500/10 py-2.5">
            <Link href="/" className="text-white text-[20px]">
              新規会員登録
            </Link>
          </div>
          <div className="text-sm border-t border-b self-stretch text-center bg-gradient-to-r from-red-500 via-red-500/50 to-red-500/10 py-2.5">
            <Link href="/" className="text-white text-[20px]">
              ログイン
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;

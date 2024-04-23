//0422 ハンバーガーメニューだけ


import Link from "next/link";

type MenuItem = {
  href: string;
  name: string;
};

const Header = () => {
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
    // <header className="w-full md:h-full md:w-[350px] z-2 min-w-[350px] fixed z-[99] w-[350px] h-screen py-6 px-5 bg-white border-b-8 border-red-500 flex flex-col justify-start items-center shadow-right relative fixed top-0">
    <header className="fixed top-0 left-0 w-full z-50 bg-white h-screen shadow border-b-8 border-red-500 md:h-full md:w-[350px]">
      <div className="flex flex-col items-center w-full mb-10 inline-flex">
        <div className="w-[150px] h-27 justify-center items-center flex">
          <Link href="/">
            <img src="/images/logo.jpg" alt="logo" />
          </Link>
        </div>
        <div className="my-5"></div>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`text-[15px] margin-div ${
              index === 0 ? "border-t" : ""
            } border-b border-red-500 border-primary self-stretch text-center`}
          >
            <Link className="text-zinc-950 grow" href={item.href}>
              {item.name}
            </Link>
          </div>
        ))}
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

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
    <header className="w-[200px] h-full py-7 bg-white border-b-8 border-primary flex flex-col justify-start items-center shadow-right">
      <div className="flex flex-col items-center w-full mb-10 menu inline-flex">
        <div className="w-[95px] h-12 justify-center items-center flex">
          <Link href="/">
            <img src="/images/logo.jpg" alt="" />
          </Link>
        </div>
        <div className="my-2"></div>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`custom-font-size py-1 ${
              index === 0 ? "border-t" : ""
            } border-b border-primary self-stretch text-center`}
          >
            <Link className="text-zinc-950 grow" href={item.href}>
              {item.name}
            </Link>
          </div>
        ))}
         <div className="my-3"></div>
        <div className="text-sm border-t border-b self-stretch text-center bg-gradient-to-r from-red-500 via-red-500/50 to-red-500/10">
          <Link className="text-white" href="/">
            新規会員登録
          </Link>
        </div>
        <div className="my-1"></div>
        <div className="text-sm border-t border-b self-stretch text-center bg-gradient-to-r from-red-500 via-red-500/50 to-red-500/10">
          <Link className="text-white" href="/">
            ログイン
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

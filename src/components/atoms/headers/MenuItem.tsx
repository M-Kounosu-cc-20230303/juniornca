import Link from "next/link";

type MenuItemProps = {
    href: string;
    name: string;
  };
  
  const MenuItem: React.FC<MenuItemProps> = ({ href, name }) => (
    <Link href="">
      <p style={{ color: 'black', borderColor: 'red' }} className="block py-2 border-b border-primary text-center text-primary hover:bg-gray-100">
        {name}
      </p>
    </Link>
  );
  
  export default MenuItem;
import { Link } from "@remix-run/react";
import { FC } from "react";
import { mainMenuLinks } from "~/shared/navigation";

type HeaderProps = {
  title?: string;
};
const styles: string =
  "p-5 bg-gradient-to-r from-purple-100 to-blue-100 border-b border-gray-800 z-10";
const defaultTitle: string = "Курсы программирования для начинающих!";

const menu = (
  <ul className="list-none flex gap-6">
    {mainMenuLinks.map((link) => (
      <li key={link.path}>
        <Link
          title={link.title}
          to={link.path}
          className="text-gray-800 text-lg hover:underline"
        >
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
);

export const Header: FC<HeaderProps> = ({ title = defaultTitle }) => {
  return (
    <header className={styles}>
      <nav className="flex justify-between">
        <Link title={title} to="/" className="hover:underline">
          <h2>{title}</h2>
        </Link>
        {menu}
      </nav>
    </header>
  );
};

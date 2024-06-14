//app/widgets/shared/header/header.tsx

import { Link, useLocation } from "@remix-run/react";
import { FC } from "react";
import { PostData } from "~/lib/type";
import { mainMenuLinks } from "~/shared/navigation";
import { websiteTitle } from "~/widgets/shared/websiteconfig/config";

type HeaderProps = {
  posts?: PostData[];
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

export const Header: FC<HeaderProps> = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log({ currentPath });
  const segments = currentPath.split("/");
  const lastSegment = segments.pop();
  const viewTitle = websiteTitle;

  // const post = posts.find((e) => e.attributes.slug === lastSegment);
  // console.log({ post });
  // if (post) {
  //   viewTitle = post.attributes.title;
  // }

  return (
    <header className={styles}>
      <nav className="flex justify-between">
        <Link title={viewTitle} to="/" className="hover:underline">
          <h2>{viewTitle}</h2>
        </Link>
        {lastSegment}
        {menu}
      </nav>
    </header>
  );
};

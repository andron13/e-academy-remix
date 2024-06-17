export type LinksType = {
  name: string;
  path: string;
  title: string;
  icon?: string;
  newWindow?: boolean;
  draft?: boolean;
};

export const mainMenuLinks: LinksType[] = [
  {
    name: "Курсы",
    path: "/course",
    title: "Курсы",
    icon: "",
    newWindow: false,
    draft: false,
  },
  {
    name: "Новости",
    path: "/news",
    title: "Новости",
    icon: "",
    newWindow: false,
    draft: true,
  },
  {
    name: "Блог",
    path: "/blog",
    title: "Блог",
    icon: "",
    newWindow: false,
    draft: true,
  },
  {
    name: "Статьи",
    path: "/articles",
    title: "",
    icon: "",
    newWindow: false,
    draft: false,
  },
  {
    name: "Youtube",
    path: "https://www.youtube.com/@evening-academy",
    title: "Youtube",
    icon: "",
    newWindow: true,
    draft: false,
  },
  {
    name: "Tg-канал",
    path: "https://t.me/onkelandrew",
    title: "Tg-канал",
    icon: "",
    newWindow: true,
    draft: false,
  },
];

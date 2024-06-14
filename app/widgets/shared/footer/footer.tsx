import { FC } from "react";
import { Link } from "react-router-dom";

export const Footer: FC = () => {
  return (
    <footer className="bg-purple-100 p-5 border-t border-gray-800 flex justify-between items-center">
      <div className="space-x-4 flex">
        <Link className="hover:underline" to="/about-us">
          О нас
        </Link>
        <Link className="hover:underline" to="/services">
          Наши услуги
        </Link>
        <Link className="hover:underline" to="/contact">
          Контакты
        </Link>
      </div>
      <div className="text-center">
        <p className="m-0">
          &copy; {new Date().getFullYear()} - e-Academy| Изготовлено с ❤️ для
          интернет-сообщества
        </p>
        <p className="m-0">
          Мы верим в силу общения и знаний, добро пожаловать в наш мир
          технологий и инноваций.
        </p>
      </div>
    </footer>
  );
};

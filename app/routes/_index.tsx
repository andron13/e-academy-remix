import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Курсы программирования для начинающих" },
    {
      name: "description",
      content:
        "Начните свое путешествие в мир программирования с нашими курсами для начинающих.",
    },
  ];
};

export default function Index() {
  return (
    <div className="font-sans leading-6 text-gray-800 h-screen flex flex-col justify-between bg-gradient-to-b from-purple-100 to-white relative overflow-hidden">
      <header className="p-5 bg-gradient-to-r from-purple-100 to-blue-100 border-b border-gray-800 z-10">
        <nav className="flex justify-between">
          <h2>Курсы программирования для начинающих</h2>
          <ul className="list-none flex gap-6">
            <li>
              <Link
                to="/blog/test"
                className="text-gray-800 text-lg no-underline"
              >
                Блог
              </Link>
            </li>
            <li>
              <Link
                to="/articles"
                className="text-gray-800 text-lg no-underline"
              >
                Статьи
              </Link>
            </li>
            <li>
              <Link to="/test" className="text-gray-800 text-lg no-underline">
                Тесты
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-800 text-lg no-underline">
                О нас
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                className="text-gray-800 text-lg no-underline"
              >
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="p-5 flex-1 flex flex-col items-center justify-center z-10">
        <h1>Добро пожаловать на наши курсы программирования для начинающих!</h1>
        <p>
          Начните свое путешествие в мир программирования с нашими курсами для
          начинающих. Выберите из множества языков и интересных тем.
        </p>
        <p>
          Наши курсы помогут вам освоить базовые концепции и принципы
          программирования. Вам не нужно иметь предыдущего опыта в
          программировании, чтобы начать. Наши опытные преподаватели готовы
          поддержать вас на каждом этапе обучения.
        </p>
        <p>
          Вместе мы разберемся с основами Python, JavaScript, HTML, CSS и многих
          других технологий. Вы также научитесь построению веб-сайтов, созданию
          интерактивных приложений и многое другое!
        </p>
        <p>Не ждите. Начните учиться сегодня!</p>
        <button className="bg-blue-500 text-white border-none px-8 py-3 rounded text-lg cursor-pointer mt-5">
          Зарегистрироваться
        </button>
      </main>

      <footer className="p-5 border-t border-gray-800 text-center mt-4 bg-purple-100 z-10">
        <p>Все права защищены © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

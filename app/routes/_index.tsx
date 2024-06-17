import { readAllPosts } from "~/lib/readPost.server";
import { PostData } from "~/lib/type";
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
    <article className="p-5 flex-1 flex flex-col items-center justify-center z-10">
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
    </article>
  );
}

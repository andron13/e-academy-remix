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
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#333333",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "linear-gradient(#E6E6FA, #F8F8FF)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <header
        style={{
          padding: "20px",
          backgroundImage: "linear-gradient(to right, #E6E6FA, #F0F8FF)",
          borderBottom: "1px solid #333",
          zIndex: 1,
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h2>Курсы программирования для начинающих</h2>
          <ul style={{ listStyle: "none", display: "flex", gap: "2rem" }}>
            <li>
              <Link
                to="/blog/test"
                style={{
                  textDecoration: "none",
                  color: "#333333",
                  fontSize: "16px",
                }}
              >
                Блог
              </Link>
            </li>
            <li>
              <Link
                to="/articles"
                style={{
                  textDecoration: "none",
                  color: "#333333",
                  fontSize: "16px",
                }}
              >
                Статьи
              </Link>
            </li>
            <li>
              <Link
                to="/test"
                style={{
                  textDecoration: "none",
                  color: "#333333",
                  fontSize: "16px",
                }}
              >
                Тесты
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{
                  textDecoration: "none",
                  color: "#333333",
                  fontSize: "16px",
                }}
              >
                О нас
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                style={{
                  textDecoration: "none",
                  color: "#333333",
                  fontSize: "16px",
                }}
              >
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main
        style={{
          padding: "20px",
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
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

        <button
          style={{
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "4px",
            fontSize: "18px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Зарегистрироваться
        </button>
      </main>

      <footer
        style={{
          padding: "20px",
          borderTop: "1px solid #333333",
          textAlign: "center",
          marginTop: "15px",
          backgroundColor: "#E6E6FA",
          zIndex: 1,
        }}
      >
        <p>Все права защищены © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

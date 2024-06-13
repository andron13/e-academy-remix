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
        backgroundColor: "#ffffff",
        color: "#333333",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <header
        style={{
          padding: "20px",
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
        }}
      >
        <h1>Добро пожаловать на наши курсы программирования для начинающих!</h1>
        <p>
          Начните свое путешествие в мир программирования с нашими курсами для
          начинающих. Выберите из множества языков и интересных тем.
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
        }}
      >
        <p>Все права защищены © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

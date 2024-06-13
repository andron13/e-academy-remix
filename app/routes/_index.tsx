import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Programming Courses for Beginners" },
    {
      name: "description",
      content:
        "Start your journey in programming with our beginner-friendly courses.",
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
        padding: "20px",
        color: "#333333",
        height: "100vh",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "1rem",
        }}
      >
        <h2>Programming Courses for Beginners</h2>
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
              Test Blog
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
              Articles
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
              Test Page
            </Link>
          </li>
        </ul>
      </nav>

      <h1>Welcome to our Programming Courses for Beginners!</h1>
      <p>
        Start your journey in programming with our beginner-friendly courses.
        Choose from a variety of programming languages and topics.
      </p>

      <p>Don't wait. Start learning today!</p>

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
        Sign Up
      </button>
    </div>
  );
}

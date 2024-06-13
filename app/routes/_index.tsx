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
        fontFamily: "Comfortaa, cursive",
        lineHeight: "1.8",
        backgroundColor: "#FFEBCD",
        padding: "20px",
        color: "#4B0082",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Welcome to our Vibrant Programming Courses for Beginners!</h1>
      <p>
        Embark on a colourful journey into the world of programming with our
        beginner-friendly courses. Immerse yourself in a variety of programming
        languages and interesting topics.
      </p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link to="/blog/test" style={{ color: "#800000", fontSize: "20px" }}>
            /blog/test
          </Link>
        </li>
        <li>
          <Link to="/articles" style={{ color: "#008B8B", fontSize: "20px" }}>
            articles
          </Link>
        </li>
        <li>
          <Link
            to="/test"
            style={{ color: "#483D8B", fontSize: "20px" }}
          ></Link>
        </li>
      </ul>

      <p>Don't wait. Let the colors of learning brighten up your life today!</p>

      <button
        style={{
          backgroundColor: "#FFD700",
          color: "black",
          border: "2px solid black",
          padding: "15px 30px",
          borderRadius: "10px",
          fontSize: "22px",
          cursor: "pointer",
          marginTop: "20px",
          fontWeight: "bold",
        }}
      >
        Sign Up
      </button>
    </div>
  );
}

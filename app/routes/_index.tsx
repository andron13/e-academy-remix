import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix and Markdown, A Configuration Test" },
    {
      name: "description",
      content: "Remix and Markdown, A Configuration Test",
    },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Remix and Markdown, A Configuration Test</h1>
      <ul>
        <li>
          <Link to="/test">test</Link>
        </li>
      </ul>
    </div>
  );
}

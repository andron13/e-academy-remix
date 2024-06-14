import { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ReactNode } from "react";

import stylesheet from "~/tailwind.css?url";

import { Footer } from "~/widgets/shared/footer";
import { Header } from "~/widgets/shared/header";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-screen flex flex-col justify-between">
        <Header />
        <main className="text-gray-800 flex-grow flex flex-col justify-start bg-gradient-to-b from-purple-100 to-white relative">
          {children}
        </main>
        <ScrollRestoration />
        <Scripts />
        <Footer />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

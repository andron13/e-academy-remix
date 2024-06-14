import { useMatches } from "@remix-run/react";

export const Breadcrumb = () => {
  const matches = useMatches();

  const result = matches
    .filter(
      (
        match // @ts-expect-error
      ) => match.handle && match.handle.breadcrumb
    )
    .map((match, index) => (
      <li key={index}>
        {
          // @ts-ignore
          match.handle.breadcrumb(match)
        }
      </li>
    ));

  return <>{result}</>;
};

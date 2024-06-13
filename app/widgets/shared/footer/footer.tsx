import { FC } from "react";

const styles: string = "p-5 border-t border-gray-800mt-4 bg-purple-100 z-10";

export const Footer: FC = () => {
  return (
    <footer className={styles}>
      <p className="text-center">
        Все права защищены © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

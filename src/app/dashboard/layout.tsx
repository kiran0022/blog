import { ReactNode } from "react";
import Navlink from "./components/Navlink";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navlink />
      {children}
    </div>
  );
}

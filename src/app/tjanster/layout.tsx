import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Måleri Viskan | Tjänster | Kinna, Mark och Sjuhärad",
  description: "Måleri Viskan - Vi kan måleri! Vi är din lokala målare i Sjuhärad, Mark och Kinna.",
};

export default function ServiceLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

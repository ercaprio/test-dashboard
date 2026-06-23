import type { ReactNode } from "react";
import { MantineProvider } from "./MantineProvider";
import { QueryProvider } from "./QueryProvider";

export const Providers = ({ children }: { children: ReactNode }) => (
  <MantineProvider>
    <QueryProvider>{children}</QueryProvider>
  </MantineProvider>
);

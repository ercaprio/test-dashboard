import type { ReactNode } from "react";
import { MantineProvider } from "./mantine-provider";
import { QueryProvider } from "./query-provider";

export const Providers = ({ children }: { children: ReactNode }) => (
  <MantineProvider>
    <QueryProvider>{children}</QueryProvider>
  </MantineProvider>
);

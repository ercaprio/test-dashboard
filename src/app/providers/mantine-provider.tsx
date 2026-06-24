import { MantineProvider as Provider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import type { ReactNode } from "react";

const theme = createTheme({});

export const MantineProvider = ({ children }: { children: ReactNode }) => (
  <Provider theme={theme}>{children}</Provider>
);

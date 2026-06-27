import { MantineProvider as Provider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import type { ReactNode } from "react";

const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  fontFamilyMonospace: "Monaco, monospace",
});

export const MantineProvider = ({ children }: { children: ReactNode }) => (
  <Provider theme={theme}>{children}</Provider>
);

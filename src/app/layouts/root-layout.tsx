import { AppShell, Container } from "@mantine/core";
import { Header } from "@widgets/header";
import type { ReactNode } from "react";

const containerStyles = {
  maw: { base: "100%", md: "80%" },
  px: { base: 16, md: 0 },
  h: "100%",
};
export const RootLayout = ({ children }: { children: ReactNode }) => (
  <AppShell header={{ height: 60 }} padding={0}>
    <AppShell.Header withBorder={false} bg="#E6E7E8">
      <Container {...containerStyles}>
        <Header />
      </Container>
    </AppShell.Header>

    <AppShell.Main bg="#E6E7E8">
      <Container {...containerStyles}>{children}</Container>
    </AppShell.Main>
  </AppShell>
);

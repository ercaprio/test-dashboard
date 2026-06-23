import { App } from "@app/index";
import { Providers } from "@app/providers";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

async function bootstrap() {
  if (import.meta.env.DEV) {
    const { worker } = await import("@shared/api/mocks/browser");
    await worker.start({ onUnhandledRequest: "bypass" });
  }

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Providers>
        <App />
      </Providers>
    </StrictMode>,
  );
}

bootstrap();

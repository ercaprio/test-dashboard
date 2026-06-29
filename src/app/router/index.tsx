import { RootLayout } from "@app/layouts/root-layout";
import { OrdersPage } from "@pages/orders";
import {
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({
  component: () => (
    <RootLayout>
      <Outlet />
    </RootLayout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  validateSearch: (search: Record<string, unknown>) => ({
    page: Number(search.page ?? 1),
    size: String(search.size ?? "10"),
    role: String(search.role ?? ""),
    service: String(search.service ?? ""),
    status: String(search.status ?? ""),
    period: String(search.period ?? ""),
    cost: String(search.cost ?? ""),
  }),
  component: () => <OrdersPage />,
});

const scheduleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/schedule",
  component: () => <div>Расписание — в разработке</div>,
});

const requestsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/requests",
  component: () => <div>Заявки — в разработке</div>,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  scheduleRoute,
  requestsRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

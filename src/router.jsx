import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import { AppLayout } from "./components/layout/AppLayout";
import HomePage from "./pages/HomePage";

const rootRoute = createRootRoute({
  component: () => (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const routeTree = rootRoute.addChildren([homeRoute]);

const router = createRouter({
  routeTree,
});

export function AppRouter() {
  return <RouterProvider router={router} />;
}

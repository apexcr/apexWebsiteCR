import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import { AppLayout } from "./components/layout/AppLayout";
import CheckoutFinal from "./pages/CheckoutFinal";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProductCalculatorPage from "./pages/ProductCalculatorPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsPage from "./pages/ProductsPage";

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

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: ProductsPage,
});

const productCalculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/calculator",
  component: ProductCalculatorPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const productDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/$id",
  component: ProductDetailPage,
});

const checkoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/checkout",
  component: CheckoutPage,
});

const checkoutFinalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/checkout/final",
  component: CheckoutFinal,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  productsRoute,
  productCalculatorRoute,
  contactRoute,
  productDetailRoute,
  checkoutRoute,
  checkoutFinalRoute,
]);

const router = createRouter({
  routeTree,
});

export function AppRouter() {
  return <RouterProvider router={router} />;
}

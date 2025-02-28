import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error"; //
import LazyLoadingRoute from "../components/LazyLoadingRoute";

// layouts
import MainLayout from "../layouts/MainLayout";
import AuthGuard from "../guards/AuthGuard";

// pages
const About = lazy(() => import("../pages/About"));
const Cart = lazy(() => import("../pages/Cart"));
const Contact = lazy(() => import("../pages/Contact"));
const ForgetPassword = lazy(() => import("../pages/ForgetPassword")); //
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login")); //
const Order = lazy(() => import("../pages/Order"));
const Product = lazy(() => import("../pages/Product"));
const Products = lazy(() => import("../pages/Products"));
const Register = lazy(() => import("../pages/Register")); //
const ResetCodeVerify = lazy(() => import("../pages/ResetCodeVerify")); //
const ResetPassword = lazy(() => import("../pages/ResetPassword")); //
const Review = lazy(() => import("../pages/Review"));
const SubCategory = lazy(() => import("../pages/SubCategory"));
const SuccessPayment = lazy(() => import("../pages/SuccessPayment")); //
const Tags = lazy(() => import("../pages/Tags"));
const UserProfile = lazy(() => import("../pages/UserProfile")); //
const Wishlist = lazy(() => import("../pages/Wishlist"));

// routing config
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LazyLoadingRoute />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<LazyLoadingRoute />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <AuthGuard>
            <Suspense fallback={<LazyLoadingRoute />}>
              <Cart />
            </Suspense>
          </AuthGuard>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<LazyLoadingRoute />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "order",
        element: (
          <AuthGuard>
            <Suspense fallback={<LazyLoadingRoute />}>
              <Order />
            </Suspense>
          </AuthGuard>
        ),
      },
      {
        path: "categories/:categoryId",
        element: (
          <Suspense fallback={<LazyLoadingRoute />}>
            <SubCategory />
          </Suspense>
        ),
      },
      {
        path: "subcategories/:subcategoryId",
        element: (
          <Suspense fallback={<LazyLoadingRoute />}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "products/:productId",
        element: (
          <Suspense fallback={<LazyLoadingRoute />}>
            <Product />
          </Suspense>
        ),
      },
      {
        path: "review",
        element: (
          <AuthGuard>
            <Suspense fallback={<LazyLoadingRoute />}>
              <Review />
            </Suspense>
          </AuthGuard>
        ),
      },
      {
        path: "tags/:tagName",
        element: (
          <Suspense fallback={<LazyLoadingRoute />}>
            <Tags />
          </Suspense>
        ),
      },
      {
        path: "wishlist",
        element: (
          <AuthGuard>
            <Suspense fallback={<LazyLoadingRoute />}>
              <Wishlist />
            </Suspense>
          </AuthGuard>
        ),
      },
      // {
      //   path: "categories/:category",
      //   element: <Suspense fallback={<LazyLoadingRoute />}></Suspense>  <Categories />,
      //   loader: ({ params }) => {
      //     if (
      //       typeof params.category !== "string" ||
      //       !/^[a-z]+$/i.test(params.category)
      //     ) {
      //       throw new Response("Bad request", {
      //         statusText: "Category not found",
      //         status: 400,
      //       });
      //     }
      //     return true;
      //   },
      // },
    ],
  },
  {
    path: "forgetpassword",
    element: (
      <Suspense fallback={<LazyLoadingRoute />}>
        <ForgetPassword />
      </Suspense>
    ),
  },
  {
    path: "login",
    element: (
      <Suspense fallback={<LazyLoadingRoute />}>
        <Login />
      </Suspense>
    ),
  },
  // {
  //   path: "notfound",
  //   element: <Suspense fallback={<LazyLoadingRoute />}></Suspense>  <NotFound />,
  // },
  {
    path: "register",
    element: (
      <Suspense fallback={<LazyLoadingRoute />}>
        <Register />
      </Suspense>
    ),
  },
  {
    path: "resetcodeverify",
    element: (
      <Suspense fallback={<LazyLoadingRoute />}>
        <ResetCodeVerify />
      </Suspense>
    ),
  },
  {
    path: "resetpassword",
    element: (
      <Suspense fallback={<LazyLoadingRoute />}>
        <ResetPassword />
      </Suspense>
    ),
  },
  {
    path: "successpayment",
    element: (
      <AuthGuard>
        <Suspense fallback={<LazyLoadingRoute />}>
          <SuccessPayment />
        </Suspense>
      </AuthGuard>
    ),
  },
  {
    path: "userprofile",
    element: (
      <AuthGuard>
        <Suspense fallback={<LazyLoadingRoute />}>
          <UserProfile />
        </Suspense>
      </AuthGuard>
    ),
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRouter;

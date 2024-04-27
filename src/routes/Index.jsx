import { lazy, memo, useEffect, Suspense } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  PATH_HOME,
  PATH_NEWS,
  PATH_PRODUCT,
  PATH_PRODUCT_DETAIL,
  PATH_FCARE,
  PATH_EVENTS,
  PATH_KHUYENMAI,
} from "./path";
import LandingPage from "../Pages/LandingPage/LandingPage";
import ListProduct from "../Pages/ListProduct/ListItem";
import ProductDetail from "../Pages/ListProduct/ProductDetail";

import Events from "../Pages/Events/Events";
import Fcare from "../Pages/Fcare/Fcare";
import Tintuc from "../Pages/Tintuc/Tintuc";
import KhuyenMai from "../Pages/Khuyenmai/KhuyenMai";

export const normalRoutes = [PATH_HOME];
export const authRoutes = [];

const PageLayout = lazy(() => import("../Layouts/PageLayout"));

function Router() {
  const location = useLocation();

  const routes = [
    {
      element: (
        <Suspense fallback={<p className="suspense_loading">Loading...</p>}>
          <TransitionGroup>
            <CSSTransition
              key={location.key || ""}
              timeout={{ enter: 300, exit: 300 }}
              classNames="fade"
            >
              <PageLayout>
                <LandingPage />
              </PageLayout>
            </CSSTransition>
          </TransitionGroup>
        </Suspense>
      ),
      children: [
        { path: PATH_HOME, element: <LandingPage /> },
        { path: `${PATH_PRODUCT}`, element: <ListProduct /> },
        { path: PATH_PRODUCT_DETAIL, element: <ProductDetail /> },
        { path: PATH_NEWS, element: <Tintuc /> },
        { path: PATH_EVENTS, element: <Events /> },
        { path: PATH_FCARE, element: <Fcare /> },
        { path: PATH_KHUYENMAI, element: <KhuyenMai /> },
      ],
    },
  ];

  useEffect(() => {}, []);

  return useRoutes(routes);
}

export default memo(Router);

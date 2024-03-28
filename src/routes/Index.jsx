import { lazy, memo, useEffect, Suspense } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { PATH_HOME, PATH_PRODUCT, PATH_PRODUCT_DETAIL } from "./path";
import LandingPage from "../Pages/LandingPage/LandingPage";
import ListProduct from "../Pages/ListProduct/ListProduct";

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
        { path: `${PATH_PRODUCT}/:Product`, element: <ListProduct /> },
        { path: PATH_PRODUCT_DETAIL, element: <ListProduct /> },
      ],
    },
  ];

  useEffect(() => {}, []);

  return useRoutes(routes);
}

export default memo(Router);

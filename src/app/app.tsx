import { RouterProvider } from "react-aria-components";
import { Route, Routes, useHref, useNavigate } from "react-router";
import { getHomeRoute, getSubpageRoute } from "./routes";
import { Home } from "./home";
import { MainLayout } from "./layout";
import { SubPage } from "./sub";
import { Page404 } from "./page404";

export function App() {
     const navigate = useNavigate();

     return <RouterProvider navigate={navigate} useHref={useHref}>
          <Routes>
               <Route element={<MainLayout />}>
                    <Route path={getHomeRoute()} element={<Home />}/>
                    <Route path={getSubpageRoute()} element={<SubPage />}/>
               </Route>
               <Route path={'/*'} element={<Page404 />} />
          </Routes>
     </RouterProvider>
}

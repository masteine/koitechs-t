import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Home from "./pages/home";
import Resume from "./pages/resume";
import NotFound from "./pages/not-found";
import PageLayout from "./layouts/PageLayout";

const Preloader = () => <div>Loading...</div>;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<Preloader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path=":username"
            element={
              <Suspense fallback={<Preloader />}>
                <Resume />
              </Suspense>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

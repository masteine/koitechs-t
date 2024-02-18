// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Home from "./pages/home";
import Resume from "./pages/resume";

const Preloader = () => <div>Loading...</div>;
const Fallback = () => <div>404</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
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
        <Route path="*" element={<Fallback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

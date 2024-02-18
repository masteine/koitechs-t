// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Home from "./pages/home";
import Resume from "./pages/resume";
import NotFound from "./pages/not-found";
import { Container } from "@mui/material";

const Preloader = () => <div>Loading...</div>;

function App() {
  return (
    <Container maxWidth="xl">
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

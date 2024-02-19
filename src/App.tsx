import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Resume from "./pages/resume";
import NotFound from "./pages/not-found";
import PageLayout from "./layouts/PageLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path=":username" element={<Resume />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

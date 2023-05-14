// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
// import AboutBase from "./pages/AboutBase";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import { Teacher } from "./pages/Teacher";
import { Resources } from "./pages/Resources";
import { AboutBase } from "./pages/AboutBase";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<AboutBase />} />
          <Route path="teacher" element={<Teacher />} />
          <Route path="resources" element={<Resources />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

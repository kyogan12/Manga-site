import { BrowserRouter, Routes, Route } from "react-router-dom";
import Author from "./Author/Author";
import MainSite from "./MainSite/MainSite";
import MangaPage from "./MangaPage/MangaPage";
import Search from "./Search/Search";

const BrowserRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route to="/" index element={<MainSite />}></Route>
        <Route path="/:name/:page" element={<Search />}></Route>
        <Route path="/manga/:manga" element={<MangaPage />}></Route>
        <Route path="author/:author" element={<Author />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default BrowserRoutes;

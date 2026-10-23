import { Routes, Route } from "react-router";

import HomePage from "./pages/HomePage/HomePage";
import DesignsPage from "./pages/DesignsPage/DesignsPage";
import WebsitesPage from "./pages/WebsitesPage/WebsitesPage";
import MePage from "./pages/MePage/MePage";
import CvPage from "./pages/CvPage/CvPage";
import AppsPage from "./pages/AppsPage/AppsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import BeerLabelsPage from "./pages/DesignsPage/BeerLabelsPage/BeerLabelsPage";
import MoviePosterPage from "./pages/DesignsPage/MoviePosterPage/MoviePosterPage";
import SpotifyShortsPage from "./pages/DesignsPage/SpotifyShortsPage/SpotifyShortsPage";

export default function App() {
  return (
    <>
      <aside className="portfolio-banner">
        <span>Du ser min første portfolio</span>
        <a href="https://millehlauridsen-ops.github.io/">
          Til min nuværende portfolio ↗
        </a>
      </aside>

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/designs" element={<DesignsPage />} />
        <Route path="/designs/beer-labels" element={<BeerLabelsPage />} />
        <Route path="/designs/movie-poster" element={<MoviePosterPage />} />
        <Route path="/designs/spotify-shorts" element={<SpotifyShortsPage />} />
        <Route path="/websites" element={<WebsitesPage />} />
        <Route path="/me" element={<MePage />} />
        <Route path="/cv" element={<CvPage />} />
        <Route path="/apps" element={<AppsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

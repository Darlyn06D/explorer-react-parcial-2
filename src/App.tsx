import { Route, Routes } from "react-router-dom";
import { CountryDetailPage } from "./pages/CountryDetailPage";
import { CountryListPage } from "./pages/CountryListPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CountryListPage />} />
      <Route path="/country/:code" element={<CountryDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

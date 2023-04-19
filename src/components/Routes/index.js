import { Routes, Route } from "react-router-dom";
import Category from "../../pages/category";
import Home from "../../pages/home";

function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Category />}></Route>
        <Route path="/:categoryId" element={<Category />}></Route>
      </Routes>
    );
  }
  export default AppRoutes;
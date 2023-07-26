import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Toalhas } from "../pages/Toalhas";
import { Tendas } from "../pages/Tendas";
import { MesasECadeiras } from "../pages/MesasECadeiras";
import { Freezers } from "../pages/Freezers";

export function Router() {
    return (
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/tendas"} element={<Tendas />} />
          <Route path={"/mesasecadeiras"} element={<MesasECadeiras />} />
          <Route path={"/freezers"} element={<Freezers />} />
          <Route path={"/toalhas"} element={<Toalhas />} />
        </Routes>
    )
}
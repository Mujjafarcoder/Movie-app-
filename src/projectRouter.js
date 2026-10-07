import { BrowserRouter, Routes, Route } from "react-router";
import App from "./componets/App";
import Popular from "./componets/Popular";
import Toprated from "./componets/Toprated";
import Upcoming from "./componets/Upcoming";
import Searchmovie from "./componets/Searchmovie";
import SingleMovie from "./componets/SingleMovie";



let projectRoute = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Popular />} />
        <Route path="popular" element={<Popular />} />
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="toprated" element={<Toprated />} />
        <Route path="singlemovie/:movieid" element={<SingleMovie />} />
        <Route path="searchmovie/:name" element={<Searchmovie />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default projectRoute;
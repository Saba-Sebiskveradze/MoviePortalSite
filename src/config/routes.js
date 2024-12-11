import routes from "../constants/routes";
import AuthGuard from "../guards/authguard/AuthGuard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Details from "../pages/details/Details";
import TvSeriesDetails from "../pages/details/TvSeriesDetails";
import SerchedMovies from "../pages/serchedmovies/SerchedMovies";

export const appRoutes = [
  {
    path: routes.home,
    Component: Home,
    Guard: AuthGuard,
  },
  {
    path: routes.login,
    Component: Login,
  },
  {
    path: routes.register,
    Component: Register,
  },
  {
    path: routes.details,
    Component: Details,
    Guard: AuthGuard,
  },
  {
    path: routes.tvseriesdetails,
    Component: TvSeriesDetails,
    Guard: AuthGuard,
  },
  {
    path: routes.searchedmovies,
    Component: SerchedMovies,
    Guard: AuthGuard,
  },
];

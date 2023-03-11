import  Posts  from "./components/Posts";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/posts',
    element: <Posts />
  }
];

export default AppRoutes;

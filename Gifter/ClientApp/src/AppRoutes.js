import  Posts  from "./components/Posts";
import { Home } from "./components/Home";
import {PostForm} from "./components/PostForm";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/posts',
    element: <Posts />
    },
    {
        path: '/postForm',
        element: <PostForm />
        }
];

export default AppRoutes;

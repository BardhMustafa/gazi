import { createBrowserRouter } from "react-router-dom";
import Ballina from "../pages/Ballina";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Ballina
  },
]);

export default router;
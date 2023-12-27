import { createBrowserRouter } from "react-router-dom";
import Ballina from "../pages/Ballina";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Ballina />,
  },
]);

export default router;
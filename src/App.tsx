import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClipBooks from "./Pages/ClipBooks";
import ClipBoard from "./Pages/ClipBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClipBooks />,
  },
  {
    path: "/boards",
    element: <ClipBoard />,
  },
]);
function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;

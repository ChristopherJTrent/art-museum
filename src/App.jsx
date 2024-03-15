import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GalleryNavigation from "./components/GalleryNavigation";
import harvardArt from "./data/harvardArt.js";

function App() {
  const router = createBrowserRouter([
    {
      path: '*',
      element: <h2>Page Not Found</h2>
    },
    {
      path: 'galleries',
      element: <GalleryNavigation galleries={ harvardArt.records } />
    }
  ])
  return <RouterProvider router={router} />;
}

export default App;

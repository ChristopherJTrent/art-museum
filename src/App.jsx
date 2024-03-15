import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GalleryNavigation from "./components/GalleryNavigation";
import harvardArt from "./data/harvardArt.js";
import Layout from "./layout/Layout.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: '*',
      element: <h2>Page Not Found</h2>
    },
    {
      path: 'galleries',
      element: <GalleryNavigation galleries={ harvardArt.records } />
    },
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element:
            <>
              <h2>Harvard Art Museum</h2>
              <p>
                Look, but Don&apos;t Touch. Please select a Gallery in the
                navigation bar.
              </p>
            </>
        }
      ]
    }
  ])
  return <RouterProvider router={router} />;
}

export default App;

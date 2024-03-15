import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: '*',
      element: <h2>Page Not Found</h2>
    }
  ])
  return <RouterProvider router={router} />;
}

export default App;

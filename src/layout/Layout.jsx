import { Outlet } from "react-router-dom";
import harvardArt from "../data/harvardArt";
import GalleryNavigation from "../components/GalleryNavigation";

const Layout= ()=>{

    return (
        <div className="page-wrapper">
          <GalleryNavigation galleries={harvardArt.records} />
          <main>
            <Outlet />
          </main>
        </div>
      );

}

export default Layout

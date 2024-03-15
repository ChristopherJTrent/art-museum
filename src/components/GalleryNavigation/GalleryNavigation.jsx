import { NavLink } from "react-router-dom"


const GalleryNavigation = ({galleries}) => {
    return <nav>
        <h1>Galleries</h1>
        <NavLink to='/'>Home</NavLink>
        {galleries.map((v, i) => {
            return <NavLink to={`/galleries/${v.id}`} key={i}>{v.name}</NavLink>
        })}
    </nav>
}
export default GalleryNavigation

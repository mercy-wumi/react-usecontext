import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <Link to='/react-usecontext'>HomePage</Link>
            <Link to='/react-usecontext/useref'>useRef</Link>
            <Link to='/react-usecontext/usecontext'>useContext</Link>
        </nav>
    )
}

export default Nav
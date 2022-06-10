import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <Link to='/'>HomePage</Link>
            <Link to='/useref'>useRef</Link>
            <Link to='/usecontext'>useContext</Link>
        </nav>
    )
}

export default Nav
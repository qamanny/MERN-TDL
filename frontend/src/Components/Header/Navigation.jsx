import { Link } from 'react-router-dom';
import  { Navbar } from 'reactstrap';
const Navigation = () => {

    return (
        <>
            <Navbar color="color-nav" variant="light" expand="md">
                <Link to="/" className="btn btn-outline-dark">Home</Link>
                <Link to="/about" className="btn btn-outline-dark">About</Link>
                <a href="http://github.com/qamanny" className="btn btn-outline-dark">My Github</a>
            </Navbar>
        </>
    )

}

export default Navigation;
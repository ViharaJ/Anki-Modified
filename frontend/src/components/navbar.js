import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Anki-Modified</h1>
                </Link>
            </div>
        </header>
    )
};

export default Navbar;
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="Nav">
            <ul>
                <Link to="/" style={{ textDecoration: 'none', color: 'antiquewhite' }}>
                    <li>Home</li>
                </Link>

                <Link to="/sejarah" style={{ textDecoration: 'none', color: 'antiquewhite' }}>
                    <li>Sejarah</li>
                </Link>

                <Link to="/tentang" style={{ textDecoration: 'none', color: 'antiquewhite' }}>
                    <li>Tentang</li>
                </Link>

                <Link to="/kontak" style={{ textDecoration: 'none', color: 'antiquewhite' }}>
                    <li>Kontak</li>
                </Link>

                <Link to="/siswa" style={{ textDecoration: 'none', color: 'antiquewhite' }}>
                    <li>Siswa</li>
                </Link>

                <Link to="/menu" style={{ textDecoration: 'none', color: 'antiquewhite' }}>
                    <li>Menu</li>
                </Link>
            </ul>
        </div>
    );
}

export default Nav;

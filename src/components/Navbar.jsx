import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/qr">QR Code</Link>
    </nav>
  );
}

export default Navbar;

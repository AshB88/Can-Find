import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  const currentPage = useLocation().pathname;

  return (
    <div>
      <nav className="header">
        <ul>
          <li className="nav-item">
            <Link to="/" className={currentPage === '/' ? 'active' : 'nav-link'}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/SavedCandidates" className={currentPage === '/SavedCandidates' ? 'active' : 'nav-link'}>
              Potential Candidates
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Nav;
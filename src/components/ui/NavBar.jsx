import { Link, Outlet } from "react-router-dom";


let NavBar = () => {
  return (
    <>
      <aside className="left-sidebar">
        <div>
          <div className="brand-logo d-flex align-items-center justify-content-between">
            <a href="./index.html" className="text-nowrap logo-img">
              <img
                src="../assets/images/logos/dark-logo.svg"
                width="180"
                alt=""
              />
            </a>
            <div
              className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
              id="sidebarCollapse"
            >
              <i className="ti ti-x fs-8"></i>
            </div>
          </div>
          <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
            <ul id="sidebarnav">



              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span className="hide-menu">Data</span>
              </li>

              <li className="sidebar-item">
                <Link
                  className="sidebar-link"
                  to="/blog"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-article"></i>
                  </span>
                  <span className="hide-menu">Blogs</span>
                </Link>
              </li>

              <li className="sidebar-item">
                <Link
                  className="sidebar-link"
                  to="/forms"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-alert-circle"></i>
                  </span>
                  <span className="hide-menu">Forms</span>
                </Link>
              </li>

              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="./ui-card.html"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-cards"></i>
                  </span>
                  <span className="hide-menu">Card</span>
                </a>
              </li>

              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="./ui-forms.html"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-file-description"></i>
                  </span>
                  <span className="hide-menu">Forms</span>
                </a>
              </li>
              


            </ul>

          </nav>
        </div>
      </aside>
    </>
  );
};

export default NavBar;

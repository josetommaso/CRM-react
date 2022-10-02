import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  console.log(location.pathname);
  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-white text-center">
          CRM - Clients
        </h2>
        <nav className="mt-10">
          <Link
            to="/"
            className={`${
              location.pathname === '/' ? 'text-blue-300' : 'text-white'
            } text-2xl block mt-2 hover:text-blue-300 transition-colors duration-500`}
          >
            Clients
          </Link>
          <Link
            to="/clients/new"
            className={`${
              location.pathname === '/clients/new'
                ? 'text-blue-300'
                : 'text-white'
            } text-2xl block mt-2 hover:text-blue-300 transition-colors duration-500`}
          >
            Create Client
          </Link>
        </nav>
      </aside>
      <main className="md:w-3/4 p-10 md:min-h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

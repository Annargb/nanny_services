import { Link, NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <div className="container absolute bg-green flex items-center justify-between max-w-1376px h-88px border-b border-borderColor px-96px py-20px">
      <Link
        to="/"
        className="text-white text-xl font-medium leading-117 tracking-tighter"
      >
        Nanny.Services
      </Link>
      <div className="flex items-center gap-23">
        <nav className="flex gap-10">
          <NavLink
            to="/"
            className="text-white font-normal text-sm leading-tight tracking-tight active:text-yellow"
            activeClassName="text-yellow"
          >
            Home
          </NavLink>
          <NavLink
            to="/nannies"
            className="text-white font-normal text-sm leading-tight tracking-tight active:text-yellow"
            activeClassName="text-yellow"
          >
            Nannies
          </NavLink>
          <NavLink
            to="/favorites"
            className="text-white font-normal text-sm leading-tight tracking-tight active:text-yellow"
            activeClassName="text-yellow"
          >
            Favorires
          </NavLink>
        </nav>
        <ul className="flex gap-2">
          <li>
            <button
              type="button"
              className="text-white font-medium text-sm  leading-tight tracking-tight px-40px py-14px border border-solid border-borderColor rounded-30px"
            >
              Log In
            </button>
          </li>
          <li>
            <button
              type="button"
              className="text-white font-medium text-sm leading-tight tracking-tight px-40px py-14px border border-green bg-green rounded-30px"
            >
              Registration
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

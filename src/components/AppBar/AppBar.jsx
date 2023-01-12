import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import cn from 'classnames';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <>
      <nav className={css.navBar}>
        <ul className={css.navList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(css.NavLink, { [css.active]: isActive })
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                cn(css.NavLink, { [css.active]: isActive })
              }
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={css.addionalInfo}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <>
      <nav className={css.navBar}>
        <ul className={css.navList}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
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

import style from './styles.module.css';

function Nav() {
  return (
    <nav className={style.navigation}>
      <a href="/">
        <i className="las la-lg la-angle-left" />
      </a>
    </nav>
  );
}

export default Nav;

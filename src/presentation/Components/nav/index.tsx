import style from './styles.module.css';

interface NavProps {
  path: string;
  modo?: string;
}
function Nav({ path, modo }: NavProps) {
  return (
    <nav className={style.navigation}>
      <a href={path}>
        <i className="las la-lg la-angle-left" />
      </a>
      {modo === 'edicao' ? <button type="button" aria-label="edicao"><i className="las la-lg la-pen" /></button> : ''}
    </nav>
  );
}
Nav.defaultProps = {
  modo: '',
};

export default Nav;

import style from './styles.module.css';

interface NavProps {
  origem: string;
  acao:'';
}

function Nav({ origem, acao }:NavProps) {
  return (
    <nav className={style.navigation}>
      <a href={origem}>
        <i className="las la-lg la-angle-left" />
      </a>
      {acao ? <a href={origem} aria-label={origem}><i className="las la-lg la-pen" /></a> : '' }
    </nav>
  );
}

export default Nav;

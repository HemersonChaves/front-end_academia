import style from './styles.module.css';

interface HeaderProps {
  title: string;
}
function Header({ title }: HeaderProps) {
  return (
    <header className={style.header}>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;

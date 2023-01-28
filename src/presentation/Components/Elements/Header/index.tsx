import style from './styles.module.css';

interface HeaderProps {
  children: React.ReactNode;
}
function Header({ children }: HeaderProps) {
  return (
    <header className={style.header}>
      <h1>{children}</h1>
    </header>
  );
}

export default Header;

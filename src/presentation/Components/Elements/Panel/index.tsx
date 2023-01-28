import style from './styles.module.css';

interface PanelProps {
  children: React.ReactNode;
}
function Panel({ children }: PanelProps) {
  return (
    <main className={style.main_login}>
      {children}
    </main>
  );
}
export default Panel;

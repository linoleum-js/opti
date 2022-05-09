
import styles from './Header.module.scss';


export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.menu}>
          <li><a href="/">Прогнозы</a></li>
          <li><a href="/">Расписание</a></li>
          <li><a href="">Сотрудники</a></li>
          <li><a href="">Отчёты</a></li>
          <li><a href="">Настройки</a></li>
        </ul>
      </nav>
    </header>
  );
};

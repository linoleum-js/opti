
import styles from './Header.module.css';


export const Header = () => {
  return (
    <header className={styles.Header}>
      <nav>
        <ul>
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

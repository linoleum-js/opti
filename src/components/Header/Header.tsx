
import { useTranslation } from 'react-i18next';

import styles from './Header.module.scss';


export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.menu}>
          <li><a href="/">{t('header.menu.forecast')}</a></li>
          <li><a href="/">{t('header.menu.schedule')}</a></li>
          <li><a href="">{t('header.menu.employees')}</a></li>
          <li><a href="">{t('header.menu.reports')}</a></li>
          <li><a href="">{t('header.menu.settings')}</a></li>
        </ul>
      </nav>
    </header>
  );
};

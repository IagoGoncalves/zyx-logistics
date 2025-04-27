import React from 'react';
import styles from './HeaderList.module.scss';

const HeaderList = ({showDate = true}) => {
    return (
        <li className={styles.list}>
            <p>Descrição {showDate && '- Data'} {' - Status'}</p>
            <p>Ações</p>
        </li>
    );
};

export default HeaderList;

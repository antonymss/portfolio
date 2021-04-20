import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'

function Footer() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Иван Иванович</h2>
                <div className={style.socSeti}>
                    <p className={style.seti}>Linkedin</p>
                    <p className={style.seti}>Telegram</p>
                    <p className={style.seti}>Githab</p>

                </div>
                <div className={style.root}>2021 Все права защищены</div>
            </div>
        </div>
    );
}

export default Footer;

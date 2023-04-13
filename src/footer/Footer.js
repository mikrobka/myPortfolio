import React from 'react';
import stylesContainer from "../common/styles/Container.module.css";
import s from "./Footer.module.css"
export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${stylesContainer.container} ${s.container}`}>
                <h2>Andrey Paramonov</h2>
                <div className={s.links}>
                    <a href="">1</a>
                    <a href="">2</a>
                    <a href="">3</a>
                    <a href="">4</a>
                </div>
                <div className={s.footer}> Все права защищены блаблабла</div>
            </div>
        </div>
    );
};


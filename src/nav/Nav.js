import React from 'react';
import s from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="">General</a>
            <a href="">Skills</a>
            <a href="">Project</a>
            <a href="">Contacts</a>
        </div>
    );
};


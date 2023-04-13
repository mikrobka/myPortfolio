import React from 'react';
import s from "./Work.module.css"

export const Work = () => {
    return (
        <div className={s.work}>
            <img className={s.icon} alt={""}/>
                <a href={""} className={s.button}>Click</a>
            <div className={s.footer}>
                <h3 className={s.title}>Project Name</h3>
                <span className={s.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fuga illum nisi tenetur veritatis voluptatum. Aspernatur, consectetur deserunt magni provident rem repellendus rerum temporibus voluptate?</span>
            </div>
        </div>
    );
};


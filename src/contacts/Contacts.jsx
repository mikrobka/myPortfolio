import React from 'react';
import s from "./Contacts.module.css"
import stylesContainer from "../common/styles/Container.module.css";
export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <h3 className={s.title}>Contacts</h3>
            <div className={`${stylesContainer.container} ${s.container}`}>
                <form className={s.form}>
                    <input className={s.input} type="text" name={"name"} placeholder={"Your name"}/>
                    <input className={s.input} type="text" name={"email"} placeholder={"Your e-mail"}/>
                    <textarea className={s.textarea} name="message" placeholder={"Your message"} ></textarea>
                </form>
                <button className={s.button}>Send</button>
            </div>
        </div>
    );
};


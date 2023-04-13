import React from 'react';
import s from "./Skills.module.css"
import stylesContainer from "../common/styles/Container.module.css"
import {Skill} from "./Skill/Skill";
export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${stylesContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My Skills</h2>
                <div className={s.skills}>
                    <Skill title={"Js"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur culpa dignissimos eum fugit illo magni minus nisi soluta voluptatem! Exercitationem minima praesentium quod temporibus totam?"}/>
                    <Skill title={"Css"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur culpa dignissimos eum fugit illo magni minus nisi soluta voluptatem! Exercitationem minima praesentium quod temporibus totam?"}/>
                    <Skill title={"React"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur culpa dignissimos eum fugit illo magni minus nisi soluta voluptatem! Exercitationem minima praesentium quod temporibus totam?"}/>
                </div>
            </div>
        </div>
    );
};


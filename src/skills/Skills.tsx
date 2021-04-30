import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from './skill/Skill';
import Title from "../common/components/title/Title";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'JS'} descriprion={'Lorem ipsum dolor sit amet, hic id illo, nulla praesentium ?'}/>
                    <Skill title={'CSS'} descriprion={'Lorem ipsum dolor sit amet, hic id illo ?'}/>
                    <Skill title={'React'} descriprion={'Lorem ipsum dolor sit amet,  hic id illo ?'}/>

                </div>
            </div>


        </div>
    );
}

export default Skills;

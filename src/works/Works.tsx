import React from 'react';
import style from './Works.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Work from './work/Work';
import Title from '../common/components/title/Title';
import socialImage from './../assets/image/images.jpg'
import todoImage from './../assets/image/imagesFire.jpg'

function Works() {
    const socialNetwork = {
        backgroundImage: `url(${socialImage})`
    }
    const todoList = {
        backgroundImage: `url(${todoImage})`
    }
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
           <Title text={'Project'}/>
                <div className={style.works}>
                    <Work style={socialNetwork}/>
                    <Work style={todoList}/>
                </div>
            </div>
        </div>
    );
}

export default Works;

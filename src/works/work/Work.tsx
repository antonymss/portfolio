import React from 'react';
import style from './Work.module.scss';

type workType = {
    style: {backgroundImage: string}
}

function Work(props:workType) {
    return (
        <div className={style.work}>
            <div className={style.image} style={props.style}>
                <button className={style.viewBtn}>Смотреть</button>
            </div>
            <div className={style.workContent}>
                <h3 className={style.projectTitle}>Название проекта</h3>
                <span className={style.text}>Краткое описание</span>

            </div>


        </div>
    );
}

export default Work;

import React from 'react';
import style from './Title.module.scss';
export type TitleType={
    text: string
}

function Title(props:TitleType ) {
    return (
        <div className={style.title}>
            <h2>{props.text}</h2>
        </div>
    );
}

export default Title;

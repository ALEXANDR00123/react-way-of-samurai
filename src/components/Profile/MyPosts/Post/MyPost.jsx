import React from "react";
import s from './MyPost.module.scss'


export default function MyPost (props) {
    return (
        <div className={s.item} >
            <img src="https://avatars.mds.yandex.net/i?id=0375a7dcf45fce502a278b344387b1c7_l-5344236-images-thumbs&n=13"/>
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}
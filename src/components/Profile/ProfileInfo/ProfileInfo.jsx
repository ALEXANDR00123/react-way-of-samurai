import React from "react";
import s from './ProfileInfo.module.scss'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.profileBgc}>
                <img
                    src="https://sun9-59.userapi.com/impf/o8UhjN6btse5zmCPg50m9FZWesaI7YW26EySQQ/_tMgph158dw.jpg?size=1590x400&quality=95&crop=0,107,1500,377&sign=0da79447b48d822fb321e5c008caaaa3&type=cover_group"
                    alt="car user"/>
            </div>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    )
};

export default ProfileInfo;

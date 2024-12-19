import React from "react";
import s from './Dialogs.module.scss'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElement = props.dData.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElement = props.mData.map(m => <Message message={m.message} />)

    let newMessageEl = React.createRef()

    let sendMessage = () => {
        let text = newMessageEl.current.value
        props.sendMessage(text)
        newMessageEl.current.value = ''
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <div>
                    <textarea ref={newMessageEl}></textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Send messge</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;
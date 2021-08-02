import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { AiOutlineSend } from 'react-icons/ai'

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map((d) =>
        <DialogItem id={d.id} name={d.name} />
    );

    let messageElenents = props.state.messageData.map((m) =>
        <Message message={m.message} ></Message>
    );

    return (
        <div className={classes.dialogs} >
            <div className={classes.dialogsItems} >

                {dialogsElements}

            </div>

            <div className={classes.chat} >
                <div className={classes.chatHeader} >
                    <div className={classes.chatImg}>
                        <img src='https://emojitool.ru/img/apple/ios-11.3/octopus-1545.png' alt='octopus'></img>
                    </div>
                    <div className={classes.chatName}>
                        <span>Dialogs name</span>
                    </div>
                </div>
                <div className={classes.chatBody}>
                    {messageElenents}
                </div>
                <div className={classes.chatFotter}>
                    <input placeholder='Введите сообщение...' type='text' ></input>
                    <i><AiOutlineSend /></i>
                </div>
            </div>

        </div>
    )
}

export default Dialogs
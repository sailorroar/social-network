import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { AiOutlineSend } from 'react-icons/ai'


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((d) =>
        <DialogItem id={d.id} name={d.name} />
    );

    let messageElenents = state.messages.map((m) =>
        <Message message={m.message} ></Message>
    );

    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body)
    }

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
                    <input
                    type='text'
                        placeholder='Enter your message...'
                        onChange={onNewMessageChange}
                        value={ newMessageBody }
                    ></input>
                    <i><button onClick={onSendMessageClick} ><AiOutlineSend /></button></i>
                </div>
            </div>

        </div>
    )
}

export default Dialogs
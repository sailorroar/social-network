import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

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
            <div className={classes.messages} >

                {messageElenents}

                <div className={classes.sendMessage} >
                    <div>
                        <textarea />
                    </div>
                    <div>
                        <button>Send</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Dialogs
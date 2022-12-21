import {
    InitialStateType,
    sendMessageAC,
    updateNewMessageAC
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    dialogsPage: InitialStateType
}
type MapDispatchPropsType = {
    updateNewMessageBody: (newText: string) => void
    sendMessage: () => void
}
export type PropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: MapStatePropsType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageBody: (message: string) => {
            dispatch(updateNewMessageAC(message))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

//TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState
export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Dialogs)
//const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
//export default DialogsContainer;

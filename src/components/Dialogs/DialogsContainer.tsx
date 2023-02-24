import {
    actions,
    InitialStateType,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import React from "react";

type MapStatePropsType = {
    dialogsPage: InitialStateType
    
}
type MapDispatchPropsType = {
    sendMessage: (message: string) => void
}
export type PropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose<React.FC>(
    connect(mapStateToProps, {...actions}),
    withAuthRedirect
)(Dialogs)

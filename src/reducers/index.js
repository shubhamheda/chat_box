import {combineReducers} from 'redux';
import serverReducer from './chat_box_server_reducer';

export default combineReducers(
    {
        server_reducer: serverReducer
    }
)


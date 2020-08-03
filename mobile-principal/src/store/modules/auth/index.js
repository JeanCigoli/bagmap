import {jsonUserFormat} from '../../../utils/json';
import { DATA_USER } from '../../../config/constant'
import { AsyncStorage } from 'react-native';

const INITIAL_STATE = {
    fetching: false,
    signed: false,
    user: {},
};

const auth = (state = INITIAL_STATE, action) => {
 
    switch (action.type) {
        case "@auth/AUTHENTICATE":
            AsyncStorage.setItem(DATA_USER, JSON.stringify(jsonUserFormat(action.payload.user)));
            state.user = jsonUserFormat(action.payload.user);
            state.signed = true;
            break;
        case "@auth/SIGN_OUT":
            state.signed = false;
            state.user = {};
            break;
            case "@auth/FETCHING_DATA":
            state.fetching = !state.fetching;
            break; 
          case "@auth/FETCHING_DATA_FINALLY":
            state.fetching = !state.fetching;
            break;
        default:
            return state;
    }

    return state;

};

export default auth;
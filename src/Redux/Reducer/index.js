import { combineReducers } from 'redux';
import { contohReducer } from './contohReducer';


export default combineReducers ({
    contoh : contohReducer
})
import { combineReducers } from 'redux'
import { commentsReducer } from './comments'
import { consultantReducer } from './consultantData'

export const rootReducer = combineReducers({
    consultant:consultantReducer,
    comments:commentsReducer
})
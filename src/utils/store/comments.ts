import { Comment } from "../models/comment"

interface CommentsState{
    comments: Comment[];
};

const initialState:CommentsState={
    comments:[
        {
            nickname:'Самуил',
            date:'2011-10-13',
            text:'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!'
        },
        {
            nickname:'Лилия Семёновна',
            date:'2011-10-14',
            text:'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?'
        },
        {
            nickname:'Лилия Семёновна',
            date:'2011-10-14',
            text:'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?'
        }
    ]
}

export const commentsReducer = (state = initialState, action:any)=>{
    if(action.type === 'ADD' && action.value.trim()){
        return{
            comments:[...state.comments, { nickname:'unregistered', date:new Date().toDateString(), text:action.value}]
        }
    }
    return state
}




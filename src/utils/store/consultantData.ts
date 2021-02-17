import { ConsultantData } from "../models/consData"

const initialState:ConsultantData = {
    name:'Вероника Ростова',
    job:'Менеджер по продажам',
    title:`Подберу для вас самые лучшие предложения.
    Мои услуги абсолютно бесплатны`,
    image:null, 
    services:[
        {type:'Ручное бронирование',amount:11},
        {type:'Пакетные туры',amount:3},
        {type:'Отели',amount:1}
    ],
    likes:141
}

export const consultantReducer = (state = initialState, action:any)=>{
    return state
}

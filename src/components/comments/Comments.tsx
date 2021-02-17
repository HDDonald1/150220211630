import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { format } from "date-fns"
import React from "react"
import './styles.scss'
import { library} from '@fortawesome/fontawesome-svg-core'
import { faHeart, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { Comment } from "../../utils/models/comment"
library.add( faHeart, faCommentAlt);
interface CommentsProps{
    likes:number;
    comments:Comment[];
}
export const Comments = (props:CommentsProps) =>{
    return(
        <div className="comments">
            <div className="wrapper">
                <div className="comments__info">
                    <div className="comments__switcher">
                        <span className="comments__latest-comments">Последние отзывы</span>
                        <span className="comments__all-comments active-switch">Все отзывы</span>
                    </div>
                    <div className="comments__stats">
                        <span className="comments__likes"><FontAwesomeIcon className='comments__icon' icon='heart'/>{props.likes}</span>
                        <span className="comments__commentaries"><FontAwesomeIcon className='comments__icon' icon="comment-alt"/>{props.comments.length}</span>
                    </div>
                </div>
                {
                    props.comments.map((item:any,index:number)=>{
                        return(
                            <div className="comment" key={index}>
                            <div className="comment__data">
                                <span className="comment__author">
                                    {item.nickname}
                                </span>
                                <span className="comment__date">
                                    {format(new Date(item.date), 'dd MMMM yyyy')}
                                </span>
                            </div>
                            <div className="comment__text">
                                {item.text}
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
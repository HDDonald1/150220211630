import React from 'react';
import './styles.scss'

export const CommentForm = (props:any) =>{
    return (
        <div className="card__comment-add">
            <div className="wrapper">
                <form className="card__comment-form" onKeyPress={(e)=>{if((e.keyCode == 10 || e.keyCode == 13) && e.ctrlKey){document.querySelector('form')?.submit();}}} onSubmit={(e)=>{e.preventDefault(); props.addComment(((e.target as HTMLFormElement).comment.value));(e.target as HTMLFormElement).comment.value='';}}>
                    <textarea name='comment' className='card__input' ></textarea>
                    <input type="submit" className='card__submit-comment' value='Написать консультанту'/>
                </form>
            </div>
        </div>
    );
    }
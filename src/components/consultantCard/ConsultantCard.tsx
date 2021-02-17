import './styles.scss';
import {connect} from 'react-redux';
import React from 'react';
import { CommentForm } from '../commentForm/CommentForm';
import { Comments } from '../comments/Comments';
import { ConsultantDescription } from '../consultantDescription/ConsultantDescription';
import { Comment } from '../../utils/models/comment';
import { Service } from '../../utils/models/service';

interface CardStatus{
    name:string;
    job:string;
    title:string;
    services:Service[];
    likes:number;
    image:string|null;
    comments:Comment[];
}

const ConsultantCard = (props:any) =>{    
    return (
        <div className="Card">
                <ConsultantDescription name={props.name} job={props.job} status={props.title} services={props.services}/>
                
                {/*
                    props.comments.map((comment:any, index:number)=>{
                        return <div key={index}>{comment.text}</div>
                    })
                    
                */}
                <Comments comments={props.comments} likes={props.likes}/>
                <CommentForm addComment={props.commentAdd}/>
        </div>
    );
    }
    function mapStateToProps(state:any){
        return{
            name:state.consultant.name,
            job:state.consultant.job,
            title:state.consultant.title,
            services:state.consultant.services,
            likes:state.consultant.likes,
            image:state.consultant.image,
            comments:state.comments.comments
        }
    }
    function mapDispatchToProps(dispatch:any){
        return{
            commentAdd:(data:any)=> dispatch({type:'ADD', value:data})
        }
    }
    export default connect(mapStateToProps,mapDispatchToProps)(ConsultantCard);
import React from 'react';
import "./posts.css";
// import data from '../data'
import ls from "local-storage"
import {
    LikeOutlined,
    CommentOutlined,
    EyeOutlined,
  } from '@ant-design/icons';
  

class Post extends React.Component{

    render(){
        let posted_data=JSON.parse(ls.get("postdata"))

        let display_data=posted_data.map((post,index)=>{
            return(
                <div className="post" key={index}>
                <h2 className="title">{post.title}</h2>
                <img src={post.image} width="260px" height="280px"/>
                <div className="post-info">
                <p><LikeOutlined />20</p>
                <p><CommentOutlined />10</p>
                <p><EyeOutlined />100</p>
                </div>
                </div>
            )
        })
        return (
            <div className="display">{display_data}</div>
        )
    }
}
export default Post;
import React,{Component} from 'react'

function Post(props){
const author=props.author
const text=props.text
const likes=props.likes


  return(
    <p>{author}<br/> {text} <br/> {likes}  likes </p>
    )
}

export default Post;
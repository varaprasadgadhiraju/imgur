import React from 'react';
import {Modal} from 'antd';
import ls from "local-storage";
import './App.css';
import signin_data from "./components/signin"
import Post from "./components/posts";
import Navbar from "./components/navbar";
import data from "./data"


class App extends React.Component {
  state={
    show_signin:false,
    show_signup:false,
    username:"",
    email:"",
    password:"",
   "repassword":"",
   title:"",
   image:"",
   show_upload:false,
  }
  componentWillMount(){
    let data=ls.get("userdata")
    if(!data){
      ls.set("userdata",JSON.stringify(signin_data)) 
    }
   
  }
  handleSignIn=()=>{
    this.setState({show_signin:true})
  }
  
  handleCancel=()=>{
    this.setState({show_signin:false,show_signup:false,show_upload:false})
  }
  handleSignUp=()=>{
    this.setState({show_signup:true})
  }
  handleChange=(e,name)=>{
    let state_copy={}
      state_copy[`${name}`]=e.target.value
      this.setState(state_copy)
  }
  Signup=()=>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(this.state.email)){
        alert( 'invalid email!');
        return;
    }
    if(!this.state.email.length || !this.state.password.length){ //0 - false any - true
        alert('Please enter email and password!');
        return;
    }
    let data=ls.get("userdata")
    data=JSON.parse(data)
    data.push({"email":this.state.email,"Password":this.state.password})
    data=JSON.stringify(data)
    ls.set("userdata",data)
    this.setState({
      show_signup:false,
      email:"",
      password:""
    })
  }
  handleOk=()=>{
     let email_found;let data=JSON.parse(ls.get("userdata"))
    for(let i=0;i<data.length;i++){
    if(data[i].email==this.state.email){
       email_found=this.state.email
       if(data[i].Password==this.state.password){
         alert("signed in successfully")
        
       }else{
         alert("incorrect password")
       }
    }
  }
  if(!email_found){
    alert("SignUp to login")
  }
  this.setState({show_signin:false,email:"",password:""}) 
}
componentWillMount(){
let Data=ls.get("postdata")
if(!Data){
  ls.set("postdata",JSON.stringify(data)) 
}
}
handleUpload=()=>{
this.setState({show_upload:true})
}
onOk=()=>{
let data=ls.get("postdata")
data=JSON.parse(data)
data.push({"image":this.state.image,"title":this.state.title})
data=JSON.stringify(data)
ls.set("postdata",data)
this.setState({
show_upload:false,
image:"",
title:""
})
} 
  render(){
    return (
      <div className="App">
        <Navbar handleSignIn={this.handleSignIn} handleSignUp={this.handleSignUp} handleUpload={this.handleUpload}/>        <Post/>
        <Modal  title="SignIn" visible={this.state.show_signin}  onOk={this.handleOk} onCancel={this.handleCancel}>
          <form className="form">
          <input type="email" style={{marginRight:"2px"}} className="input-box" value={this.state.email} onChange={(e)=>{this.handleChange(e,"email")}}placeholder="Enter email" name="email"></input><br></br>
          <input type="password" className="input-box" value={this.state.password} onChange={(e)=>{this.handleChange(e,"password")}} placeholder="Enter password" name="password"></input>
          </form>
        </Modal>
        <Modal title="SignUp!" visible={this.state.show_signup} onOk={this.Signup} onCancel={this.handleCancel}>
        <form className="form">
        <input type="text" className="input-box" value={this.state.username} onChange={(e)=>{this.handleChange(e,"username")}} placeholder="Enter username" name="username"></input>
        <input type="email" className="input-box" value={this.state.email} onChange={(e)=>{this.handleChange(e,"email")}} placeholder="Enter email" name="email"></input>
        <input type="password" className="input-box" value={this.state.password} onChange={(e)=>{this.handleChange(e,"password")}} placeholder="Enter password" name="password"></input>
        <input type="password" className="input-box" value={this.state.repassword} onChange={(e)=>{this.handleChange(e,"repassword")}} placeholder="re-enter password" name="re-password"></input>
        </form>
        </Modal>
         
         <Modal title="Basic Modal" visible={this.state.show_upload} onOk={this.onOk} onCancel={this.handleCancel}>
        <form>
        <input className="input-box" type="text" placeholder="paste your url here" value={this.state.image} onChange={(e)=>{this.handleChange(e,"image")}} ></input>
        <input className="input-box" type="text" placeholder="enter title here!" value={this.state.title} onChange={(e)=>{this.handleChange(e,"title")}} ></input>
        </form>
        </Modal>
        </div>
    );
    
  }
}

export default App;
import React from "react";

class Navbar extends React.Component{
   
    render(){
        return(
            <React.Fragment>
            <header className="App-header">
      <img src="header.png" alt="there is a img here!" className="nav-img"></img>
      <img src="imgur.png" alt="icon" className="icon-img"></img>
      <div id="button">
      <button onClick={this.props.handleUpload} className="button">New post</button>
      </div>
      <div className="search-bar">
      <input type="text" placeholder="images,#tags,@users oh my!"></input>
      </div>
      <div>
      <button className="search"><img src="search.png" alt="there is search bar" width="20px"></img></button>
      </div>
      <div id="signin">
      <button onClick={this.props.handleSignIn} className="signin">Sign In</button>
      </div>
      <div id="signup">
      <button onClick={this.props.handleSignUp} className="signup">Sign Up</button>
      </div>
      </header>
      </React.Fragment>
        )
    }
}
export default Navbar
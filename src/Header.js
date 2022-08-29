import React,{Component} from 'react'

class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
    };
  }

handleChange=e=>{
  const {name,value}=e.target;
  this.setState({[name]:value});
};





  render(){
    return(
      <div>
        <div className="login-form" >
            <h2>Login</h2>
            <div className="form-group">
               <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  id="Username"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
               />
               <i className="fa fa-lock"></i>
            </div>
        </div>
        <div className="login-form">
            <h2>Password</h2>
            <div className="form-group">
               <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
               />
               
            </div>
        </div>

        
        <button>Envoyer les donnees</button>
      </div>
      
  )
}
  
  
}


export default Header;
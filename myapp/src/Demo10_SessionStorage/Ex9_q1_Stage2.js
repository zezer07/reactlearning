import {Component} from'react'


class Ex9_q1_Stage2Comp extends Component

{
    constructor()
    
    {
      super();
      this.state = { firstName : "", lastName:""}
    }

    toStage3=()=>
    {
        sessionStorage["firstName"] = this.state.firstName
        sessionStorage["lastName"] = this.state.lastName
        history.push("/stage3");
    }

     
    
    render()
    {
         return (
           <div> 
               
               <h2> Stage2 </h2>

               First Name : <input type = 'text' onChange = {e =>{this.setState({firstName : e.target.value})}}/> <br/> <br/>
               Last Name : <input type = 'text' onChange = {e =>{this.setState({lastName : e.target.value})}}/>  <br/> <br/> <br/>

               <input type = 'button' value = 'Next' onClick = {this.toStage3}/>


          
           </div>
         )

    }
}

export default Ex9_q1_Stage2Comp ;
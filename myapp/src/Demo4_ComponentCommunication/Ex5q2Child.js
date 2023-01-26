
import {Component} from'react'


class Ex5q2ChildComp extends Component

{
    constructor()
    
    {
      super();
      this.state = { PreName : '', PreAge : '', PreCity : '' }
      
    }


    add=()=>
    {
           let Person = { Name : this.state.PreName, Age : this.state.PreAge, City : this.state.PreCity}

           this.props.callback(Person)


    }

    


   
    render()
    {
         return (
           <div> 

          <h2>Child Component</h2> 

          Name  : <input type = "text" onChange = {e=>{this.setState({PreName : e.target.value})}} /> <br/>
          Age  : <input type = "text" onChange = {e=>{this.setState({PreAge : e.target.value})}}/> <br/> 
          City  : <input type = "text" onChange = {e=>{this.setState({PreCity : e.target.value})}}/> <br/>
          <input type = "button" value="add" onClick = {this.add}/> 

           

           </div>
         )

    }
}

export default Ex5q2ChildComp;
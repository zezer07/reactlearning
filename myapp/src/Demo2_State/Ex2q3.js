import logo from '../logo.svg';
import '../App.css';
import {Component} from'react'


class Ex2q3Comp extends Component

{
    constructor()
    
    {
      super();
      this.state = {age : 'AA', name: 'BB'}
    }

     
    changeName =(e) =>

    {
      this.setState({name : e.target.value}) 
    }

    changeAge =(e) =>

    {
      this.setState({age : e.target.value}) 
    }
      
     swap =() =>
    {
      let temp = this.state.name
      this.setState({name : this.state.age, age : temp});
      
    }
    render()
    {
         return (
           <div> 

            Age <input type = "text" onChange = {this.changeAge}/> <br/>
            Name <input type = "text" onChange = {this.changeName}/> <br/>
            <input type = "button" value = "swap" onClick = {this.swap}/> <br/>

        {this.state.age} < br/>
        {this.state.name} < br/>


           </div>
         )

    }
}

export default Ex2q3Comp;
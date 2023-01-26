import logo from '../logo.svg';
import '../App.css';
import {Component} from'react'


class Ex2q2Comp extends Component

{
    constructor()
    
    {
      super();
      this.state = {num : 0, total : 0}
    }

    

    ajoute =() =>

    
    {
      this.setState({total : this.state.num + this.state.total});

    }

   
    render()
    {
         return (
           <div> 

           Num : <input type = "text" onChange = {e => this.setState({num: parseInt(e.target.value)})}/>
           <input type = "button" value = "Add" onClick = {this.ajoute}/> <br/>

           Total : {this.state.total};

           

           </div>
         )

    }
}

export default Ex2q2Comp;
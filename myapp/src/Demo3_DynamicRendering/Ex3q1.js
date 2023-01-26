
import '../App.css';
import {Component} from'react'
import './Ex3q1.css'


class Ex3q1Comp extends Component

{
    constructor()
    
    {
      super();
      this.state = {num:"" }
    }

    
 change =(e) =>

 {

  this.setState({num : e.target.value})

 }
   
    render()
    {

      let backcolor;

      if(this.state.num.length<5)
      {
            backcolor = "BackBlueColor"
      }

      else
      {
        backcolor = "BackRedColor"
      }

         return (
           <div> 

            <input  className = {backcolor} type = "text" onChange = {this.change}/>
           

           </div>
         )

    }
}

export default Ex3q1Comp;
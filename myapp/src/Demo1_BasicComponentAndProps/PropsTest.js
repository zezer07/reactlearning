import '../App.css';
import {Component} from'react'



class PropsComp extends Component

{
    constructor()
    
    {
      super();
    }
    
    render()
    {
         return (
           <div> 

           test
           
           <h1 style= {{color:'red'}}>Hello World</h1> 

           Name : {this.props.name} <br/>
           Age : {this.props.age}

           </div>
         )

    }
}

export default PropsComp;

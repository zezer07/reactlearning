
import '../App.css';
import {Component} from'react'



class Ex3q6_ChildChildComp extends Component

{
    constructor()
    
    {
      super();
      
    }

    

  

   
    render()
    {
         return (
           <div> 

             
             Title : Task {this.props.titre} <br/>

             Completed : {this.props.complet} 
           

           </div>
         )

    }
}

export default Ex3q6_ChildChildComp;
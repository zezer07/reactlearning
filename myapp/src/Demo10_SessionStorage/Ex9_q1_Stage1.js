import {Component} from'react'


class Ex9_q1_Stage1Comp extends Component

{
    constructor()
    
    {
      super();
    }

     toStage2=()=>

     {
        this.props.history.push("/stage2");
     }
    
    render()
    {
         return (
           <div> 
               
               <h2> Welcome Page </h2>

               <input type = 'button' value = 'Start' onClick = {this.toStage2}/>


          
           </div>
         )

    }
}

export default Ex9_q1_Stage1Comp ;
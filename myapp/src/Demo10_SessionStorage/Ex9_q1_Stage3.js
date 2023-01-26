import {Component} from'react'


class Ex9_q1_Stage3Comp extends Component

{
    constructor()
    
    {
      super();
     
    }

   
     
    
    render()
    {
         return (
           <div> 
               
               <h2> Stage3 </h2>

               First Name : {sessionStorage["firstName"]} <br/> <br/>
               Last Name :  {sessionStorage["lastName"]}

       


          
           </div>
         )

    }
}

export default Ex9_q1_Stage3Comp ;
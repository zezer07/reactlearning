
import '../App.css';
import {Component} from'react'
import AppContext from './AppContext'
import Ex5_q3_ChildChildComp from './Ex5_q3_ChildChild'


class Ex5_q3_ChildComp extends Component

{
    constructor()
    
    {
      super();
  
    }

    

  

   
    render()
    {


      
           

         return (

          <AppContext.Consumer>

         

            {

              data=> (


           <div> 

             <h2>

              Child

             </h2>

             Name :

             <ul>

               {data.Personnes_Names}


             </ul>

             <Ex5_q3_ChildChildComp/>

           </div>
           
           )

            }

            

           </AppContext.Consumer>


           

         
         )

         

          

    }
}

export default Ex5_q3_ChildComp;
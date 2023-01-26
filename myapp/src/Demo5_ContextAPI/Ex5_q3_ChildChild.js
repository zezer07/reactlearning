import logo from '../logo.svg';
import '../App.css';
import {Component} from'react'
import AppContext from './AppContext'


class Ex5_q3_ChildChildComp extends Component

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

            data=>(

           <div> 

           <h3> Child Child </h3>

           Ages : 

           <ul>

          

          {data.Personnes_Ages}


          </ul>


           </div>
            )

          }

            

           </AppContext.Consumer>

          
         )
         

    }
}

export default Ex5_q3_ChildChildComp;
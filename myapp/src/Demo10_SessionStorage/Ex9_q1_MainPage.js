import {Component} from'react'
import {Switch,Link,Route} from 'react-router-dom'
import Ex9_q1_Stage1Comp  from './Ex9_q1_Stage1';
import Ex9_q1_Stage2Comp  from './Ex9_q1_Stage2';
import Ex9_q1_Stage3Comp from './Ex9_q1_Stage3';



class Ex9_q1_MainPageComp extends Component

{
    constructor()
    
    {
      super();
    }
    
    render()
    {
         return (
           <div> 
               
               <h2> Main Page </h2>

               <Switch>

                   <Route exact path = "/" component = {Ex9_q1_Stage1Comp}/>
                   <Route path = "/stage2" component ={Ex9_q1_Stage2Comp}/>
                   <Route path = "/stage3" component = {Ex9_q1_Stage3Comp}/>


               </Switch>
          
          
           </div>
         )

    }
}

export default Ex9_q1_MainPageComp ;
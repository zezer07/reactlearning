import {Component} from 'react'
import {Switch,Link,Route} from 'react-router-dom'
import Ex9_q2_NamesComp from './Names'
import Ex9_q2_DetailsUserComp from './DetailsUser'

class Ex9_q2_MainPage extends Component

{
    constructor()
    
    {
      super();
    }
    
    render()
    {
         return (
           <div> 

             <h2> Hello From Main Page </h2>

             <Switch>

               <Route exact path = "/" component = {Ex9_q2_NamesComp}/>
               <Route path = "/users/:id" component={Ex9_q2_DetailsUserComp} />


             </Switch>
          
           </div>
         )

    }
}

export default Ex9_q2_MainPage;

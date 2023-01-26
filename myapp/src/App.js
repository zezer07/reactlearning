
import './App.css';
import {Component} from'react'

import Dynamic_rendersComp from './Demo3_DynamicRendering/Dynamic_renders'

import Ex7_q1Comp  from './Demo8_Forms/Ex7_q1'
import Demo6Comp from './Demo6_REST_API/Demo6'
import PropsComp from './Demo1_BasicComponentAndProps/PropsTest'

class App extends Component

{
    constructor()
    
    {
      super();
    }
    
    render()
    {
         return (
           <div> <h1>Hello from App</h1>

       <Dynamic_rendersComp/>
          
           </div>
         )

    }
}

export default App;

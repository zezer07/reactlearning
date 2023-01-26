import logo from '../logo.svg';
import '../App.css';
import {Component} from'react'


class ChildComp extends Component

{
    constructor()
    
    {
      super();
    }
    
    render()
    {
         return (
           <div> <h3>Hello from ChildComp</h3></div>
         )

    }
}

export default ChildComp;


import '../App.css';
import {Component} from'react'


class Ex3q2Comp extends Component

{
    constructor()
    
    {
      super();

      this.state = {Red : false , Green : false, Blue : false}
     
    }


   addR=(e)=>

   {
       
    if(e.target.checked)
    {
      this.setState({Red : true})
    }
   
    else this.setState({Red : false})
   }

   addG=(e)=>

   {

     if(e.target.checked)

    {
      this.setState({Green : true}) 
    }
   
     else this.setState({Green: false})
       
   }
   
   addB=(e)=>

   {
       
    if(e.target.checked)
    {
      this.setState({Blue : true})
    }
   
    else this.setState({Blue: false})
   }

    render()
    {

       let RedItem;
       let GreenItem;
       let BlueItem;

      if (this.state.Red == true)

      { RedItem =  <li> Red </li> }

      if (this.state.Green== true)

      { GreenItem =  <li> Green </li> }

      if (this.state.Blue == true)

      { BlueItem =  <li> Blue </li> }
      
    
         return (

           <div> 

           Red : <input type = "checkbox"  value = "Red" onClick = {this.addR} /> <br/>
           Green : <input type = "checkbox"  value = "Green" onClick = {this.addG}/> <br/>
           Blue : <input type = "checkbox"  value = "Blue" onClick = {this.addB} /> <br/>
            
             <ul>

             {RedItem}
             {GreenItem}
             {BlueItem}

             </ul>

           </div>
         )

    }
}

export default Ex3q2Comp;
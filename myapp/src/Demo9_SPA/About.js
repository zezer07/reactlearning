import {Component} from'react'
import {Link} from 'react-router-dom'

class AboutPageComp extends Component

{
    constructor()
    
    {
      super();
    }
    
    navigate = ()=>
    {

        //some logic...

        this.props.history.push("/contact"); //props from BrowserRouter 
    }
    render()
    {
         return (
           <div style = {{backgroundColor : 'green', width : '600px', height : '300px'}}> 
           <h1> About Page </h1>
           
           <Link to = "/contact"> To Contact Page </Link> <br/> <br/>

           <input type = "button" value = "To contact" onClick = {this.navigate}/>
           </div>
         )

    }
}

export default AboutPageComp;
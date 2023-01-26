import {Component} from 'react'
import {Switch,Link,Route} from 'react-router-dom'
import axios from 'axios'


class Ex9_q2_NamesComp extends Component

{
    constructor()
    
    {
      super();
      this.state = {users: []}
    }

    componentDidMount = async()=>
    {

      let resp = await axios.get("https://jsonplaceholder.typicode.com/users")
      this.setState({users: resp.data});

    }
    
    render()
    {

      let Names = this.state.users.map((item,index) => { return <li key = {index}><Link to = {"/users/" + item.id}>{item.name}</Link> </li>}
      )


         return (
           <div style = {{backgroundColor : 'red', width : '600px', height :'300px'}}> 

             <ul>

             {Names}

             </ul>
          
           </div>
         )

    }
}

export default Ex9_q2_NamesComp;

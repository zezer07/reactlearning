import {Component} from 'react'
import axios from 'axios';


class Ex6_q1Comp extends Component
{
  constructor()
  {
   super()
   this.state = {Id : '', email : '', name : '', Todols:[]}
  }

  EmailName=async()=>

  {
    
    let IdUser = await axios.get("https://jsonplaceholder.typicode.com/users/"+this.state.Id);
    this.setState( {email : IdUser.data.email, name : IdUser.data.name })

    if (IdUser.data.name.startsWith("E"))

    {
      let resp = await axios.get("https://jsonplaceholder.typicode.com/todos")
      let alltodos = resp.data

      let TodosId = alltodos.filter(x=> x.userId == this.state.Id)
      let TodolsIdTitle = TodosId.map(x=>x.title)

      this.setState({Todols : TodolsIdTitle }) 
       
    }

    else {this.setState({Todols :[]})}

   }



  render()
  {

    let items = this.state.Todols.map((item,index)=>
    {
      return <li key = {index}> {item}</li>
    })
    
 
    return(<div>
       
       Id : <input type = 'text' onChange ={e=>{this.setState({Id : e.target.value})}}/>
       <input type = 'button' value = 'Get' onClick = {this.EmailName}/><br/>
     
       {this.state.name} <br/>
       {this.state.email} <br/>
       
       <ul>

       {items}

       </ul>
       
    </div>)
  }
}



export default Ex6_q1Comp;
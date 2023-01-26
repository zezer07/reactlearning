
import {Component} from'react'
import utils from './Utiles'


class Ex7_q1Comp extends Component

{
    constructor()
    
    {
      super();
      this.state = { id : '', name :'', email: '' }
    }

    getData=async(num)=>

    {

      let user = await utils.getDataById(this.state.id)
      this.setState({name : user.name, email : user.email})
    
    }

    update=async(e)=>
    
    {
      e.preventDefault();
      let obj = {name : this.state.name, email : this.state.email}
      let status = await utils.updateUser(this.state.id, obj)
      console.log(status)

    }
    
    render()
    {
               return (

         <div> 

           User ID: <input type = 'text' onChange = {e=>this.setState({id: e.target.value})}/>
           <input type = 'button' value = 'Get Data' onClick = {this.getData}/> <br/> <br/>

           <form onSubmit = {this.update}>

            Name : <input type = 'text' name = 'name' value = {this.state.name} onChange = {e=>this.setState({name : e.target.value})}/> <br/>
            Email : <input type = 'text' name = 'email' value = {this.state.email} onChange = {e=>this.setState({email : e.target.value})}/> <br/>
            <input type="submit" value="Update" />

          </form>

           </div>
         )

    }
  }

export default Ex7_q1Comp;

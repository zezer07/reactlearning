
import {Component} from 'react'
import axios from 'axios';


class Demo6Comp extends Component
{
  constructor()
  {
    super()
    this.state = { users : [] , user : {} }
  }
/*
  getUsers = () =>
  {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(resp =>  this.setState({users : resp.data}) )
  }
  */

  getUsers = async () =>
  {
    let resp =  await axios.get("https://jsonplaceholder.typicode.com/users")
    this.setState({users : resp.data}) 
  }

  getUser = async () =>
  {
    let resp =  await axios.get("https://jsonplaceholder.typicode.com/users/7")
    this.setState({user : resp.data}) 
  }

  addUser = async () =>
  {

    let obj = { name : 'Ron' , email : 'ron@gmail.com'};

    let resp =  await axios.post("https://jsonplaceholder.typicode.com/users",obj)
    console.log(resp.data);
  }

  updateUser = async () =>
  {

    let obj = { name : 'Ron1' , email : 'ron1@gmail.com'};

    let resp =  await axios.put("https://jsonplaceholder.typicode.com/users/3",obj)
    console.log(resp.data);
  }

  deleteUser = async () =>
  {

    let resp =  await axios.delete("https://jsonplaceholder.typicode.com/users/3")
    console.log(resp.data);
  }

  render()
  {
    let items = this.state.users.map(item =>
      {
        return <li key={item.id}> name : {item.name} , city : {item.address.city} </li>
      })
 
    return(<div>
       
       <input type="button" value="Get All" onClick={this.getUsers} />
       <input type="button" value="Get User" onClick={this.getUser} /> <br/>
       <input type="button" value="Create User" onClick={this.addUser} /> <br/>
       <input type="button" value="Update User" onClick={this.updateUser} /> <br/>
       <input type="button" value="Delete User" onClick={this.deleteUser} /> <br/>


      Name : {this.state.user.name} <br/>
      Email : {this.state.user.email} <br/>


       <ul>
          {items}
       </ul>
    </div>)
  }
}



export default Demo6Comp;
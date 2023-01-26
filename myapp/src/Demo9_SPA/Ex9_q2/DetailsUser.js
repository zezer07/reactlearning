import {Component} from'react'
import axios from 'axios'



class Ex9_q2_DetailsUserComp extends Component

{
    constructor()
    
    {
      super();
      this.state ={ userDetails : {address : { city :''}}}

    }
    componentDidMount=async()=>
    {
      let User_Id = this.props.match.params.id
      let resp = await axios.get("https://jsonplaceholder.typicode.com/users/" + User_Id);
      this.setState({userDetails : resp.data})

    }
    
    render()
    {
      
         return (
          <div style = {{backgroundColor : 'blue', width : '600px', height:'300px'}}>  

            Name : {this.state.userDetails.name} <br/>
            Email : {this.state.userDetails.email} <br/>
            City : {this.state.userDetails.address.city} <br/>
            
           
            
           </div>
         )

    }
}

export default Ex9_q2_DetailsUserComp;

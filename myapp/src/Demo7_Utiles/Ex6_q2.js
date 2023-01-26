import {Component} from'react'
import utils from './Utiles'

class Ex6_q2Comp extends Component

{
    constructor()
    
    {
      super();
      this.state = {personne : {id : '', name : '', email : '', missions :[], firstPostTitle:''}}
    }

    newId=(e)=>
    
    {
      

      let newPersId = { id : e.target.value, name : this.state.personne.name, email : this.state.personne.email, missions : this.state.personne.missions, firstPostTitle : this.state.personne.firstPostTitle}
      this.setState({personne : newPersId})

    }
    
     newPers=async()=>

    {
        
        let resp1 = await utils.getUserFullData(this.state.personne.id)
        this.setState({personne : resp1})

    }


    render()
    { 
      let objTols = this.state.personne.missions.map((item,index)=>
      {

         return <li key ={index}> {item} </li>
      })
         return (
           <div> 

             Enter Id : <input type = 'text' onChange = {this.newId}/> <br/>
             <input type = 'button' value = 'details' onClick = {this.newPers}/> <br/> <br/> 

             Details of Person : <br/> <br/>

             

             Name : {this.state.personne.name} <br/>
             Email: {this.state.personne.email} <br/> <br/>

             Todols : <br/>

             <ul>
               {objTols}
             </ul>

             First post : <br/> <br/>



             {this.state.personne.firstPostTitle}
             

          
           </div>
         )

    }
}

export default Ex6_q2Comp;
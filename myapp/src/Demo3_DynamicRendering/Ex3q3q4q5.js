
import '../App.css';
import {Component} from'react'


class Ex3q3q4q5Comp extends Component

{
    constructor()
    
    {
      super();
      this.state = { Name :"", Age:"", City:"", persons : [
      {name : "Dana", age:"20",city: 'Haifa'},
      {name : "Ron", age:"22",city: 'TLV'},
      {name : "Dov", age:"31",city: 'Ashdod'},
      {name : "Vered", age:"19",city: 'Eilat'}]}
    }

    ajoute=()=>
    
    {
           let obj ={ name : this.state.Name, age : this.state.Age, city: this.state.City}
           this.setState({persons : [...this.state.persons,obj]})
    }

   
    render()
    {
      let personsItemsTab = this.state.persons.map((item,index)=>
      
      {
        return <tr key = {index}>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.city}</td>
          </tr>

      })

      let personsItemsList = this.state.persons.map((item,index)=>
      
      {
        return <ul key = {index}>{item.name} 
        
        <ul>

               <li>Age : {item.age}</li>
               <li>City: {item.city}</li>

       </ul> 
        
        
        </ul>
        
       

      })
         return (
           
           <div> 

             Name : <input type = "text" onChange = {e =>this.setState({Name: e.target.value})}/> <br/>
             Age : <input type = "text"  onChange = {e =>this.setState({Age: e.target.value})}/> <br/>
             City : <input type = "text" onChange = {e =>this.setState({City: e.target.value})}/> <br/>
             <input type = "button" value = "Add" onClick = {this.ajoute}/> <br/>

          <table border = "1">

            <thead>
             
             <tr>

               <th>Name</th>
               <th>Age</th>
               <th>City</th>

              
             </tr>

             </thead>

             <tbody>

             {personsItemsTab}

             </tbody>

             </table>
             
             {personsItemsList}

           </div>
         )

    }
}

export default Ex3q3q4q5Comp;
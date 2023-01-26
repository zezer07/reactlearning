
import './App.css';
import {Component} from'react'


class Ex3q3Comp extends Component

{
    constructor()
    
    {
      super();
      this.state = { persons : [
      {name : "Dana", age:"20",city: 'Haifa'},
      {name : "Ron", age:"22",city: 'TLV'},
      {name : "Dov", age:"31",city: 'Ashdod'},
      {name : "Vered", age:"19",city: 'Eilat'}]}
    }

    

   
    render()
    {

      let personsItems = this.state.persons.map((item,index)=>
      
      {
        return <tr key = {index}>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.city}</td>
          </tr>

      })
         return (
           <div> 

            <table>
             
             <tr>

               <td>Name</td>
               <td>Age</td>
               <td>City</td>

              
             </tr>

             {personsItems}

             </table>
           

           </div>
         )

    }
}

export default Ex3q3Comp;

import '../App.css';
import {Component} from'react'
import Ex3q6_ChildComp from './Ex3q6_Child';


class Ex3q6_ParentComp extends Component

{
    constructor()
    
    {
      super();
      this.state = { persons : [ {
        
      Name : 'Avi', Tasks : 
      [
        {title : "A", Completed:"true"},
        {title : "B", Completed:"False"},

      ] }, {
         
        Name : 'Dana', Tasks : 
        [
          {title : "C", Completed:"False"},
          {title : "D", Completed:"True"},
  
        ] 
      
      }

      ]
      
      
      }
    }
        
        
   
    render()
    {

      let obj = this.state.persons.map((item,index)=>
      { 
        return <Ex3q6_ChildComp TasksArray = {item.Tasks} PreName = {item.Name} key = {index} />
      }
      
      )

         return (
           <div> 


           <h1> Persons List : </h1>

           {obj}

           </div>
         )

    }
}

export default Ex3q6_ParentComp;
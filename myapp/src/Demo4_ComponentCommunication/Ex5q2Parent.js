
import {Component} from'react'
import Ex5q2ChildComp from './Ex5q2Child'


class Ex5q2ParentComp extends Component

{
    constructor()
    
    {
      super();

      this.state = {persons :[]}
    
    }

    call=(data)=>

    {

      this.setState({persons : [...this.state.persons,data]})

    }

    

    
   
    render()
    {
      
      
      let obj = this.state.persons.map((item,index)=>
      {

         return <li> {item.Name} is {item.Age} old , live in {item.City}</li>
      })

      
         return (
           <div> 

            <h1> Parent Component </h1> 

            <ul>

            {obj}

            </ul>
            

            <Ex5q2ChildComp callback = {this.call}/>


           

           </div>
         )

    }
}

export default Ex5q2ParentComp;
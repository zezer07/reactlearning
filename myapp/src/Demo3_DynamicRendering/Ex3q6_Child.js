
import '../App.css';
import {Component} from'react'
import Ex3q6_ChildChildComp from './Ex3q6_ChildChild';


class Ex3q6_ChildComp extends Component

{
    constructor(props)
    
    {
      super(props);
      this.state = { tasks : this.props.TasksArray}
      
    }


    
    

  

   
    render()
    {
          
      let obj = this.state.tasks.map((item,index)=>
      {return <Ex3q6_ChildChildComp titre = {item.title} complet ={item.Completed} key = {index} />})
      
       return (

           <div> 

             <h2>{this.props.PreName}</h2>
             <h3>Tasks:</h3>

            {obj}
          
           </div>
       )

    }
}

export default Ex3q6_ChildComp;
import logo from '../logo.svg';
import '../App.css';
import {Component} from'react'
import AppContext from './AppContext'
import Ex5_q3_ChildComp from './Ex5_q3_Child'


class Ex5_q3_ParentComp extends Component

{
    constructor()
    
    {
      super();
      this.state = { Persons : [], Name : '', Age :''}
      
    }

    add=()=>

    {

      let obj = { Name : this.state.Name, Age : this.state.Age}

      this.setState({Persons : [...this.state.Persons,obj]})


    }


   
    render()
    {

      let Names = this.state.Persons.map((item,index) =>
      {
        return <li key={index}> {item.Name} </li>
      })

      let Ages = this.state.Persons.map((item,index) =>
      {
        return <li key={index}> {item.Age} </li>
      })

         return (
           <div> 

             <h1> Parent </h1>
           
           <AppContext.Provider value = {{'Personnes_Names' : Names, 'Personnes_Ages' : Ages}}>

             Name : <input type = 'text' onChange ={ e => {this.setState({Name : e.target.value})}}/><br/>
             Age : <input type = 'text' onChange ={ e => {this.setState({Age : e.target.value})}}/><br/>
             <input type = 'button' value = 'add' onClick = {this.add}/>



            <Ex5_q3_ChildComp/>

           </AppContext.Provider>
           

           </div>
         )

    }
}

export default Ex5_q3_ParentComp;
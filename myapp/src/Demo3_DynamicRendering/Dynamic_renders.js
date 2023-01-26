import logo from '../logo.svg';
import '../App.css';
import {Component} from'react'
import  './Dynamic_renders.css';


class Dynamic_rendersComp extends Component

{
    constructor()
    
    {
      super();
      this.state = {isRed : false, isExist : false, colors : ['Red', 'Green']};
    }
    
    changecolor =() =>
    {
      this.setState({isRed : !this.state.isRed});
    }

    create = ()=>
    {
      this.setState({isExist : !this.state.isExist})
    }

    addColor =()=>

    {
     
      let tab = this.state.colors;

      tab.push("Yellow")

      this.setState({colors : tab})


    }
    render()
    {

    let styleName ;
  
    if (this.state.isRed)

     {styleName = "RedStyle";}

     else 

     {styleName = "BlueStyle";}

     let obj;

     if(this.state.isExist)

     {
      obj = <div>Dynamic Created div</div>;
     }
     
     let items = this.state.colors.map((item,index) =>
      {
        return <h4 key={index}>{item}</h4>
      })
         return (
           <div> 

             <input type = "button" value = "change" onClick = {this.changecolor}/>
             
             <h1 className = {styleName} >Hello from ChildComp</h1> <br/>

             <input type = "button" value = "show/hidd" onClick = {this.create}/> <br/>

             {obj}

             <input type = "button" value = "add" onClick = {this.addColor}/>

             {items}

             
             </div>
         )

    }
}

export default  Dynamic_rendersComp;

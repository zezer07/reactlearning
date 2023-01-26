import {Component} from 'react'
import Demo2_ChildComp from './Demo2_Child'


class Demo2_ParentComp extends Component
{
  constructor()
  {
    super()
    this.state = {  dataToChild : 'Hello fom parent',
                     dataFromChild : ''   };
  }
  render()
  {

    

    return(<div>
        
        <h1>Parent Comp</h1>
        <input type="button" value="change data" onClick={() => this.setState({dataToChild : "New Message"})} />
        {this.state.dataFromChild}  <br/> <br/>
        

        <Demo2_ChildComp callback={ data => this.setState({dataFromChild : data})   } dataFromParent={this.state.dataToChild} />

        <h1>Parent Footer</h1>
    </div>)
  }
}



export default Demo2_ParentComp;

import {Component} from 'react'


class Demo2_ChildComp extends Component
{
  constructor(props)
  {
    super()
  }

  sendDataToParent = () =>
  {
    debugger;
    this.props.callback("Hello from chiild")
  }

  render()
  {
    return(<div>    

          <h4>Child Comp</h4>

          {this.props.dataFromParent} <br/> <br/>

          <input type="button" onClick={this.sendDataToParent} value="Send data to parent" />

          <h4>Child Footer</h4>
    </div>)
  }
}



export default Demo2_ChildComp;

import {Component} from'react'

class ProductPageComp extends Component

{
    constructor()
    
    {
      super();
      this.state = { prodId:0}
    }
    
    componentDidMount()
    {
        this.setState({prodId : this.props.match.params.id})

        // now its possible to send request to the server with "Get by id"
    }
    render()
    {
         return (
           <div style = {{backgroundColor : 'blue', width : '600px', height : '300px'}}> 
           <h1> Product Page </h1>

           {this.state.prodId}
           
           </div>
         )

    }
}

export default ProductPageComp;
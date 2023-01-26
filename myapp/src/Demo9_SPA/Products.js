import {Component} from'react'
import {Link} from 'react-router-dom'

class ProductsPageComp extends Component

{
    constructor()
    
    {
      super();
      this.state = {selectedProId : '0'}
    }
    
    render()
    {
         return (
           <div style = {{backgroundColor : 'yellow', width : '600px', height : '300px'}}> 
           <h1> Products Page </h1>

           ProdId : <input type = "text" onChange = {e=>{this.setState({selectedProId : e.target.value})}}/> <br/>

           <Link to ={ "/product/" + this.state.selectedProId }> Get product data </Link> <br/>

           <ul>

             <li>
                 <Link to = "/product/1"> LapTop </Link> 
             </li>

             <li>
                 <Link to = "/product/2"> Watch </Link>
             </li>

           </ul>
           
           </div>
         )

    }
}

export default ProductsPageComp;
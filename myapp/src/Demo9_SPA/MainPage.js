
import {Component} from'react'
import AboutPageComp from './About'
import ContactPageComp from './Contact'
import ProductPageComp from './Product'
import ProductsPageComp from './Products'
import {Switch,Link,Route} from 'react-router-dom'

class MainPageComp extends Component

{
    constructor()
    
    {
      super();
    }
    
    render()
    {
         return (
           <div> <h1>Hello from MainPage</h1>


           <Link to = "/contact"> To contact Page </Link> <br/>
           <Link to = "/about"> To about Page </Link> <br/>
           <Link to = "/products"> To Products Page </Link> <br/>
          


           <Switch>


               <Route exact path = "/" component = {ContactPageComp}/>
               <Route path = "/contact" component = {ContactPageComp}/>
               <Route path = "/about" component = {AboutPageComp}/>
               <Route path = "/products" component = {ProductsPageComp}/>
               <Route path = "/product/:id" component = {ProductPageComp}/>
                   
               
           </Switch>



          <h5> SPA footer </h5>
           </div>
         )

    }
}

export default MainPageComp;

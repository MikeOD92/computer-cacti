const React = require('react');
const AppLayout = require('./layouts/AppLayout');
//const Purchase = require('./components/Purchase');

class Index extends React.Component{
    render(){
        return(
        <AppLayout
            title="Index"
            pageClass="index">
           <header>
               <h1> Computer Cacti</h1>
                <nav>
                    <ul className="nav">
                        <li><a href="#about"> About Us</a></li>
                        <li><a href="#shipping"> Shipping</a></li>
                        <li><a href="#products"> Products</a></li>
                    </ul>
                </nav>
            </header>    

            <div className="grid-container"> 

                <div className="logo">
                </div>

                <div className="container" id="about">  
                    <h2 id="title"> About us </h2>
                        <p> Only the finest 3-d cacti</p>
                        <p>at elementum eu facilisis sed odio morbi. Diam ut venenatis tellus in metus vulputate eu. Amet facilisis magna etiam tempor orci eu. Vulputate ut pharetra sit amet aliquam. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Urna molestie at elementum eu. Adipiscing vitae proin sagittis nisl. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Leo in vitae turpis massa sed elementum tempus egestas sed. Adipiscing elit duis tristique sollicitudin nibh sit. In egestas erat imperdiet sed euismod nisi porta. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Sed libero enim sed faucibus.</p>
                </div> 

                <div className="tall-tile">

                </div> 
                
                <div className="container" id="greencontainer">
                    <span id="shipping"/>
                    <h2> Shipping</h2>
                    <p> Shipping plants can be tricky but computer plants are easy, just click and download your 3-d model.</p>
                </div>    
    
            <div className="container product">
            
                    <h2 id="products"> Cacti {'&'} Planters </h2>
                    <a className="editlink" href="/shop/new"> Add a New Product </a>

                <div id="product-grid">
            {this.props.products.map((product, i)=>{
                
                const priceTag = "$" + product.price;
                return(
                    <div key={i}>
                        <a href={`/shop/${product.id}`}>
                            <h3>{product.name}</h3>
                        <img src={`${product.img}`}/>
                        </a>
                    <p>{product.description}</p>
                    <p className="price">{product.price? priceTag: ""}</p>
                    
                    </div>
                )
            })}
                </div> 
            </div>
            
        </div>
        
            <footer>
          
                <address>
                    <ul>
                        <li> ~ phone ~ 666-666-6666 ~</li>
                        <li> ~ email ~  cactusfreak@cactus.io ~</li>
                        <li> ~ ig ~ @computer_cacti ~</li>
                    </ul>
                </address>
                
            </footer>     
           
            </AppLayout>
            )
            }
        };

            {/* <div id="product-grid">
            {this.props.products.map((product, i)=>{
                
                const priceTag = "$" + product.price;
                return(
                    <div key={i}>
                        <a href={`/shop/${product.id}`}>
                            <h3>{product.name}</h3>
                        <img src={`${product.img}`}/>
                        </a>
                    <p>{product.description}</p>
                    <p className="price">{product.price? priceTag: ""}</p>
                    
                    </div>
                )
            })}
        </div> */}
        
    

module.exports = Index
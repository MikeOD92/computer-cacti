const React = require('react');
const AppLayout = require('./layouts/AppLayout');
const Button = require('./components/Button');
const Purchase = require('./components/Purchase');
class Show extends React.Component{
    render(){

        let qty = "";
        let purchaseButton = "";

        if (this.props.product.qty <= 0){
             qty = "SOLD OUT"
        } else {
             qty = this.props.product.qty
        }
        return(
            <AppLayout
                title="Product Show Page"
                pageClass="show">
                <div>
                    <h1> {this.props.product.name} </h1>
                    <img src={this.props.product.img}/>
                    <div className="product-info">
                        <p className='discription'> {this.props.product.description}</p>
                        <br/>
                        <p> $ {this.props.product.price}</p>
                        <br/>
                        <p> Qty: {qty}</p>
                    </div>
                       <div className="button-bar">
                         <Button
                        endpoint={`/${this.props.product._id}?_method=DELETE`}
                        name={this.props.product.name}/>
                       {qty!=="SOLD OUT"? <Purchase endpoint={`/${this.props.product._id}/buy`}/>: ""}
                    <a className="editlink" href={`/${this.props.product._id}/edit`}> Edit {this.props.product.name}</a>
                    <a className="back" href={'/'}> Back </a>
                        </div>
                </div>
            </AppLayout>
        )
}
}
module.exports = Show
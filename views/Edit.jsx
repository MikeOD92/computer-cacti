const React = require('react');
const AppLayout = require("./layouts/AppLayout");

class Edit extends React.Component{
    render(){
        return(
            <AppLayout
                title="Edit Product"
                pageClass="edit">
                <form action={`/shop/${this.props.product._id}?_method=PUT`} method="POST">
                    <label>Name:<input type="text" name="name" value={this.props.product.name}/></label><br/>
                    <label>Description:<input type="text" name="description" value={this.props.product.description}/></label><br/>
                    <label>img:<input type="text" name="img" value={this.props.product.img}/></label><br/>
                    <label>Price:<input type="number" name="price" value={this.props.product.price}/></label><br/>
                    <label>Qty:<input type="number" name="qty" value={this.props.product.qty}/></label><br/>
                    <input className="editlink" type="submit" value={'Edit This Product'}/>
                </form>
                <a href={'/shop'}> Back </a>


            </AppLayout>
        )
}
}
module.exports = Edit
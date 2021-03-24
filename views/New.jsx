const React = require('react');
const AppLayout = require('./layouts/AppLayout');

class New extends React.Component{
    render(){
        return(
            <AppLayout
                title="New Product"
                pageClass="new">
                 <form action="/shop" method="POST">
                    <label>Name:<input type="text" name="name"/></label>
                    <label>Description:<input type="text" name="description"/></label>
                    <label>img:<input type="text" name="img"/></label>
                    <label>Price:<input type="number" name="price"/></label>
                    <label>Qty:<input type="number" name="qty"/></label>
                    <input className='editlink' type="submit" value={'Create New Product'}/>

                </form>
                <a href={'/shop'}> Back </a>


            </AppLayout>
             
        )
}
}

module.exports = New
const React = require('react');

class Purchase extends React.Component{
    render(){
        return(
            <form action={this.props.endpoint} method='POST'> 
                <input className="buy" type="submit" value="Buy"/> 
            </form>
        )
    }}


module.exports = Purchase;
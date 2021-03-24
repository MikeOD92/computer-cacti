const React = require('react');

class Button extends React.Component{
    render(){
        return(
            <form action={this.props.endpoint} method="POST">
                <input className="delete" type="submit" value={`Delete ${this.props.name}`}></input>
            </form>
            )
    }
}

module.exports = Button;
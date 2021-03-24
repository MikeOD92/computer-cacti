const React = require('react');

class AppLayout extends React.Component{
    render(){
        return(
           <html lang="en">
           <head>
               <meta charSet="UTF-8"/>
               <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
               <link rel="stylesheet" href="/css/main.css"/>
               <link rel="preconnect" href="https://fonts.gstatic.com"/>
               <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@800&family=Raleway&display=swap" rel="stylesheet"/>

               <title>  {this.props.title} </title>
           </head>
           <body>
               <div className={this.props.pageClass}>
               {this.props.children}
               </div>
           </body>
           </html>
        )
}
}
module.exports = AppLayout
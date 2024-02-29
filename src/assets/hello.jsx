
function Hello(name,message) {
  console.log('App component')
    return (
  
      <div>
        <h1>hello {name} {message} </h1>
      </div>
    ) 
        
  }

  
  export default Hello
 
  import PropType from 'prop-types'
  Hello.prototype={
    name: PropType.string.isRequired,
    message: PropType.string
  }
    Hello.defaultProps = {
        name : "Guest",
        message: "Good moring" 
    }
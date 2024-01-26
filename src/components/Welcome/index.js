import {Component} from 'react'
import './index.css'
class Welcome extends Component {
  state = {
   isClicked:true,
  }
changeToText=()=>{
  this.setState(prevState=>{
    if (!prevState.isClicked){
      return 
    }
  })
}
  render() {
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Welcome</h1>
          <p className="para">Thank you!Happy Learning</p>
          <div className="button-container">
            <button className="button" onClick={this.changeToText}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome

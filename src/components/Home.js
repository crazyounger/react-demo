import React ,{ Component } from 'react';
import PropTypes from "prop-types";

class Home extends Component{

  constructor(props){
    super(props);
    this.state = {
      age : this.props.age,
      homeLink: "new home Link"
    }
  }

  onMakeOlder(){
    this.setState({
      age: this.state.age +1
    })
  }

  onChangeLink(){
      this.props.changeLink(this.state.homeLink);
  }

  render(){

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>Hi , This is Home Page</h1>
            { "this is very good thing "}
            { "2+2 =" + (2+2)}
            <p>
              {"name is " + this.props.name}
            </p>
            <span>there is somthing need todos : </span>
            <ul>
              {this.props.works.map((work,index) => <li key={index}>{work}</li>)}
            </ul>

            <div>{this.props.children}</div>
          </div>
        </div>

        <span>current age is { this.state.age}</span>
        <button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Make me older</button><hr/>
        <button className="btn btn-primary" onClick={this.props.greet.bind(this,this.state.age)}>greet</button><hr/>
        <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>changeLink</button>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  children: PropTypes.element.isRequired,
  greet: PropTypes.func,
  changeLink: PropTypes.func
}

export default Home;

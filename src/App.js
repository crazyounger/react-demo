import React,{Component} from "react";
import Home from "./components/Home";
import Header from "./components/Header";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      homeLink: "Home Link init"
    };
    console.log("constructor init")
  }

  onGreet(age){
      alert("onGreet!! now age is " + age);
      // console.log(age);
  }

onLinkChange(newLinkName){
  this.setState({
    homeLink: newLinkName
  });
}

  render(){

    console.log("render")
    const works = ["eat foot","play football" , "sleep"];

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Header homeLink={this.state.homeLink} />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>Hello !!!</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Home name={this.props.name} works={works} age={2} greet={this.onGreet}
                changeLink={this.onLinkChange.bind(this)}>
              <p>I'm the child of home </p>
            </Home>
          </div>
        </div>
      </div>
    );
  }

  /************mounting lifecycle***************************/
  componentWillMount(){
    console.log("componentWillMount")
  }

  componentDidMount(){
    console.log("componentDidMount")
  }

  /************unmounting lifecycle************************/

  /************updating  lifecycle*************************/
  componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps")
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("shouldComponentUpdate")
    return true;
  }

  componentWillUpdate(nextProps,nextState){
    console.log("componentWillUpdate")
  }

  componentDidUpdate(preProps,preState){
    console.log("componentDidUpdate")
  }


}
export default App;

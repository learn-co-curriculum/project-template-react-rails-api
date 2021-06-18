import React from "react";
import "../../App.css";
import Login from './Login'; 
import Register from './Register'
import './style.css'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div style={{backgroundImage: `url("https://www.oregonmetro.gov/sites/default/files/styles/slideshow_compact/public/2019/07/23/MetroPaint%20green%20leaves.jpg?itok=Aid4g3mv")`, backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "100vw", height: "100vh"}} className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login onLogin={this.props.onLogin} containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register onLogin={this.props.onLogin} containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default Index;
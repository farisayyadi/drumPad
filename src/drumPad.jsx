import React from "react";

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    this.playSound(e.key);
  };

  playSound = (key) => {
    if (this.props.power) {
      key = key.toUpperCase();

      if (this.props.value.keyTrigger === key) {
        this.setState({
          isPlaying: true,
        });
      }

      const sound = document.getElementById(key);
      sound.play();
      this.props.onClick(this.props.value.id);
      setTimeout(() => {
        this.setState({
          isPlaying: false,
        });
      }, 100);
    }
  };

  render() {
    return (
      <button
        className={"drum-pad " + (this.state.isPlaying ? "is-playing" : "")}
        id={this.props.value.id}
        onClick={() => this.playSound(this.props.value.keyTrigger)}
      >
        {this.props.value.keyTrigger}
        <audio
          preload="none"
          className="clip"
          id={this.props.value.keyTrigger}
          src={this.props.value.url}
        ></audio>
      </button>
    );
  }
}

export default DrumPad;

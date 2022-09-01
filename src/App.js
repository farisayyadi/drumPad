import React from 'react';
import DrumPad from './drumPad';
import './App.css';
import './drumPad.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bankInfoOne: [
        {
          keyCode: 81,
          keyTrigger: 'Q',
          id: 'Heater-1',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
        },
        {
          keyCode: 87,
          keyTrigger: 'W',
          id: 'Heater-2',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        },
        {
          keyCode: 69,
          keyTrigger: 'E',
          id: 'Heater-3',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        },
        {
          keyCode: 65,
          keyTrigger: 'A',
          id: 'Heater-4',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
        },
        {
          keyCode: 83,
          keyTrigger: 'S',
          id: 'Clap',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        },
        {
          keyCode: 68,
          keyTrigger: 'D',
          id: 'Open-HH',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        },
        {
          keyCode: 90,
          keyTrigger: 'Z',
          id: "Kick-n'-Hat",
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
        },
        {
          keyCode: 88,
          keyTrigger: 'X',
          id: 'Kick',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
        },
        {
          keyCode: 67,
          keyTrigger: 'C',
          id: 'Closed-HH',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        }
      ],
      bankInfoTwo: [
        {
          keyCode: 81,
          keyTrigger: 'Q',
          id: 'Chord-1',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
        },
        {
          keyCode: 87,
          keyTrigger: 'W',
          id: 'Chord-2',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
        },
        {
          keyCode: 69,
          keyTrigger: 'E',
          id: 'Chord-3',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
        },
        {
          keyCode: 65,
          keyTrigger: 'A',
          id: 'Shaker',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
        },
        {
          keyCode: 83,
          keyTrigger: 'S',
          id: 'Open-HH',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
        },
        {
          keyCode: 68,
          keyTrigger: 'D',
          id: 'Closed-HH',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
        },
        {
          keyCode: 90,
          keyTrigger: 'Z',
          id: 'Punchy-Kick',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
        },
        {
          keyCode: 88,
          keyTrigger: 'X',
          id: 'Side-Stick',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
        },
        {
          keyCode: 67,
          keyTrigger: 'C',
          id: 'Snare',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
        }
      ],
      keyPressed: "",
      power: true,
      currentBankId: 'Heater-1',
      bankName: "One",
    };
  }

  handleClick = (id) => {
    this.setState({
      keyPressed: id
    })
  }

  powerControl = () => {
    this.setState({
      power: !this.state.power,
    })
  };

  bankControl = () => {
    const bankName = this.state.bankName === "One" ? "Two" : "One";
    this.setState({ bankName })
  }

  render() {
    const powerSlider = this.state.power ? { float: 'right' } : { float: 'left' };
    const bankSlider = this.state.bankName === "One" ? { float: 'right' } : { float: 'left' };
    return (
      <div className='container' id='drum-machine'>
        <div className="btn">
          {this.state["bankInfo" + this.state.bankName].map((info) => (
            <DrumPad key={info.id} value={info} onClick={this.handleClick} power={this.state.power} />
          ))}
        </div>
        <div className="controler">
          <div className="control">
            <p>Power{this.state.power ? "On" : "Off"}</p>
            <div className='select' onClick={this.powerControl}>
              <div className={"inner " + (this.state.power ? "" : "powerOff")} style={powerSlider}>
              </div>
            </div>
          </div>
          <div className='volume-slider'>
            <input
              type='range'
            />
          </div>
          <div className='control'>
            <p>Bank</p>
            <div className='select' onClick={this.bankControl} >
              <div className='inner' style={bankSlider} />
            </div>
          </div>
          <div id="display" >
            {this.state.keyPressed}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

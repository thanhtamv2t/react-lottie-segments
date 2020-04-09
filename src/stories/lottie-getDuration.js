import React from 'react';
import Lottie from '../index';
import * as animationDataA from './pinjump.json';
import * as animationDataB from './TwitterHeart.json';

export default class LottieDuration extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isStopped: false,
      isPaused: false,
      speed: 1,
      direction: 1,
      isDataA: true,
      numberOfFrames: null
    };
  }


  render() {
    const centerStyle = {
      display: 'block',
      margin: '10px auto',
      textAlign: 'center',
    };
    const { isStopped, isPaused, direction, speed, isDataA } = this.state;
    const defaultOptions = { animationData: (isDataA ? animationDataA : animationDataB) };

    const getLengthInFrames = (numFrames) => { this.setState({numberOfFrames: numFrames})} ;

    return (<div>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={isStopped}
        isPaused={isPaused}
        getDuration={getLengthInFrames}
        speed={speed}
        direction={direction}
      />

      <p style={centerStyle}>Speed: x{speed}</p>
      
      <p style={centerStyle}>Duration: {this.state.numberOfFrames}</p>
      
      <button
        style={centerStyle}
        onClick={() => this.setState({ isDataA: !isDataA })}
      >toggle animation</button>
    </div>);
  }
}

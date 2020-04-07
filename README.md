# Lottie Animation View for React 


This is a fork of [grzegorz-s/react-lottie](https://github.com/grzegorz-s/react-lottie), which is itself forked from [chenqingspring/react-lottie](https://github.com/chenqingspring/react-lottie)

## Differences
This fork is a work in progress. The goal is to expand the wrapper to handle a larger set of the [lottie-web](https://github.com/airbnb/lottie-web) API. 

Newly implemented features:

- goToAndPlay
- goToAndStop
- playSegments

## Demo
[https://SilverFox70.github.io/react-lottie-segments](https://SilverFox70.github.io/react-lottie-segments)


## Wapper of bodymovin.js

[bodymovin](https://github.com/bodymovin/bodymovin) is [Adobe After Effects](http://www.adobe.com/products/aftereffects.html) plugin for exporting animations as JSON, also it provide bodymovin.js for render them as svg/canvas/html.

## Why Lottie?

#### Flexible After Effects features
We currently support solids, shape layers, masks, alpha mattes, trim paths, and dash patterns. And we’ll be adding new features on a regular basis.

#### Manipulate your animation any way you like
You can go forward, backward, and most importantly you can program your animation to respond to any interaction.

#### Small file sizes
Bundle vector animations within your app without having to worry about multiple dimensions or large file sizes. Alternatively, you can decouple animation files from your app’s code entirely by loading them from a JSON API.

[Learn more](http://airbnb.design/introducing-lottie/) › http://airbnb.design/lottie/

Looking for lottie files › https://www.lottiefiles.com/

## Installation

Install through npm:
```
npm install --save react-lottie-segments
```

## Usage

Import pinjump.json as animation data

```jsx
import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from './pinjump.json'

export default class LottieControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }

  render() {
    const buttonStyle = {
      display: 'block',
      margin: '10px auto'
    };

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return <div>
      <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>
      <button style={buttonStyle} onClick={() => this.setState({isStopped: true})}>stop</button>
      <button style={buttonStyle} onClick={() => this.setState({isStopped: false})}>play</button>
      <button style={buttonStyle} onClick={() => this.setState({isPaused: !this.state.isPaused})}>pause</button>
    </div>
  }
}

```

### props
The `<Lottie />` Component supports the following components:

**options** *required*

the object representing the animation settings that will be instantiated by bodymovin. Currently a subset of the bodymovin options are supported:

>**loop** *options* [default: `false`]
>
>**autoplay** *options* [default: `false`]
>
>**animationData** *required*
>
>**rendererSettings** *required* 

**direction** *optional* (default: 1, which is forward)
> NOTE: This seems to only effect the first play through if you are looping.

**width** *optional* [default: `100%`]

pixel value for containers width.

**height** *optional* [default: `100%`]

pixel value for containers height.

**eventListeners** *optional* [default: `[]`]

This is an array of objects containing a `eventName` and `callback` function that will be registered as  eventlisteners on the animation object. refer to [bodymovin#events](https://github.com/bodymovin/bodymovin#events) where the mention using addEventListener, for a list of available custom events.

example:
```jsx
eventListeners=[
  {
    eventName: 'complete',
    callback: () => console.log('the animation completed:'),
  },
]
```

***
### goToAndStop({value, isFrame})
- `value`: numeric value.
- `isFrame`: defines if first argument is a time based value or a frame based (default false).
> NOTE: This effectively jumps to the indicated position and pauses the video on that frame or timestamp. Since the signature is the same, please see goToAndPlay for example usage.
***
### goToAndPlay({value, isFrame})
- `value`: numeric value.
- `isFrame`: defines if first argument is a time based value or a frame based (default false).

*Example*
``` jsx
  const startPoint = {
    value: 80,
    isFrame: true
  };

  return (
    <div data-component="LottieContainer" className={styles.outer}>
      <Lottie
        options={defaultOptions}
        height="auto"
        width="100vw"
        isStopped={isStopped}
        isPaused={isPaused}
        goToAndPlay={startPoint}
      />
      <button
        style={buttonStyle}
        type="button"
        onClick={() => setIsStopped(!isStopped)}
      >
        {isStopped ? 'play' : 'stop'}
      </button>
      <button
        type="button"
        style={buttonStyle}
        onClick={() => setIsPaused(!isPaused)}
      >
        {isPaused ? 'unpause' : 'pause'}
      </button>
    </div>
  );
};
```

> NOTES: Jumps to the indicated frame or time and plays. If 'Loop' is set in options, it will replay the whole animation from the beginning once it reaches the end.
***
### playSegments({segments, forceFlag})
- `segments`: array. Can contain 2 numeric values that will be used as first and last frame of the animation. Or can contain a sequence of arrays each with 2 numeric values.
- `forceFlag`: boolean. If set to false, it will wait until the current segment is complete. If true, it will update values immediately.

*Example*
``` jsx
  const sequence = {
    segments: [0, 80],
    forceFlag: true
  }
  return (
    <div data-component="LottieContainer" className={styles.outer}>
      <Lottie
        options={defaultOptions}
        height="auto"
        width="100vw"
        isStopped={isStopped}
        isPaused={isPaused}
        playSegments={sequence}
      />
      <button
        style={buttonStyle}
        type="button"
        onClick={() => setIsStopped(!isStopped)}
      >
        {isStopped ? 'play' : 'stop'}
      </button>
      <button
        type="button"
        style={buttonStyle}
        onClick={() => setIsPaused(!isPaused)}
      >
        {isPaused ? 'unpause' : 'pause'}
      </button>
    </div>
  );
```
***

## Related Projects

* [Bodymovin](https://github.com/bodymovin/bodymovin) react-lottie is a wrapper of bodymovin
* [Angular Lottie](https://github.com/chenqingspring/ng-lottie) angular implementation
* [Vue Lottie](https://github.com/chenqingspring/vue-lottie) vue implementation
* [React Native Lottie](https://github.com/airbnb/lottie-react-native) react native implementation by airbnb
* [IOS Lottie](https://github.com/airbnb/lottie-ios) ios implementation by airbnb
* [Android Lottie](https://github.com/airbnb/lottie-android) android implementation by airbnb

## Contribution
Your contributions and suggestions are heartily welcome.

## License
MIT


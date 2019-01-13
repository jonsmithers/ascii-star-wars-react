import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const FRAME_RATE = 67; // 15 frame/sec
const FRAME_HEIGHT = 14; // includes frameWait header

class AsciiPlayer extends PureComponent {
  static propTypes = {
    loop: PropTypes.bool,
    startingFrameIndex: PropTypes.number,
    txt: PropTypes.string,
  };
  static defaultProps = {
    startingFrameIndex: 0,
    loop: false,
    txt: null,
  };
  state = {
    frameIndex: null,
  };
  componentDidUpdate(oldProps) {
    const {txt, startingFrameIndex} = this.props;
    const {txt: oldTxt} = oldProps;
    if (txt !== oldTxt) {
      console.time('split txt');
      const lines = txt.split('\n')
      console.timeEnd('split txt');
      this.setState( {
        frameWait: (parseInt(lines[startingFrameIndex*FRAME_HEIGHT]) - 1),
        frameIndex: startingFrameIndex*FRAME_HEIGHT,
        lines,
      });
      this.ticker = setInterval(() => {
        this.setState(({lines, frameIndex, frameWait}) => {
          const { loop } = this.props;
          // console.log('tick', {frameIndex, frameWait});
          if (frameWait) {
            return {frameWait: Math.max(frameWait-1, 0)}
          }
          let newFrameIndex = frameIndex + 1;
          if (newFrameIndex * FRAME_HEIGHT >= lines.length) {
            if (loop) {
              newFrameIndex = 0;
            } else {
              clearTimeout(this.ticker);
              return;
            }
          }
          let newFrameWait = parseInt(lines[newFrameIndex*FRAME_HEIGHT]) - 1;
          return {frameIndex: newFrameIndex, frameWait: newFrameWait};
        });
      }, FRAME_RATE);
      window.stop = () => clearTimeout(this.ticker);
    }
  };
  render() {
    const { lines, frameIndex } = this.state;
    if (frameIndex == null) {
      return (
        <div> nothing </div>
      );
    }
    let frame = lines.slice(frameIndex*FRAME_HEIGHT+1, (1+frameIndex)*FRAME_HEIGHT);
    return (
      <pre className="movie-screen" style={{textAlign: 'left'}}>
        {/* give screen a fixed width of 67 monospace characters */}
        <div style={{height: '0'}}>                                                                   </div>

        {frame.map((line, index) => (<span key={index} style={{minHeight: '1.25em', lineHeight: '1.25'}}>{line}<br/></span>))}
      </pre>
    );
  }
}

export default AsciiPlayer;

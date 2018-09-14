import React from 'react';
import {Motion, spring} from 'react-motion';

export default class Demo extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {open: false};
  };

  handleMouseDown = () => {
    this.setState({open: !this.state.open});
  };

  handleTouchStart = (e:any) => {
    e.preventDefault();
    this.handleMouseDown();
  };

  render() {
    return (
      <div>
        <button
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}>
          Toggle
        </button>

        <Motion style={{x: spring(this.state.open ? 400 : 0)}}>
          {({x}) => {
            console.log(x)
            // children is a callback which should accept the current value of
            // `style`
            return (<div style={styles.demo0}>
              <div style={{
                ...styles.demo0Block,
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
              }} />
            </div>)
          }
          }
        </Motion>
      </div>
    );
  };
}

const styles: { [key: string] : React.CSSProperties } = {
  demo0: {
    borderRadius: `4px`,
    backgroundColor: `rgb(240, 240, 232)`,
    position: 'relative',
    margin: '5px 3px 10px',
    width: '450px',
    height: '50px'
  },
  demo0Block: {
    position: 'absolute',
    width: '50px',
    height: '50px',
    borderRadius: '4px',
    backgroundColor: 'rgb(130, 181, 198)',
  }
}
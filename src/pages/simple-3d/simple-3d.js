import './index.less';
import React from 'react';
import BackButton from 'Components/navigation/backbutton';
import { ViewRow, ViewCol } from 'Components/view/view';

class Simple3d extends React.Component {

  drawCube = () => {

  };

  drawPyramid = () => {

  };

  render() {
   return (
      <ViewCol className="simple-3d-container">
        <BackButton />
        <canvas
          id="simple-3d"
          style={{backgroundColor: '#86c663'}}
          className="simple-3d-canvas"
          width={window.innerWidth}
          height={window.innerHeight}>
        </canvas>
        <ViewRow className="simple-3d-nav">
          <a className="simple-3d-anchor-tag" href="#" onClick={this.drawPyramid}>Pyramid</a>
          <a className="simple-3d-anchor-tag" href="#" onClick={this.drawCube}>Cube</a>
        </ViewRow>
      </ViewCol>
    )
  }
}

export default Simple3d;

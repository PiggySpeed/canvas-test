import './index.less';
import React from 'react';
import BackButton from 'Components/navigation/backbutton';
import { ViewCol, ViewRow } from 'Components/view/view';

class Fractals extends React.Component {
  componentDidMount() {
    // this.drawSquareGrid();
  }

  drawSierpinskiTriangles = () => {
    this.clearCanvas();
  };

  clearCanvas = () => {
    const cvs = document.getElementById('fractals');
    const ctx = cvs.getContext('2d');

    ctx.clearRect(0, 0, cvs.width, cvs.height);
  };

  render() {
    return(
      <ViewCol className="fractals-container">
        <BackButton />
        <canvas id="fractals" style={{backgroundColor: '#c67621'}} className="fractals-canvas">
        </canvas>
        <ViewRow className="fractals-nav">
          <a className="fractals-anchor-tag" href="#" onClick={this.drawSierpinskiTriangles}>Sierpinski</a>
          <a className="fractals-anchor-tag" href="#" onClick={this.drawSierpinskiTriangles}>Fractals 2</a>
          <a className="fractals-anchor-tag" href="#" onClick={this.drawSierpinskiTriangles}>Fractals 3</a>
        </ViewRow>
      </ViewCol>
    )
  }
}

export default Fractals;

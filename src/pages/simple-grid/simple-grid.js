import './index.less';
import React from 'react';
import BackButton from 'Components/navigation/backbutton';
import { ViewCol, ViewRow } from 'Components/view/view';

class SimpleGrid extends React.Component {
  componentDidMount() {
    this.drawSquareGrid();
  }

  drawSquareGrid = () => {
    this.clearCanvas();

    const WIDTH = 500;
    const HEIGHT = 300;
    const p = 1; // white border around a square
    const inc = 25; // increment
    const size = inc - (2 * p); // size of a single square

    const cvs = document.getElementById('simple-grid');
    const ctx = cvs.getContext('2d');

    // draw squares per row and height
    for (let y = 0; y <= HEIGHT; y += inc) {
      for (let x = 0; x <= WIDTH; x += inc) {
        ctx.fillStyle = '#5299a8';
        ctx.fillRect(x + p, y + p, size, size);
      }
    }
  };

  drawLineGrid = () => {
    this.clearCanvas();

    const WIDTH = 500;
    const HEIGHT = 300;
    const inc = 10; // increment
    const offset = 0.5; // pixel offset for rendering crisp lines

    const cvs = document.getElementById('simple-grid');
    const ctx = cvs.getContext('2d');

    // draw vertical lines
    for (let i = 0; i <= WIDTH; i += inc) {
      ctx.moveTo(offset + i, 0);
      ctx.lineTo(offset + i, HEIGHT);
    }

    // draw horizontal lines
    for (let i = 0; i <= HEIGHT; i += inc) {
      ctx.moveTo(0, offset + i);
      ctx.lineTo(WIDTH, offset + i);
    }

    ctx.strokeStyle = '#5299a8';
    ctx.stroke();
  };

  clearCanvas = () => {
    const cvs = document.getElementById('simple-grid');
    const ctx = cvs.getContext('2d');

    ctx.clearRect(0, 0, cvs.width, cvs.height);
  };

  render() {
    return(
      <ViewCol className="simple-grid-container">
        <BackButton />
        <canvas id="simple-grid" className="simple-grid-canvas" width="500px" height="300px">
        </canvas>
        <ViewRow className="simple-grid-nav">
          <a className="simple-grid-anchor-tag" href="#" onClick={this.drawLineGrid}>Lines</a>
          <a className="simple-grid-anchor-tag" href="#" onClick={this.drawSquareGrid}>Squares</a>
        </ViewRow>
      </ViewCol>
    )
  }
}

export default SimpleGrid;

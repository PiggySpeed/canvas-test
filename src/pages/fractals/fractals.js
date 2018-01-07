import './index.less';
import React from 'react';
import BackButton from 'Components/navigation/backbutton';
import { ViewCol, ViewRow } from 'Components/view/view';

class Fractals extends React.Component {
  componentDidMount() {
    this.drawSierpinskiTriangles();
  }

  drawSierpinskiTriangles = () => {
    this.clearCanvas();
    const cvs = document.getElementById('fractals');
    const ctx = cvs.getContext('2d');
    const START_X = window.innerWidth / 2;
    const START_Y = window.innerHeight / 4;
    const INITIAL_SIZE = 600;

    console.log(START_X, START_Y);

    /**
     * draws an equilateral triangle
     * - ctx: canvas context
     * - x, y: coordinates for the top left corner of the bounding square
    **/
    const drawTriangle = (ctx, x, y, size) => {
      const height = size;
      // const height = size * Math.cos(Math.PI / 6);
      ctx.moveTo(x, y + height);        // bottom left
      ctx.lineTo(x + size/2, y);        // top middle
      ctx.lineTo(x + size, y + height); // bottom right
      ctx.lineTo(x, y + height);        // back to bottom left
    };

    const drawSierpinski = (ctx, x, y, size) => {
      if (size < 10) {
        drawTriangle(ctx, x, y, size);
      }
      else {
        console.log('drawing');
        const newSize = size/3;

        // top triangle
        drawSierpinski(ctx, x + (newSize/2), y, newSize);

        // bottom-left triangle
        drawSierpinski(ctx, x, y + newSize, newSize);

        // bottom-right triangle
        drawSierpinski(ctx, x + newSize, y + newSize, newSize);
      }
    };

    ctx.beginPath();
    drawSierpinski(ctx, START_X, START_Y, INITIAL_SIZE);
    ctx.closePath();
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();

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

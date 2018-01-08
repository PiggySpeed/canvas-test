import './index.less';
import React from 'react';
import BackButton from 'Components/navigation/backbutton';
import { ViewCol, ViewRow } from 'Components/view/view';

class Fractals extends React.Component {
  componentDidMount() {
    this.drawSierpinskiTriangles();
  }

  drawSierpinskiCarpet = () => {
    this.clearCanvas();
    const cvs = document.getElementById('fractals');
    const ctx = cvs.getContext('2d');
    const START_X = cvs.width / 2;
    const START_Y = cvs.height / 2;
    const INITIAL_SIZE = 600;

    const drawSquare = (ctx, x, y, size) => {
      ctx.rect(x, y, size, size);
    };

    const drawSierpinski = (ctx, x, y, size) => {
      if (size < 5) {
        drawSquare(ctx, x, y, size);
      } else {
        const newSize = size/3;

        drawSierpinski(ctx, x - newSize, y - newSize, newSize); // top left
        drawSierpinski(ctx, x,           y - newSize, newSize); // top middle
        drawSierpinski(ctx, x + newSize, y - newSize, newSize); // top right

        drawSierpinski(ctx, x - newSize, y, newSize); // middle left
        drawSierpinski(ctx, x + newSize, y, newSize); // middle right

        drawSierpinski(ctx, x - newSize, y + newSize, newSize); // bottom left
        drawSierpinski(ctx, x,           y + newSize, newSize); // bottom middle
        drawSierpinski(ctx, x + newSize, y + newSize, newSize); // bottom right
      }
    };

    ctx.beginPath();
    drawSierpinski(ctx, START_X, START_Y, INITIAL_SIZE);
    ctx.closePath();
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
  };

  drawSierpinskiTriangles = () => {
    this.clearCanvas();
    const cvs = document.getElementById('fractals');
    const ctx = cvs.getContext('2d');
    const START_X = cvs.width / 4;
    const START_Y = cvs.height / 8;
    const INITIAL_SIZE = 600;

    /**
     * draws an equilateral triangle
     * - ctx: canvas context
     * - x, y: coordinates for the top left corner of the bounding square
    **/
    const drawTriangle = (ctx, x, y, size) => {
      const height = size * Math.cos(Math.PI / 6); // this looks sharper than height = size
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
        // console.log('drawing', x, y, size);
        const newSize = size/2;

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
        <canvas
          id="fractals"
          style={{backgroundColor: '#c67621'}}
          className="fractals-canvas"
          width={window.innerWidth}
          height={window.innerHeight}>
        </canvas>
        <ViewRow className="fractals-nav">
          <a className="fractals-anchor-tag" href="#" onClick={this.drawSierpinskiTriangles}>Triangle</a>
          <a className="fractals-anchor-tag" href="#" onClick={this.drawSierpinskiCarpet}>Carpet</a>
          <a className="fractals-anchor-tag" href="#" onClick={this.drawSierpinskiTriangles}>Fractals 3</a>
        </ViewRow>
      </ViewCol>
    )
  }
}

export default Fractals;

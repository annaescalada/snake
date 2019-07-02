'use strict';

function main() {
  var mainElement = document.querySelector('#site-main');

  function buildDom(html) {
    mainElement.innerHTML = html;
    return mainElement;
  }

  function createSplashScreen() {
    var splashScreen = buildDom(`
      <section>
        <h1>Snake</h1>
        <button>Start</button>
      </section>
    `);
    var startButton = splashScreen.querySelector('button');
    startButton.addEventListener('click',createGameScreen);
  }

  function createGameScreen() {
    var gameScreen = buildDom(`
    <section>
      <canvas width="500px" height="500px"></canvas>
    </section>
    `);
    var canvas = gameScreen.querySelector('canvas');
    var game = new Game(canvas);
    game.gameOverCallback(createGameOverScreen);
    game.startGame();
    document.addEventListener('keydown',function(event) {
      if(event.key === 'ArrowDown') {
        game.snake.setDirection('S');
      } else if (event.key === 'ArrowUp') {
        game.snake.setDirection('N');
      } else if (event.key === 'ArrowRight') {
        game.snake.setDirection('E');
      } else if (event.key === 'ArrowLeft') {
        game.snake.setDirection('W');
      }
    });
  }

  function createGameOverScreen() {
    var gameOverScreen = buildDom (`
    <section>
      <h1>Game Over</h1>
      <button>Restart</button>
    </section>
    `);
    var restartButton = gameOverScreen.querySelector('button');
    restartButton.addEventListener('click',createGameScreen);
  }

  createSplashScreen();
}

window.addEventListener('load', main);


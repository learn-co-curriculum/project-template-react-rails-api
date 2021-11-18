import React, { Component, useState, useEffect } from 'react'



// export default class App extends Component {

function Flappybird () {
  const [score, setScore] = useState(-1);
  



useEffect(()=> {
 
    const bird = document.querySelector(".bird");
    const gameDisplay = document.querySelector(".game-container");
    const ground = document.querySelector(".ground-moving");
  
    let birdLeft = 220;
    let birdBottom = 100;
    let gravity = 1;
    let isGameOver = false;
    let gap = 430;
    
  
    function startGame() {
      birdBottom -= gravity;
      bird.style.bottom = birdBottom + "px";
      bird.style.left = birdLeft + "px";
    }
    let gameTimerId = setInterval(startGame, 20);
  
    function control(e) {
      if (e.keyCode === 32) {
        jump();
        
      }
    }
  
    function jump() {
      if (birdBottom < 500) birdBottom += 30;
      bird.style.bottom = birdBottom + "px";
      console.log(birdBottom);
      
    }
    document.addEventListener("keyup", control);
  
    function generateObstacle() {
      setScore( score =>  score + 1) 
      let obstacleLeft = 500;
      let randomHeight = Math.random() * 60;
       let obstacleBottom = randomHeight;
       const obstacle = document.createElement("div");
      const topObstacle = document.createElement("div");
      if (!isGameOver) {
        obstacle.classList.add("obstacle");
        topObstacle.classList.add("topObstacle");
        
        
      }
      gameDisplay.appendChild(obstacle);
      gameDisplay.appendChild(topObstacle);
      obstacle.style.left = obstacleLeft + "px";
      topObstacle.style.left = obstacleLeft + "px";
      obstacle.style.bottom = obstacleBottom + "px";
      topObstacle.style.bottom = obstacleBottom + gap + "px";
  
      function moveObstacle() {
        
        obstacleLeft -= 2;
        obstacle.style.left = obstacleLeft + "px";
        topObstacle.style.left = obstacleLeft + "px";
  
        if (obstacleLeft === -60) {
          // setScore( score =>  score + 1)
          clearInterval(timerId);
          gameDisplay.removeChild(obstacle);
          gameDisplay.removeChild(topObstacle);
          
        }
        if (
          (obstacleLeft > 200 &&
            obstacleLeft < 280 &&
            birdLeft === 220 &&
            (birdBottom < obstacleBottom + 153 ||
              birdBottom > obstacleBottom + gap - 200)) ||
          birdBottom === 1
          
        ) {
          
          gameOver();
          clearInterval(timerId);
        }  
      }
      let timerId = setInterval(moveObstacle, 20);
      if (!isGameOver) setTimeout(generateObstacle, 3000);
      
    }
     generateObstacle();
  
    function gameOver() {
      clearInterval(gameTimerId);
      console.log("game over");
      isGameOver = true;
      document.removeEventListener("keyup", control);
      ground.classList.add("ground");
      ground.classList.remove("ground-moving");
    }
},[])





  
   
    return (
      <div>
        
        <div class="border-left"></div>
        <div class="game-container">
      <div class="border-top"></div>
      <div class="sky">
        
          <div class="bird"></div>
      </div>
  </div>
  <div class="ground-container">
  <div><b>Score:{score}</b></div>
    <div class="ground-moving"></div>
  </div>
  <div class="border-right"></div>

      </div>
    )
  
}

export default Flappybird







// import React, { Component, useState } from 'react'



// export default class App extends Component {
// //  const [score, setScore] = useState(0);


// flappyScore = () => () => {
//   const [score, setScore] = useState(0);
//   return <div>{ score + 1 }</div> 
// }

//   componentDidMount(){
    
//     this.state = {score: 0}
//     const bird = document.querySelector(".bird");
//     const gameDisplay = document.querySelector(".game-container");
//     const ground = document.querySelector(".ground-moving");
  
//     let birdLeft = 220;
//     let birdBottom = 100;
//     let gravity = 3;
//     let isGameOver = false;
//     let gap = 430;
    
  
//     function startGame() {
//       birdBottom -= gravity;
//       bird.style.bottom = birdBottom + "px";
//       bird.style.left = birdLeft + "px";
//     }
//     let gameTimerId = setInterval(startGame, 20);
  
//     function control(e) {
//       if (e.keyCode === 32) {
//         jump();
//       }
//     }
  
//     function jump() {
//       if (birdBottom < 500) birdBottom += 30;
//       bird.style.bottom = birdBottom + "px";
//       console.log(birdBottom);
//     }
//     document.addEventListener("keyup", control);
  
//     function generateObstacle() {
//       let obstacleLeft = 500;
//       let randomHeight = Math.random() * 60;
//        let obstacleBottom = randomHeight;
//        const obstacle = document.createElement("div");
//       const topObstacle = document.createElement("div");
//       if (!isGameOver) {
//         obstacle.classList.add("obstacle");
//         topObstacle.classList.add("topObstacle");
//         // setScore(score + 1)
        
//       }
//       gameDisplay.appendChild(obstacle);
//       gameDisplay.appendChild(topObstacle);
//       obstacle.style.left = obstacleLeft + "px";
//       topObstacle.style.left = obstacleLeft + "px";
//       obstacle.style.bottom = obstacleBottom + "px";
//       topObstacle.style.bottom = obstacleBottom + gap + "px";
  
//       function moveObstacle() {
//         obstacleLeft -= 2;
//         obstacle.style.left = obstacleLeft + "px";
//         topObstacle.style.left = obstacleLeft + "px";
  
//         if (obstacleLeft === -60) {
//           clearInterval(timerId);
//           gameDisplay.removeChild(obstacle);
//           gameDisplay.removeChild(topObstacle);
//         }
//         if (
//           (obstacleLeft > 200 &&
//             obstacleLeft < 280 &&
//             birdLeft === 220 &&
//             (birdBottom < obstacleBottom + 153 ||
//               birdBottom > obstacleBottom + gap - 200)) ||
//           birdBottom === 1
//         ) {
//           gameOver();
//           clearInterval(timerId);
//         }
//       }
//       let timerId = setInterval(moveObstacle, 20);
//       if (!isGameOver) setTimeout(generateObstacle, 3000);
//     }
//      generateObstacle();
  
//     function gameOver() {
//       clearInterval(gameTimerId);
//       console.log("game over");
//       isGameOver = true;
//       document.removeEventListener("keyup", control);
//       ground.classList.add("ground");
//       ground.classList.remove("ground-moving");
//     }
//   }
//   render() {
//     const inlineHook = this.flappyScore();
//     return (
//       <div>
        
//         <div class="border-left"></div>
//         <div class="game-container">
//       <div class="border-top"></div>
//       <div class="sky">
        
//           <div class="bird"></div>
//       </div>
//   </div>
//   <div class="ground-container">
//   <div><b>Score:</b>{inlineHook}</div>
//     <div class="ground-moving"></div>
//   </div>
//   <div class="border-right"></div>

//       </div>
//     )
//   }
// }



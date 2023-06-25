// import { useState, useEffect, useRef } from 'react';

// export default function Game() {
//   const canvasRef = useRef(null);
//   const [player1, setPlayer1] = useState({ x: 50, y: 50, attackRange: 20, speed: 2, color: 'red' });
//   const [player2, setPlayer2] = useState({ x: 350, y: 350, attackRange: 20, speed: 2, color: 'blue' });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');

//     function gameLoop() {
//       // Calculate the distance between the players
//       const dx = player2.x - player1.x;
//       const dy = player2.y - player1.y;
//       const distance = Math.sqrt(dx ** 2 + dy ** 2);

//       // Check if either player is within attack range
//       if (distance <= player1.attackRange) {
//         console.log('Player 1 is attacking Player 2!');
//       } else if (distance <= player2.attackRange) {
//         console.log('Player 2 is attacking Player 1!');
//       } else {
//         // Move both players towards each other
//         const angle = Math.atan2(dy, dx);
//         setPlayer1(prev => ({ ...prev, x: prev.x + Math.cos(angle) * prev.speed, y: prev.y + Math.sin(angle) * prev.speed }));
//         setPlayer2(prev => ({ ...prev, x: prev.x - Math.cos(angle) * prev.speed, y: prev.y - Math.sin(angle) * prev.speed }));
//         console.log('Moving players closer to each other...');
//       }

//       // Clear the canvas and draw the players
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       drawPlayer(player1);
//       drawPlayer(player2);

//       // Call the game loop again
//       requestAnimationFrame(gameLoop);
//     }

//     function drawPlayer(player) {
//       ctx.fillStyle = player.color;
//       ctx.beginPath();
//       ctx.arc(player.x, player.y, 10, 0, 2 * Math.PI);
//       ctx.fill();
//     }

//     // Start the game loop
//     gameLoop();

//     // Cleanup function
//     return () => cancelAnimationFrame(gameLoop);
//   }, [player1, player2]);

//   return (
//     <canvas ref={canvasRef} width={400} height={400} />
//   );
// }
"use client";
import React, { useEffect, useRef, useState } from "react";

type Player = {
  x: number;
  y: number;
  attackRange: number;
  speed: number;
  color: string;
};

type Props = {
  player1: Player;
  player2: Player;
};

const Canvas: React.FC<Props> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  interface Player {
    x: number;
    y: number;
    attackRange: number;
    speed: number;
    color: string;
    health: number;
    opponent?: Player;
    lastAttackTime: number;
    attackSpeed: number;
    isAttacking: boolean;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let animationId: number | undefined;
    let lastTime = 0;
    const interval = 1000 / 60; // game loop interval in milliseconds
    let player1: Player = {
      x: 50,
      y: 50,
      attackRange: 100,
      speed: 1,
      color: "red",
      health: 100,
      lastAttackTime: 0,
      attackSpeed: 1000,
      isAttacking: false,
    };
    let player2: Player = {
      x: 350,
      y: 350,
      attackRange: 25,
      speed: 1,
      color: "blue",
      health: 100,
      lastAttackTime: 0,
      attackSpeed: 500,
      isAttacking: false,
    };

    player1.opponent = player2;
    player2.opponent = player1;

    const gameLoop = (currentTime: number) => {
      const elapsed = currentTime - lastTime;
      if (elapsed >= interval) {
        // Calculate the distance between the players
        const dx = player2.x - player1.x;
        const dy = player2.y - player1.y;
        const distance = Math.sqrt(dx ** 2 + dy ** 2);

        // Check if either player is within attack range

        if (
          distance <= player1.attackRange &&
          currentTime - player1.lastAttackTime >= player1.attackSpeed
        ) {
          console.log("Player 1 is attacking Player 2!");
          player2.health -= 10;
          player1.lastAttackTime = currentTime;
          player1.isAttacking = true;
          setTimeout(() => {
            player1.isAttacking = false;
          }, 200);
        } else if (
          distance <= player2.attackRange &&
          currentTime - player2.lastAttackTime >= player2.attackSpeed
        ) {
          console.log("Player 2 is attacking Player 1!");
          player1.health -= 10;
          player2.lastAttackTime = currentTime;
          player2.isAttacking = true;
          setTimeout(() => {
            player2.isAttacking = false;
          }, 200);
        } else {
          // Move both players towards each other
          console.log("Moving players closer to each other...");
          const angle = Math.atan2(dy, dx);

          if (distance > player1.attackRange) {
            player1.x += Math.cos(angle) * player1.speed;
            player1.y += Math.sin(angle) * player1.speed;
          }

          if (distance > player2.attackRange) {
            player2.x -= Math.cos(angle) * player1.speed;
            player2.y -= Math.sin(angle) * player1.speed;
          }
          // setPlayer1((curr) => player1);

          // setPlayer2((curr) => player2);
        }

        // Clear the canvas and draw the players
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawPlayer(player1);
        drawPlayer(player2);

        lastTime = currentTime;
      }
      // Call the game loop again
      if (player1.health <= 0 || player2.health <= 0) {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      } else {
        animationId = requestAnimationFrame(gameLoop);
      }
    };

    const drawPlayer = (player: Player) => {
      // Draw the player
      ctx.fillStyle = player.color;
      ctx.beginPath();
      ctx.arc(player.x, player.y, 10, 0, 2 * Math.PI);
      ctx.fill();

      if (player.isAttacking) {
        ctx.beginPath();
        ctx.strokeStyle = player.color;
        ctx.lineWidth = 3;
        ctx.moveTo(player.x, player.y);
        ctx.lineTo(player.opponent!.x, player.opponent!.y);
        ctx.stroke();
      }

      // Draw the health bar
      ctx.fillStyle = "gray";
      ctx.fillRect(player.x - 15, player.y - 20, 30, 5);
      ctx.fillStyle = "green";
      ctx.fillRect(player.x - 15, player.y - 20, (player.health / 100) * 30, 5);
    };

    animationId = requestAnimationFrame(gameLoop);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return <canvas ref={canvasRef} width={400} height={400} />;
};

export default Canvas;

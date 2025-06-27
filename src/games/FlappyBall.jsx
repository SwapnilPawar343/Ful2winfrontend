import React, { useEffect, useRef } from "react";
import axios from "axios";
import ScoreCard from "./ScoreCard.jsx";
const scoreData = {
  userId: "1238", // Replace with actual user ID
   // Replace with actual game name
};
import { useLocation } from "react-router-dom";

const FlappyBall = () => {
  const [gameOn, setGameOn] = React.useState(false);
  const location = useLocation();
  // Get tournament data from state
const { id, entryFee, type, game } = location.state || {};
  console.log( game, "Game data in FlappyBall" );
  useEffect(() => {
    const handleMessage = (event) => {
      // ✅ Check origin to prevent security issues
      // if (event.origin !== "http://localhost:4000") return;
     
      const { type, score } = event.data;

      if (type === "GAME_OVER") {
        console.log("🎯 Final Score from Game:", score);
        console.log( game.title," Game Name: page parameter");
        
       axios
         .post("http://localhost:5000/score/submit-score", {
           userId: "1239", // Replace with actual user ID
           score:  score,
           roomId: id, // Replace with actual room ID
           gameName: game.title // Replace with actual game name
          });
          
        setGameOn(true);
        scoreData.score = score; // Update the score data
        
      }
    };

    window.addEventListener("message", handleMessage);

    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    gameOn ? (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <ScoreCard
          userId={scoreData.userId}
          score={scoreData.score}
          roomId={scoreData.roomId}
          gameName={scoreData.gameName}
          game={game}

        />
      </div>
    ) : (
      <div>
        <h2>Play Game</h2>
        <iframe
          src="https://bird-lac-omega.vercel.app/"
          title="Game"
          width="100%"
          height="100%"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            border: "none",
            margin: 0,
            padding: 0,
            zIndex: 9999,
          }}
        />
      </div>
    )
  );
};

export default FlappyBall;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, RotateCcw, Globe } from "lucide-react";
import { nonCapitalCities, capitalCities } from "@/lib/gameData";

type GameState = "welcome" | "playing" | "gameOver";

export default function Home() {
  const [gameState, setGameState] = useState<GameState>("welcome");
  const [cities, setCities] = useState<string[]>([]);
  const [correctCapital, setCorrectCapital] = useState<string>("");
  const [correctCountry, setCorrectCountry] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const startGame = () => {
    setGameState("playing");
    setScore(0);
    generateRound();
  };

  const generateRound = () => {
    setSelectedCity("");
    setShowFeedback(false);
    
    // Select 4 random non-capital cities
    const shuffledNonCapitals = [...nonCapitalCities].sort(() => Math.random() - 0.5);
    const selectedNonCapitals = shuffledNonCapitals.slice(0, 4);
    
    // Select 1 random capital city
    const capitalKeys = Object.keys(capitalCities);
    const randomCapital = capitalKeys[Math.floor(Math.random() * capitalKeys.length)];
    
    // Combine and shuffle
    const allCities = [...selectedNonCapitals, randomCapital];
    const shuffledCities = allCities.sort(() => Math.random() - 0.5);
    
    setCities(shuffledCities);
    setCorrectCapital(randomCapital);
    setCorrectCountry(capitalCities[randomCapital]);
  };

  const handleCityClick = (city: string) => {
    if (showFeedback) return;
    
    setSelectedCity(city);
    setShowFeedback(true);
    
    if (city === correctCapital) {
      setScore(score + 1);
      setTimeout(() => {
        generateRound();
      }, 1500);
    } else {
      setTimeout(() => {
        setGameState("gameOver");
      }, 2000);
    }
  };

  const restartGame = () => {
    startGame();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-4">
      <div className="w-full max-w-4xl">
        {gameState === "welcome" && (
          <Card className="p-12 text-center bg-white/95 backdrop-blur shadow-2xl">
            <Globe className="w-20 h-20 mx-auto mb-6 text-purple-600" />
            <h1 className="text-5xl font-bold mb-4 text-gray-800">Capital City Game</h1>
            <p className="text-xl text-gray-600 mb-8">
              Test your geography knowledge! Choose the capital city from the list.
            </p>
            <p className="text-lg text-gray-500 mb-8">
              The game ends when you make a wrong choice. How high can you score?
            </p>
            <Button 
              size="lg" 
              className="text-xl px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              onClick={startGame}
            >
              Start Game
            </Button>
          </Card>
        )}

        {gameState === "playing" && (
          <div className="space-y-6">
            <Card className="p-6 bg-white/95 backdrop-blur shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-yellow-500" />
                  <span className="text-3xl font-bold text-gray-800">Score: {score}</span>
                </div>
                <Globe className="w-10 h-10 text-purple-600 animate-spin-slow" />
              </div>
            </Card>

            <Card className="p-8 bg-white/95 backdrop-blur shadow-xl">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Which city is a capital?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cities.map((city, index) => {
                  const isSelected = selectedCity === city;
                  const isCorrect = city === correctCapital;
                  const isWrong = isSelected && !isCorrect;
                  
                  let buttonClass = "text-xl py-6 h-auto transition-all duration-300";
                  
                  if (showFeedback) {
                    if (isCorrect) {
                      buttonClass += " bg-green-500 hover:bg-green-500 text-white animate-pulse";
                    } else if (isWrong) {
                      buttonClass += " bg-red-500 hover:bg-red-500 text-white";
                    } else {
                      buttonClass += " opacity-50";
                    }
                  } else {
                    buttonClass += " bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:scale-105";
                  }
                  
                  return (
                    <Button
                      key={index}
                      className={buttonClass}
                      onClick={() => handleCityClick(city)}
                      disabled={showFeedback}
                    >
                      {city}
                    </Button>
                  );
                })}
              </div>

              {showFeedback && selectedCity !== correctCapital && (
                <div className="mt-6 p-4 bg-red-100 border-2 border-red-500 rounded-lg">
                  <p className="text-center text-lg font-semibold text-red-800">
                    Wrong! The capital was <span className="font-bold">{correctCapital}</span> ({correctCountry})
                  </p>
                </div>
              )}

              {showFeedback && selectedCity === correctCapital && (
                <div className="mt-6 p-4 bg-green-100 border-2 border-green-500 rounded-lg">
                  <p className="text-center text-lg font-semibold text-green-800">
                    Correct! {correctCapital} is the capital of {correctCountry}
                  </p>
                </div>
              )}
            </Card>
          </div>
        )}

        {gameState === "gameOver" && (
          <Card className="p-12 text-center bg-white/95 backdrop-blur shadow-2xl">
            <Trophy className="w-24 h-24 mx-auto mb-6 text-yellow-500" />
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Game Over!</h2>
            <p className="text-2xl text-gray-600 mb-4">
              Your final score: <span className="font-bold text-purple-600">{score}</span>
            </p>
            <p className="text-lg text-gray-500 mb-2">
              The correct answer was:
            </p>
            <p className="text-2xl font-bold text-gray-800 mb-8">
              {correctCapital} ({correctCountry})
            </p>
            <Button 
              size="lg" 
              className="text-xl px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              onClick={restartGame}
            >
              <RotateCcw className="mr-2 h-6 w-6" />
              Play Again
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}

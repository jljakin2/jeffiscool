"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import questions from "../../data/how-dumb.json"; // Assuming you have questions.json in data directory

const HowDumbStyles = styled.div`
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1000' height='300' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1045%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%231e3266'%3e%3c/rect%3e%3cpath d='M1512 560L0 560 L0 419.9Q45.45 393.35%2c 72 438.8Q115.53 410.33%2c 144 453.85Q183.4 373.25%2c 264 412.65Q309.92 386.57%2c 336 432.49Q406.84 383.33%2c 456 454.16Q498.44 376.61%2c 576 419.05Q643.19 366.25%2c 696 433.44Q717.04 382.48%2c 768 403.52Q811.36 374.88%2c 840 418.24Q885.75 391.99%2c 912 437.73Q954.95 408.68%2c 984 451.62Q1004.6 400.22%2c 1056 420.81Q1086.92 379.73%2c 1128 410.65Q1181.15 391.8%2c 1200 444.96Q1250.88 375.84%2c 1320 426.72Q1345.91 380.63%2c 1392 406.54Q1475.19 369.73%2c 1512 452.92z' fill='%23182f5d'%3e%3c/path%3e%3cpath d='M1512 560L0 560 L0 454.16Q77.52 411.69%2c 120 489.21Q156.96 406.17%2c 240 443.13Q283.53 414.66%2c 312 458.19Q363.4 437.59%2c 384 488.99Q397.66 430.65%2c 456 444.31Q502.32 418.63%2c 528 464.95Q595.42 412.37%2c 648 479.79Q715.23 427.02%2c 768 494.25Q802.6 408.85%2c 888 443.45Q962.01 397.47%2c 1008 471.48Q1038.35 429.83%2c 1080 460.17Q1156.57 416.74%2c 1200 493.3Q1238.39 411.69%2c 1320 450.08Q1366.05 424.13%2c 1392 470.18Q1461.07 419.25%2c 1512 488.32z' fill='%2325467d'%3e%3c/path%3e%3cpath d='M1512 560L0 560 L0 494.43Q71.22 445.65%2c 120 516.88Q150.59 475.47%2c 192 506.06Q266.73 460.79%2c 312 535.53Q327.89 479.42%2c 384 495.31Q449.05 440.36%2c 504 505.41Q553.84 483.25%2c 576 533.09Q606.94 492.03%2c 648 522.97Q676.1 479.07%2c 720 507.17Q745 460.18%2c 792 485.18Q871.48 444.66%2c 912 524.14Q939.26 479.4%2c 984 506.67Q1008.01 458.68%2c 1056 482.69Q1098.69 453.38%2c 1128 496.07Q1205.4 453.48%2c 1248 530.88Q1284.13 447.01%2c 1368 483.14Q1416.37 459.5%2c 1440 507.87Q1485.55 481.42%2c 1512 526.97z' fill='%23356cb1'%3e%3c/path%3e%3cpath d='M1560 560L0 560 L0 523.05Q55.42 506.47%2c 72 561.89Q96.44 514.33%2c 144 538.77Q196.38 471.14%2c 264 523.52Q343.11 482.63%2c 384 561.74Q438.04 495.78%2c 504 549.82Q576.19 502.01%2c 624 574.2Q641.62 519.82%2c 696 537.43Q766 487.43%2c 816 557.44Q858.79 528.24%2c 888 571.03Q906.81 517.84%2c 960 536.65Q1025.38 482.02%2c 1080 547.4Q1146.06 493.46%2c 1200 559.52Q1245.6 485.12%2c 1320 530.72Q1387.51 478.23%2c 1440 545.74Q1508.83 494.57%2c 1560 563.39z' fill='white'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1045'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 100vw;
  height: 100vh;
  padding: 2rem;
`;

// Randomly shuffle the array of questions
function shuffleArray(array: any) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function howDumb() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    setShuffledQuestions(shuffleArray(questions));
  }, []);

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setCurrentIndex(currentIndex + 1);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const question: any = shuffledQuestions[currentIndex];

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <HowDumbStyles className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-4xl font-bold mb-4">When was it?</h1>
      <p className="text-xl mb-8">
        Test your knowledge of historical events and inventions.
      </p>
      {currentIndex < shuffledQuestions.length ? (
        <>
          <p className="text-2xl mb-4">{question.question}</p>
          {showAnswer ? (
            <>
              <p className="text-xl mb-4">{question.answer}</p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleNextQuestion}>
                Next Question
              </button>
            </>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleShowAnswer}>
              Show Answer
            </button>
          )}
        </>
      ) : (
        <p className="text-2xl">You've reached the end of the quiz!</p>
      )}
    </HowDumbStyles>
  );
}

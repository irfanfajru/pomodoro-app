"use client";
import { Fasthand, Alkatra } from "next/font/google";
import { useState } from "react";
import { useTimer } from "react-timer-hook";
import Settings from "./settings";
import useSound from "use-sound";

const fastHand = Fasthand({ subsets: ["latin"], weight: ["400"] });
const alkatra = Alkatra({ subsets: ["latin"], weight: ["400"] });
export default function Home() {
  const [play] = useSound("/alarm-sound.mp3");

  const [isPomodoro, setIsPomodoro] = useState(true);
  const [isShortBreak, setIsShortBreak] = useState(false);
  const [isLongBreak, setIsLongBreak] = useState(false);

  const [pomodoroTime, setPomodoroTime] = useState(25);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(10);

  const { seconds, minutes, start, pause, restart, isRunning } = useTimer({
    expiryTimestamp: () =>
      new Date().setSeconds(new Date().getSeconds() + pomodoroTime * 60),
    autoStart: false,
    onExpire: () => {
      play();
      resetTimer();
    },
  });

  // function to reset timer
  const resetTimer = () => {
    if (isPomodoro) restartTimer(pomodoroTime);
    if (isShortBreak) restartTimer(shortBreakTime);
    if (isLongBreak) restartTimer(longBreakTime);
  };

  // function restart timer
  const restartTimer = (type) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + type * 60);
    restart(time, false);
  };

  return (
    <div className="p-10 text-white h-screen bg-center bg-cover bg-no-repeat bg-[url('/bg.gif')] bg-gray-300 bg-blend-multiply">
      {/* header */}
      <div className="mt-4 w-fit text-center md:text-start">
        <h1 className={`${fastHand.className} text-5xl`}>Study With Me</h1>
        <div className={`${alkatra.className} text-end`}>
          <a
            href="https://www.linkedin.com/in/muhammad-irfan-fajru-ramadhan-1497a2205/"
            target="blank"
          >
            by irfanfajru
          </a>
        </div>
      </div>
      {/* body */}
      <div className="flex items-center justify-center mt-8">
        {/* menus */}
        <button
          onClick={() => {
            setIsPomodoro(true);
            setIsShortBreak(false);
            setIsLongBreak(false);
            restartTimer(pomodoroTime, false);
          }}
          type="button"
          className={
            isPomodoro
              ? "text-black border border-white bg-white font-medium rounded-full text-xs md:text-lg px-5 py-2.5 text-center mr-2 mb-2"
              : "text-white hover:text-black border border-white hover:bg-white font-medium rounded-full text-xs md:text-lg px-5 py-2.5 text-center mr-2 mb-2"
          }
        >
          Pomodoro
        </button>
        <button
          onClick={() => {
            setIsPomodoro(false);
            setIsShortBreak(true);
            setIsLongBreak(false);
            restartTimer(shortBreakTime, false);
          }}
          type="button"
          className={
            isShortBreak
              ? "text-black border border-white bg-white font-medium rounded-full text-xs md:text-lg px-5 py-2.5 text-center mr-2 mb-2"
              : "text-white hover:text-black border border-white hover:bg-white font-medium rounded-full text-xs md:text-lg px-5 py-2.5 text-center mr-2 mb-2"
          }
        >
          Short Break
        </button>
        <button
          onClick={() => {
            setIsPomodoro(false);
            setIsShortBreak(false);
            setIsLongBreak(true);
            restartTimer(longBreakTime, false);
          }}
          type="button"
          className={
            isLongBreak
              ? "text-black border border-white bg-white font-medium rounded-full text-xs md:text-lg px-5 py-2.5 text-center mr-2 mb-2"
              : "text-white hover:text-black border border-white hover:bg-white font-medium rounded-full text-xs md:text-lg px-5 py-2.5 text-center mr-2 mb-2"
          }
        >
          Long Break
        </button>
      </div>
      {/* timer */}
      <div className="flex items-center justify-center mt-8">
        {isRunning ? (
          <p className="text-8xl md:text-9xl font-bold">{`${minutes}:${seconds}`}</p>
        ) : (
          <p className="text-8xl md:text-9xl font-bold">{`${minutes}:00`}</p>
        )}
      </div>
      <div className="flex items-center justify-center mt-8">
        {!isRunning ? (
          <button
            onClick={start}
            type="button"
            className="text-black bg-white hover:text-white border border-white hover:bg-transparent font-medium rounded-full text-lg px-5 py-2.5 text-center mr-4 mb-2"
          >
            Start
          </button>
        ) : (
          <button
            onClick={pause}
            type="button"
            className="text-black bg-white hover:text-white border border-white hover:bg-transparent font-medium rounded-full text-lg px-5 py-2.5 text-center mr-4 mb-2"
          >
            Stop
          </button>
        )}
        {/* reset button */}
        <button
          type="button"
          onClick={resetTimer}
          className="text-white mr-4 mb-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
        {/* options button */}
        <Settings
          isShortBreak={isShortBreak}
          isLongBreak={isLongBreak}
          restartTimer={restartTimer}
          pomodoroTime={pomodoroTime}
          setPomodoroTime={setPomodoroTime}
          shortBreakTime={shortBreakTime}
          setShortBreakTime={setShortBreakTime}
          longBreakTime={longBreakTime}
          setLongBreakTime={setLongBreakTime}
        />
      </div>
      {/* embed spotify */}
      <div className="mt-12 flex justify-center md:justify-end">
        <iframe
          className="rounded-lg h-80 md:w-2/5 md:h-40"
          src="https://open.spotify.com/embed/playlist/4Zjli1P13J5mmSCD5iKAXK?utm_source=generator&theme=1"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

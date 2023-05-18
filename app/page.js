import { Fasthand, Alkatra } from "next/font/google";
const fastHand = Fasthand({ subsets: ["latin"], weight: ["400"] });
const alkatra = Alkatra({ subsets: ["latin"], weight: ["400"] });
export default function Home() {
  return (
    <div className="p-10 text-white h-screen bg-center bg-cover bg-no-repeat bg-[url('/bg.gif')] bg-gray-300 bg-blend-multiply">
      {/* header */}
      <div className="mt-4 w-fit">
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
          type="button"
          className="text-white hover:text-black border border-white hover:bg-white font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2"
        >
          Pomodoro
        </button>
        <button
          type="button"
          className="text-white hover:text-black border border-white hover:bg-white font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2"
        >
          Short Break
        </button>
        <button
          type="button"
          className="text-white hover:text-black border border-white hover:bg-white font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2"
        >
          Long Break
        </button>
      </div>
      {/* timer */}
      <div className="flex items-center justify-center mt-8">
        <p className="text-9xl font-bold">25:00</p>
      </div>
      <div className="flex items-center justify-center mt-8">
        <button
          type="button"
          className="text-black bg-white hover:text-white border border-white hover:bg-transparent font-medium rounded-full text-lg px-5 py-2.5 text-center mr-4 mb-2"
        >
          Start
        </button>
        {/* reset button */}
        <button type="button" className="text-white mr-4 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
        {/* options button */}
        <button type="button" className="text-white mr-4 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>
      {/* embed spotify */}
      <div className="mt-12">
        <iframe
          className="rounded-lg"
          src="https://open.spotify.com/embed/playlist/4Zjli1P13J5mmSCD5iKAXK?utm_source=generator&theme=1"
          width="40%"
          height="152"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

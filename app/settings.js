"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Settings({
  isShortBreak,
  isLongBreak,
  restartTimer,
  pomodoroTime,
  setPomodoroTime,
  shortBreakTime,
  setShortBreakTime,
  longBreakTime,
  setLongBreakTime,
}) {
  let [isOpen, setIsOpen] = useState(false);
  const [inputPomodoro, setInputPomodoro] = useState(pomodoroTime);
  const [inputShortBreak, setInputShortBreak] = useState(shortBreakTime);
  const [inputLongBreak, setInputLongBreak] = useState(longBreakTime);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function saveChange() {
    let time = inputPomodoro;
    if (isShortBreak) time = inputShortBreak;
    if (isLongBreak) time = inputLongBreak;
    setPomodoroTime(inputPomodoro);
    setShortBreakTime(inputShortBreak);
    setLongBreakTime(inputLongBreak);
    restartTimer(time);
    closeModal();
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
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
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl  bg-white bg-opacity-20 backdrop-blur-lg p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white"
                  >
                    Settings
                  </Dialog.Title>
                  <hr></hr>
                  <div className="mt-12 grid grid-cols-3 gap-4">
                    {/* form */}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-white">
                        Pomodoro
                      </label>
                      <input
                        placeholder={pomodoroTime}
                        onChange={(e) => {
                          setInputPomodoro(e.target.value);
                        }}
                        min={1}
                        type="number"
                        className="bg-gray-50 text-black text-sm rounded-lg block w-full p-2.5"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-white">
                        Short Break
                      </label>
                      <input
                        onChange={(e) => {
                          setInputShortBreak(e.target.value);
                        }}
                        type="number"
                        min={1}
                        placeholder={shortBreakTime}
                        className="bg-gray-50 text-black text-sm rounded-lg block w-full p-2.5"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-white">
                        Long Break
                      </label>
                      <input
                        onChange={(e) => {
                          setInputLongBreak(e.target.value);
                        }}
                        placeholder={longBreakTime}
                        min={1}
                        type="number"
                        className="bg-gray-50 text-black text-sm rounded-lg block w-full p-2.5"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="relative inline-flex items-center mb-4 cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Show notifications (on going)
                      </span>
                    </label>
                  </div>
                  <div className="mt-12 justify-end flex">
                    <button
                      type="button"
                      className="hover:text-black hover:bg-white text-white border border-white bg-transparent text-sm font-medium rounded-full px-5 py-2.5 text-center mr-4"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="text-black bg-white hover:text-white border border-white hover:bg-transparent text-sm font-medium rounded-full px-5 py-2.5 text-center mr-4"
                      onClick={saveChange}
                    >
                      Save
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

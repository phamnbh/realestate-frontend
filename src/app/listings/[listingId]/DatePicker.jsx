"use client";
import { useState } from "react";
import { format, addDays, subDays } from "date-fns";

const generateDates = (startDate, numDays) => {
  return Array.from({ length: numDays }, (_, i) => addDays(startDate, i));
};

const times = ["3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];

const DatePicker = () => {
  const today = new Date();
  const [currentStartDate, setCurrentStartDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedTime, setSelectedTime] = useState(times[0]);

  const dates = generateDates(currentStartDate, 7);

  const handlePrev = () => {
    setCurrentStartDate(subDays(currentStartDate, 7));
  };

  const handleNext = () => {
    setCurrentStartDate(addDays(currentStartDate, 7));
  };

  return (
    <div className="">
      <div>
        <h1 className="py-12 text-2xl font-bold text-slate-950">
          Thinking of buying?
        </h1>
        <h2 className="mb-2 text-2xl font-semibold text-slate-950">
          Pick a date
        </h2>
        <div className="flex items-center space-x-2">
          <button onClick={handlePrev} className="text-gray-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <div className="flex space-x-2 overflow-x-auto">
            {dates.map((date) => (
              <button
                key={date}
                className={`w-24 h-24 flex flex-col justify-center items-center p-2 border rounded-lg ${
                  selectedDate.toDateString() === date.toDateString()
                    ? "bg-teal-200 border-teal-600"
                    : "bg-white border-gray-300"
                }`}
                onClick={() => setSelectedDate(date)}
              >
                <div className="text-xs text-slate-950">
                  {format(date, "EEEE")}
                </div>
                <div className="text-lg font-bold text-slate-950">
                  {format(date, "d")}
                </div>
                <div className="text-xs text-slate-950">
                  {format(date, "MMM")}
                </div>
              </button>
            ))}
          </div>
          <button onClick={handleNext} className="text-gray-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-6 text-slate-950">
        <h2 className="mb-2 text-2xl font-semibold">Pick a time</h2>
        <p className="flex items-center mb-2 ">
          <span className="mr-1 ">⚡</span> Guaranteed agent availability
        </p>
        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="w-full p-2 bg-white border rounded-lg"
        >
          {times.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <p className="mt-2 text-sm ">
          Select the time that works best for you. You can reschedule at any
          time.
        </p>
      </div>
      <button className="px-4 py-2 text-white bg-red-600 rounded">
        Request showing
      </button>
    </div>
  );
};

export default DatePicker;

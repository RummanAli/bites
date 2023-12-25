function QuestionFlashCard({ question }: { question: any }) {
  let border = "border-gray-500";
  if (question.status === "Mastered") {
    border = "border-green-500";
  }
  if (question.status === "Still Learning") {
    border = "border-red-500";
  }

  return (
    <div
      className={`w-64 h-64 bg-white rounded-xl p-5 flex flex-col gap-3 shadow-lg border-t-4 ${border}`}
    >
      <div className="flex justify-between">
        <div className="text-sm"> {question.question}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <g clip-path="url(#clip0_1587_2636)">
            <path
              d="M5.61182 12.5624C5.61182 13.5193 6.38748 14.2949 7.34432 14.2949C8.30115 14.2949 9.07682 13.5193 9.07682 12.5624C9.07682 11.6056 8.30115 10.8299 7.34432 10.8299C6.38748 10.8299 5.61182 11.6056 5.61182 12.5624Z"
              fill="#6061F0"
            />
            <path
              d="M5.61182 7.36418C5.61182 8.32101 6.38748 9.09668 7.34432 9.09668C8.30115 9.09668 9.07682 8.32101 9.07682 7.36418C9.07682 6.40735 8.30115 5.63168 7.34432 5.63168C6.38748 5.63168 5.61182 6.40735 5.61182 7.36418Z"
              fill="#6061F0"
            />
            <path
              d="M5.61182 2.16691C5.61182 3.12375 6.38748 3.89941 7.34432 3.89941C8.30115 3.89941 9.07682 3.12375 9.07682 2.16691C9.07682 1.21008 8.30115 0.434414 7.34432 0.434414C6.38748 0.434414 5.61182 1.21008 5.61182 2.16691Z"
              fill="#6061F0"
            />
          </g>
          <defs>
            <clipPath id="clip0_1587_2636">
              <rect
                width="13.86"
                height="13.86"
                fill="white"
                transform="matrix(0 -1 1 0 0.412598 14.2969)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <hr />
      <div className="text-sm font-light flex-grow">{question.answer}</div>
    </div>
  );
}

export default QuestionFlashCard;

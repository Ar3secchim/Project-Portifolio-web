export function Skills({ title, percent }) {
  const circumference = 380
  const circumferenceCurrentSkill = 80

  return (
    <div className=" flex">
      <div className="flex flex-col items-center">
        <svg className="inline-block -rotate-90 h-40 w-44">
          <circle
            cx="80"
            cy="80"
            r="60"
            stroke="currentColor"
            strokeWidth="15"
            fill="transparent"
            className="text-purple-700"
          />

          <text x="65" y="-76" className="rotate-90">
            {percent} %
          </text>

          <circle
            cx="80"
            cy="80"
            r="60"
            stroke="currentColor"
            strokeWidth="15"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={circumferenceCurrentSkill}
            className="text-gray-400"
          />
        </svg>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

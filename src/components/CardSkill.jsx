export function CardSkill({ title, post }) {
  const circumference = 380
  const Headers = () => (
    <h1 className="font-bold text-lg text-purple-700"> ▫️ {title}</h1>
  )

  const Content = post.map((post) => (
    <div key={post.id} className="flex flex-col items-center ">
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

        <text x="63" y="-74" className="rotate-90 text-lg text-purple-700">
          {post.percent} %
        </text>

        <circle
          cx="80"
          cy="80"
          r="60"
          stroke="currentColor"
          strokeWidth="15"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={(post.percent * circumference) / 100}
          className="text-gray-400 "
        />
      </svg>
      <h2 className="uppercase text-purple-700 py-2">{post.title}</h2>
    </div>
  ))

  return (
    <div
      className=" my-6 p-4
    bg-gray-100  shadow-lg shadow-purple-700/25 rounded-xl"
    >
      <div>
        <Headers title={title} />
      </div>

      <div className="flex overflow-auto ">{Content}</div>
    </div>
  )
}

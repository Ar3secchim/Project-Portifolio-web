
//  function CardSkill({ Headers}) {
//   return (
//     <div className="flex flex-col">
//       <h2>{Headers}</h2>
//       <div className="flex">

//       </div>
//     </div>
//   )

// }

export function CardSkill({title, post}) {
  const Headers = () => <h1>{ title }</h1>

  const circumference = 380


  const Content = post.map((post) =>
      <div key={post.id} className="flex flex-col items-center" >
        <svg className="inline-block -rotate-90 h-40 w-44" >
          <circle cx="80" cy="80" r="60" stroke="currentColor" strokeWidth="15" fill="transparent" className="text-purple-700" />

          <text x="65" y="-76" className="rotate-90">{post.percent} %</text>

          <circle cx="80" cy="80" r="60" stroke="currentColor" strokeWidth="15" fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={post.percent  *circumference /100}
            className="text-gray-400"
          />
        </svg>
        <h2>{post.title}</h2>
      </div>

  )

  return (
    <div >
      <div>
        <Headers title={title} />
      </div>

      <div className="flex">
        {Content}
       </div>
    </div>
  );
}
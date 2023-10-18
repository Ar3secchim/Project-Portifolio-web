import { twMerge } from "tailwind-merge"

export function TitleSection({ title, ClassName }) {
  return (
    <div className="py-4 ">
      <h1 className={twMerge(`uppercase text-2xl font-regular ${ClassName}`)}>
        {title}
      </h1>
    </div>
  )
}

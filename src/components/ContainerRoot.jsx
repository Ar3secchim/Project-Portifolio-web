import { twMerge } from "tailwind-merge"

export function ContainerRoot({ClassName, children}){
  return(
    <div className={twMerge(`mx-auto max-w-6xl px-6 flex w-screen ${ClassName}`)}>
      {children}
    </div>
  )
}

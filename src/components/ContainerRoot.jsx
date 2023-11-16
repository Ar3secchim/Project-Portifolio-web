import { twMerge } from "tailwind-merge"

export function ContainerRoot({ClassName, children}){
  return(
    <div className={twMerge(`mx-auto max-w-5xl px-6 flex justify-center items-center ${ClassName}`)}>
      {children}
    </div>
  )
}

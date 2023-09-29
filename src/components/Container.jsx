import { twMerge } from "tailwind-merge"

export function Container({ClassName, children}){
  return(
    <div className={twMerge(`px-60 lg:px-20 md:px-8 h-screen flex items-center justify-center ${ClassName}`)}>
      {children}
    </div>
  )
}
import { twMerge } from "tailwind-merge"

export function Container({ClassName, children}){
  return(
    <div className={twMerge(`overscroll-x-none xl:px-60 lg:px-20 md:px-8 h-screen flex items-center justify-center ${ClassName}`)}>
      {children}
    </div>
  )
}
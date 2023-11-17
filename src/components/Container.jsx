import { twMerge } from "tailwind-merge"


function Container({ClassName, children}){
  return(
    <div className={twMerge(`h-screen flex ${ClassName}`)}>
      {children}
    </div>
  )
}

export default Container;
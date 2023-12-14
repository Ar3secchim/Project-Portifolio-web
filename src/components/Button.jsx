import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export function Button({ClassName, children, Route}){
  return(
    <button  className={twMerge(`border rounded-lg w-max border-white font-thin text-center text-lg p-2 hover:bg-zinc-950 ${ClassName}`)}>
        <Link to={Route} >{children}</Link>
    </button>
  )
}
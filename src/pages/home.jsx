import { Toggle } from "../assets/Componets/Toggle Theme"

export function Home() {
  return(
    <nav>
      <ul>
        <li >Home</li>
        <li>Sobre</li>
        <li>Projetos</li>
        <li>Contato</li>
      </ul>

      <Toggle />
    </nav>
  )
}
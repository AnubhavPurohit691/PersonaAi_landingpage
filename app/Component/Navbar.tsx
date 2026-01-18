import { Leftcomponent } from "./Navbarcomponents/Leftcomponent"
import { Rightcomponent } from "./Navbarcomponents/Rightcomponent"

export const Navbar = () => {
  return (
    <div className="flex items-center w-full">
      <div className="flex gap-6 flex-1 justify-start hidden md:flex"><Leftcomponent /></div>
      <h1 className="font-bold text-xl text-center">PersonaAI</h1>
      <div className="flex gap-6 flex-1 justify-end"><Rightcomponent /></div>
    </div>
  )
}


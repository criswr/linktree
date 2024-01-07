import profile from "../assets/images/profile.jpg"
import Title from "./Title"

const Header = () => {
  return (
    <header className="fade-in flex flex-col items-center gap-3">            
      <img src={profile} alt="Cris" className="rounded-full shadow w-32" />
      <Title />
    </header>
  )
}

export default Header
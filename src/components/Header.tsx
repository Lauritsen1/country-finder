import githubLogo from "../assets/github-icon.svg"

import { Link } from "react-router-dom"

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <nav className="space-x-5">
        <Link className="text-lg font-semibold text-white" to="/">
          Home
        </Link>
        <Link className="text-lg font-semibold text-white" to="/searchindex">
          Index
        </Link>
      </nav>

      <div className="w-max rounded-full bg-white p-1">
        <img className="h-6 w-6" src={githubLogo} alt="github logo" />
      </div>
    </header>
  )
}

export default Header

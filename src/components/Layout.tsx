import React from "react"
import Header from "./Header"

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-slate-900 px-4">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col">
        <Header />
        <h1 className="my-12 text-center text-5xl font-extrabold text-white">
          COUNTRY FINDER
        </h1>
        {children}
      </div>
    </div>
  )
}

export default Layout

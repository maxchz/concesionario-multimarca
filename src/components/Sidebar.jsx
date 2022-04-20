import React from 'react'
import TriggerDarkMode from 'components/TriggerDarkMode';


const Sidebar = () => {
  return (
    <nav className="flex flex-col w-72 border border-gray-300 justify-between">
      <TriggerDarkMode/>
    </nav>
  )
}

export default Sidebar;
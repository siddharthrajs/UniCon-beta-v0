'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, 
  Heart, 
  Users, 
  User, 
  MessageCircle, 
  UsersRound, 
  Settings 
} from 'lucide-react'
import { Button } from './ui/button'
import { LogoutButton } from './logout-button'

const navigationItems = [
  {
    name: 'Home',
    href: '/protected/home',
    icon: Home
  },
  {
    name: 'Love',
    href: '/protected/love',
    icon: Heart
  },
  {
    name: 'Collaborate',
    href: '/protected/collaborate',
    icon: Users
  },
  {
    name: 'Requests',
    href: '/protected/requests',
    icon: User
  },
  {
    name: 'Messages',
    href: '/protected/messages',
    icon: MessageCircle
  },
  {
    name: 'Communities',
    href: '/protected/communities',
    icon: UsersRound
  },
  {
    name: 'Settings',
    href: '/protected/settings',
    icon: Settings
  }
]

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className="w-80 bg-gray-950 p-6 flex flex-col rounded-4xl m-4">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-white text-2xl font-bold">ThaparConnect</h1>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center space-x-4 px-6 py-4 rounded-full text-lg font-medium transition-all duration-200
                ${isActive 
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }
              `}
            >
              <Icon size={24} />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>

      {/* User Profile Section */}
      <div className="mt-auto pt-6 border-t border-gray-700">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">ST</span>
          </div>
          <div className="flex-1">
            <p className="text-white font-semibold text-lg">Siddharth Thapar</p>
            <p className="text-gray-400 text-sm">@thapar.edu</p>
          </div>
            <LogoutButton />
        </div>
      </div>
    </div>
  )
}

export default Sidebar

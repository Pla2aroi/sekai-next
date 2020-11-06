import React from 'react'

import { MenuAlt1 } from '../../../core/components/icons/menuAlt1'

import { useNetworkAvailability } from 'web-api-hooks'

interface IProps {
  onToggleSidebar?(): void
}

export const MobileHeader: React.FC<IProps> = React.memo(props => {
  const { onToggleSidebar = () => {} } = props

  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden">
      <button
        onClick={onToggleSidebar}
        className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 lg:hidden"
        aria-label="Open sidebar"
      >
        <div className="inline-block relative">
          <MenuAlt1 className="h-6 w-6" />
          <Indicator />
        </div>
      </button>
    </div>
  )
})

const Indicator: React.FC = React.memo(props => {
  const isOnline = useNetworkAvailability()

  if (!isOnline) {
    return (
      <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full text-white shadow-solid bg-red-400"></span>
    )
  } else {
    return null
  }
})

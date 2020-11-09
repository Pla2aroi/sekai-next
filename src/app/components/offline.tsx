import { FunctionComponent, memo } from 'react'

import { StatusOffline } from '../../core/components/icons/statusOffline'

import { useNetworkAvailability } from 'web-api-hooks'

export const Offline: FunctionComponent = memo(props => {
  const isOnline = useNetworkAvailability()

  if (!isOnline) {
    return (
      <div className="pt-4 px-6">
        <div className="bg-red-500 text-white text-sm rounded-full px-4 py-1 font-bold flex items-center">
          <StatusOffline className="w-4 h-4 mr-1" />
          Offline mode
        </div>
      </div>
    )
  } else {
    return null
  }
})

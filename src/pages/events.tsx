import { Fragment } from 'react'

import { GetStaticProps, NextPage } from 'next'

import { HeadTitle } from '../core/components/headTitle'
import { EventCard } from '../core/components/eventCard'

import { Event } from '../@types/Event'

interface Props {
  events: Event[]
}

const Page: NextPage<Props> = props => {
  const { events } = props

  return (
    <Fragment>
      <HeadTitle title="Events" />
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {events.map(event => (
            <EventCard key={`event-${event.id}`} event={event} />
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps<Props> = async context => {
  const { getEvents } = await import('../core/services/getEvents')

  const events = await getEvents()

  return {
    props: {
      events,
    },
  }
}

export default Page

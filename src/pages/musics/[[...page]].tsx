import { Fragment, useMemo } from 'react'

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { MusicsListing } from '../../modules/musics/components/listing'
import { Pagination } from '../../core/components/pagination'
import { HeadTitle } from '../../core/components/headTitle'

import { Music } from '../../@types/Music'

interface Props {
  musics: Music[]
  maxPage: number
  currentPage: number
}

const Page: NextPage<Props> = props => {
  const { maxPage, currentPage } = props

  const pagination = useMemo(
    () => (
      <Pagination
        max={maxPage}
        current={currentPage}
        prefix="/musics/"
        className="py-6 md:py-10 text-md md:text-lg"
      />
    ),
    [currentPage]
  )

  return (
    <Fragment>
      <HeadTitle title="Musics" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {pagination}
        <MusicsListing {...props} />
        {pagination}
      </div>
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps<Props> = async context => {
  const { get } = await import('lodash')
  const { getMusicsChunks } = await import(
    '../../modules/musics/services/getMusicsChunks'
  )

  const { params } = context
  const currentPage = Number(get(params, 'page[1]', '1'))

  const chunks = await getMusicsChunks()

  return {
    props: {
      // minus 1 refer to index
      musics: get(chunks, currentPage - 1),
      // for pagination
      currentPage,
      maxPage: chunks.length,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { getMusicsChunks } = await import(
    '../../modules/musics/services/getMusicsChunks'
  )

  const chunks = await getMusicsChunks()

  return {
    paths: chunks.map((chunk, i) => {
      const page = i + 1

      return {
        // page 1 will be / and the rest will be /p/:page
        params: page === 1 ? { page: [] } : { page: ['p', page.toString()] },
      }
    }),
    fallback: false,
  }
}

export default Page

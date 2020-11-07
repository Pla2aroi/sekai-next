import { Fragment, FunctionComponent } from 'react'

import Image from 'next/image'

import { Music } from '../../../@types/Music'
import { MusicDifficulty } from '../../../@types/MusicDifficulty'
import { MusicTag } from '../../../@types/MusicTag'
import { MusicVocal } from '../../../@types/MusicVocal'
import { Vocals } from './vocals'

interface Props {
  music: Music
  difficulties: MusicDifficulty[]
  tags: MusicTag[]
  vocals: MusicVocal[]
}

export const MusicDetail: FunctionComponent<Props> = props => {
  const { music, difficulties, tags, vocals } = props

  return (
    <Fragment>
      <div className="max-w-4xl mx-auto grid grid-cols-3 py-8 gap-8">
        <div className="col-span-1 rounded-lg overflow-hidden">
          <Image
            src={`https://sekai-res.dnaroma.eu/file/sekai-assets/music/jacket/${music.assetbundleName}_rip/${music.assetbundleName}.webp`}
            width={740}
            height={740}
          />
        </div>
        <div className="w-full">
          <h1 className="text-2xl font-bold text-gray-900">{music.title}</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto space-x-4">
        <Vocals vocals={vocals} />
      </div>
    </Fragment>
  )
}

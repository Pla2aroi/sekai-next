import { MusicCategory } from '../../../@types/MusicCategory'

export const getMusicVideo = (
  musicId: number,
  musicCategories: MusicCategory
) => {
  const mode =
    musicCategories === 'original'
      ? 'original_mv'
      : musicCategories === 'mv_2d'
      ? 'sekai_mv'
      : ''
  const paddedMusicId = String(musicId).padStart(4, '0')

  return `https://sekai-res.dnaroma.eu/file/sekai-assets/live/2dmode/${mode}/${paddedMusicId}_rip/${paddedMusicId}.mp4`
}

export interface SoundList {
  count: number
  previous: any // unknown sometimes null
  next: string
  results: Array<SoundListItem>
}

export interface SoundListItem {
  id: number
  name: string
  tags: Array<string>
  license: string
  username: string
}

export interface Sound {
  id: number
  url: string
  name: string
  tags: Array<string>
  description: string
  geotag: any // unknown sometimes null
  created: string
  license: string
  type: string
  channels: number
  filesize: number
  bitrate: number
  bitdepth: number
  duration: number
  samplerate: number
  username: string
  pack: string
  pack_name: any // unknown sometimes null
  download: string
  bookmark: string
  previews: {
    "preview-hq-mp3": string
    "preview-hq-ogg": string
    "preview-lq-mp3": string
    "preview-lq-ogg": string
  }
  images: {
    waveform_m: string
    waveform_l: string
    spectral_m: string
    spectral_l: string
    waveform_bw_m: string
    waveform_bw_l: string
    spectral_bw_m: string
    spectral_bw_l: string
  }
  num_downloads: number
  avg_rating: number
  num_ratings: number
  rate: string
  comments: string
  num_comments: number
  comment: string
  similar_sounds: string
  analysis: string
  analysis_frames: string
  analysis_stats: string
  is_explicit: boolean
}

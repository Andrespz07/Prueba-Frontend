import { onMounted, reactive } from 'vue'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://itunes.apple.com'
})

export async function getPodcasts() {
    const response = await instance.get('/us/rss/toppodcasts/limit=4/genre=1310/json')
    const podcasts = response.data.feed.entry.map((podcast) => {
      return {
        ...podcast,
        image: podcast['im:image'][0].label
      }
    })
    return podcasts
  }

// import { axios } from "axios";

// export default{
// setup() {
//     const callingAPI = ref(null)
//     axios.get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
//     .then(data => callingAPI.value = data);
//     return{ callingAPI }


// }
// }

// import { onMounted, reactive } from 'vue'
// import axios from 'axios'

// const instance = axios.create({
//   baseURL: 'https://itunes.apple.com'
// })

// export default {
//   setup() {
//     const podcasts = reactive([])

//     onMounted(async () => {
//       const response = await instance.get('/us/rss/toppodcasts/limit=100/genre=1310/json')
//       podcasts = response.data.feed.entry
      
//     })

//     return {
//       podcasts
//     }
//   }
  
// }

import { onMounted, reactive } from 'vue'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://itunes.apple.com'
})

// export async function getPodcasts() {
//   const response = await instance.get('/us/rss/toppodcasts/limit=100/genre=1310/json')
//   return response.data.feed.entry
// }

export async function getPodcasts() {
    const response = await instance.get('/us/rss/toppodcasts/limit=100/genre=1310/json')
    const podcasts = response.data.feed.entry.map((podcast) => {
      return {
        ...podcast,
        image: podcast['im:image'][0].label
      }
    })
    return podcasts
  }

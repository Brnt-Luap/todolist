<template>
  <div v-for="item in completedDestinations" :key="item.id" class="flex items-center space-x-4 bg-white p-2 rounded">
    <div class="flex items-center space-x-4 p-4 bg-gray-100 rounded-md shadow-md">
      <!-- Display of flags (only if country exists) -->
      <img v-if="item.country" :src="getFlagImage(item.country)" alt="Flag" class="rounded-md w-[200px] h-[130px]">
      <div>
        <!-- Display of : city - country and dates -->
        <h2 class="text-lg font-semibold">
          {{ item.city }} <span v-if="item.country">- {{ item.country }}</span>
        </h2>
        <p class="text-gray-700 font-medium dark:text-gray-700">Date:
          <span class="font-medium text-gray-600 dark:text-gray-600">
            {{ item.dateStart ? item.dateStart + ' - ' + item.dateEnd : item.date }}
          </span>
        </p>
        <!-- Display of place -->
        <p v-if="item.place" class="text-gray-700 font-medium dark:text-gray-700">Place visited:
          <span class="font-medium text-gray-600 dark:text-gray-600">
            {{ item.place }}
          </span>
        </p>

        <!-- Display of the note -->
        <div class="flex items-center">
          <span v-for="(star, index) in generateStars(item.rate)" :key="index" v-html="star"></span>
          <span v-if="item.rate !== ''" class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            {{ item.rate }} out of 5
          </span>
          <span v-else class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            No note available
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DestinationDataService from '@/services/DestinationDataService'

export default {
  name: 'LandingView',
  data () {
    return {
      destinations: []
    }
  },
  computed: {
    completedDestinations () {
      return this.destinations.filter(item => item.status === 'done')
    }
  },
  methods: {
    getFlagImage (country) {
      return require(`@/assets/flags/${country}.png`)
    },
    generateStars (rate) {
      const fullStar = `<svg class="w-4 h-4 text-yellow-300 me-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>` // svg of the full star

      const halfStar = `<svg class="w-4 h-4 me-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 20">
          <defs>
            <linearGradient id="halfStar">
              <stop offset="50%" stop-color="gold"/>
              <stop offset="50%" stop-color="lightgray"/>
            </linearGradient>
          </defs>
          <path fill="url(#halfStar)" d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>` // svf of the half star

      const fullStars = Math.floor(rate) // Number of full stars
      const hasHalfStar = rate % 1 >= 0.25 && rate % 1 <= 0.75 // Check if there's a half-star
      const stars = []
      for (let i = 0; i < fullStars; i++) {
        stars.push(fullStar)
      }
      if (hasHalfStar) {
        stars.push(halfStar)
      }
      return stars
    }
  },
  created () {
    DestinationDataService.getAll()
      .then(response => {
        this.destinations = response.data
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des destinations:', error)
      })
  }
}
</script>

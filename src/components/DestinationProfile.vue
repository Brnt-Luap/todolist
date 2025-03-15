<template>
  <div v-for="item in completedDestinations" :key="item.id" class="flex items-center space-x-4 bg-white p-2 rounded">
    <div class="flex items-center space-x-4 p-4 bg-gray-100 rounded-md shadow-md">
      <!-- Display flag if the country exists -->
      <img v-if="item.country" :src="getFlagImage(item.country)" alt="Flag" class="rounded-md w-[200px] h-[130px]">
      <div>
        <!-- Display city, country, and dates -->
        <h2 class="text-lg font-semibold">
          {{ item.city }} <span v-if="item.country">- {{ item.country }}</span>
        </h2>
        <p class="text-gray-700 font-medium">Date:
          <span class="font-medium text-gray-600">
            {{ item.dateStart ? item.dateStart + ' - ' + item.dateEnd : item.date }}
          </span>
        </p>

        <!-- Editable section for places visited -->
        <p class="text-gray-700 font-medium">Places visited:
          <span v-if="!item.editingPlace">
            {{ item.place }}
            <button @click="item.editingPlace = true" class="text-blue-500 ml-2">
              <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4.988 19.012 5.41-5.41m2.366-6.424 4.058 4.058-2.03 5.41L5.3 20 4 18.701l3.355-9.494 5.41-2.029Zm4.626 4.625L12.197 6.61 14.807 4 20 9.194l-2.61 2.61Z"/>
              </svg>
            </button>
          </span>
          <span v-else>
            <input type="text" v-model="item.newPlace" class="p-1 border rounded" placeholder="Enter new place">
            <button @click="savePlace(item)" class="text-white ml-2 bg-gray-700 rounded-md border-2 border-gray-700">Save</button>
            <button @click="item.editingPlace = false" class="bg-white ml-2 text-gray-700 rounded-md border-2 border-gray-700">Cancel</button>
          </span>
        </p>

        <!-- Rating section -->
        <div class="flex items-center">
          <span v-if="!item.editingRate">
            <div class="flex items-center space-x-1">
              <span v-for="(star, index) in generateStars(item.rate)" :key="index" v-html="star" @click="updateRate(item)"></span>
            </div>
            <button @click="item.editingRate = true" class="text-blue-500 ml-2">
              <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4.988 19.012 5.41-5.41m2.366-6.424 4.058 4.058-2.03 5.41L5.3 20 4 18.701l3.355-9.494 5.41-2.029Zm4.626 4.625L12.197 6.61 14.807 4 20 9.194l-2.61 2.61Z"/>
              </svg>
            </button>
          </span>
          <span v-else>
            <input type="number" v-model="item.rate" min="0" max="5" step="0.5" class="p-1 border rounded w-16" placeholder="Rate 0-5">
            <button @click="updateDestination(item)" class="text-green-500 ml-2">Save</button>
            <button @click="item.editingRate = false" class="text-red-500 ml-2">Cancel</button>
          </span>
          <span v-if="item.rate" class="ms-1 text-sm font-medium text-gray-500">{{ item.rate }} out of 5</span>
          <span v-else class="ms-1 text-sm font-medium text-gray-500">No rating available</span>
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
    // Get flag image based on the country
    getFlagImage (country) {
      return require(`@/assets/flags/${country}.png`)
    },
    // Generate star rating
    generateStars (rate) {
      const fullStar = '<svg class="w-4 h-4 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"><path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/></svg>'
      const halfStar = '<svg class="w-4 h-4 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"><defs><linearGradient id="half-grad"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="lightgray"/></linearGradient></defs><path fill="url(#half-grad)" d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/></svg>'
      const emptyStar = '<svg class="w-4 h-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"><path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/></svg>'
      const fullStars = Math.floor(rate)
      const hasHalfStar = rate % 1 !== 0
      const stars = []
      for (let i = 0; i < fullStars; i++) {
        stars.push(fullStar)
      }
      if (hasHalfStar) {
        stars.push(halfStar)
      }
      while (stars.length < 5) {
        stars.push(emptyStar)
      }
      return stars
    },
    // Save new place
    savePlace (item) {
      item.place = item.newPlace
      item.editingPlace = false
      this.updateDestination(item)
    },
    // Update rating
    updateRate (item) {
      this.updateDestination(item)
    },
    // Update destination data
    updateDestination (item) {
      DestinationDataService.update(item.id, item)
        .then(() => {
          item.editingRate = false
        })
        .catch(error => {
          console.error('Error updating destination:', error)
        })
    }
  },
  // Fetch destinations on component creation
  created () {
    DestinationDataService.getAll()
      .then(response => {
        this.destinations = response.data.map(item => ({
          ...item,
          newPlace: item.place || '',
          editingPlace: false,
          editingRate: false
        }))
      })
      .catch(error => {
        console.error('Error fetching destinations:', error)
      })
  }
}
</script>

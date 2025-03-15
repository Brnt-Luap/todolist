<template>
  <div v-for="item in users" :key="item.id" class="flex items-center space-x-4 p-4 bg-white/80 rounded-md shadow-lg backdrop-blur-sm">
        <div>
          <img src="../assets/users/Lulu Castagnette.jpg" alt="User" class="rounded-md w-52 h-52">
          <h2 class="text-lg font-semibold">{{item.username}}</h2>
          <p class="text-gray-600 mt-1/2">{{item.email}}</p>
          <!-- Count the number of “Done” elements-->
          <p class="text-gray-700 mt-1/2">🌍{{doneCount}} Cities visited</p>
          <p class="text-gray-500 mt-1/2">📅 Registered since {{item.registration }}</p>
          <p><router-link to="/"><button type="button" class=" mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Log out</button></router-link></p>
        </div>
  </div>
</template>

<script>
import DestinationDataService from '@/services/DestinationDataService'
import users from '@/users.json'

export default {
  name: 'LandingView',
  data () {
    return {
      users: users,
      destinations: [] // Stocker les données récupérées
    }
  },
  computed: {
    doneCount () {
      return this.destinations.filter(item => item.status === 'done').length
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

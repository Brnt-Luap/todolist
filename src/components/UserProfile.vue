<template>
  <div v-if="loggedInUser" class="flex items-center space-x-4 p-4 bg-white/80 rounded-md shadow-lg backdrop-blur-sm">
    <img src="../assets/users/avatar.png" alt="User" class="rounded-md w-52 h-52">
    <div>
      <h2 class="text-lg font-semibold">{{ loggedInUser.fullname }}</h2>
      <p class="text-gray-600 mt-1/2">{{ loggedInUser.email }}</p>
      <p class="text-gray-700 mt-1/2">🌍 {{ doneCount }} Cities visited</p>
      <p class="text-gray-500 mt-1/2">📅 Registered since {{ registrationYear }}</p>
      <p>
        <button @click="logout" class="mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5">
          Log out
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DestinationDataService from '@/services/DestinationDataService'

export default {
  name: 'ProfileView',
  data () {
    return {
      destinations: []
    }
  },
  computed: {
    ...mapState(['user']), // Get the logged-in user from Vuex
    loggedInUser () {
      return this.user // Vuex state contains the authenticated user
    },
    doneCount () {
      if (!this.loggedInUser) return 0
      return this.destinations.filter(item => item.status === 'done' && item.userId === this.loggedInUser.id).length
    },
    registrationYear () {
      if (this.loggedInUser && this.loggedInUser.createdAt) {
        return new Date(this.loggedInUser.createdAt).getFullYear()
      }
      return 'Unknown' // Fallback in case there's no date
    }

  },
  created () {
    // Fetch destinations
    DestinationDataService.getAll()
      .then(response => {
        this.destinations = response.data
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des destinations:', error)
      })
  },
  methods: {
    getUserImage (user) {
      return `../assets/users/${user.username}.jpg` // Adjust path accordingly
    },
    logout () {
      this.$store.dispatch('logout') // Call Vuex logout action
      this.$router.push('/') // Redirect to home page
    }
  }
}
</script>

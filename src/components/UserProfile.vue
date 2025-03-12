<template>
  <div v-for="item in users" :key="item.id" class="flex items-center space-x-4 p-4 bg-white/80 rounded-md shadow-lg backdrop-blur-sm">
      <img :src="getUserImage(item.username)" alt="User" class="rounded-md w-52 h-52">
        <div>
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
import destinations from '@/destinations.json'
import users from '@/users.json'

export default {
  name: 'LandingView',
  data () {
    return {
      task: destinations,
      users: users
    }
  },
  computed: {
    doneCount () {
      return this.task.filter(item => item.status === 'done').length
    }
  },
  methods: {
    getUserImage (user) {
      return require(`@/assets/users/${user}.jpg`)
    }
  }
}
</script>

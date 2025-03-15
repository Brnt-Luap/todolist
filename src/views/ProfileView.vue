<template>
      <HeroHeader/>
      <div class="bg-montreal p-8 rounded-md shadow-md" style="padding-top: 120px;">
        <div class="flex items-center space-x-4 p-4 bg-white/80 rounded-md shadow-lg backdrop-blur-sm">
          <img src="../assets/profil/lucie.jpg" alt="User" class="rounded-md w-52 h-52">
        <div>
            <h2 class="text-lg font-semibold">Lulu Castagnette</h2>
            <p class="text-gray-600">lulu.castagnette@gmail.com</p>
            <!-- Count the number of “Done” elements-->
            <p class="text-gray-700">🌍{{doneCount}} Cities visited</p>
            <p class="text-gray-500">📅 Registered since 2022</p>
            <p><router-link to="/"><button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Log out</button></router-link></p>
          </div>
        </div>
      </div>
      <span class="mt-2 ml-2 text-3xl font-bold text-black block">Your trips :</span>
      <DestinationProfile/>
</template>

<script>
import DestinationProfile from '@/components/DestinationProfile.vue'
import HeroHeader from '@/components/HeroHeader.vue'
import destinations from '@/destinations.json'

export default {
  name: 'LandingView',
  components: {
    HeroHeader,
    DestinationProfile
  },
  data () {
    return {
      task: destinations
    }
  },
  computed: {
    doneCount () {
      return this.task.length > 0 ? this.task[0].done.length : 0
    },
    getdate () {
      return this.task?.[0]?.done?.[0]?.date || ''
    }
  }
}
</script>

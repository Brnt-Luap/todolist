<template>
      <HeroHeader/>
      <div class="mt-20 bg-montreal p-8 rounded-md shadow-md">
        <!-- Peut-être créer un composant pour cette partie -->
         <UserProfile/>
      </div>
      <span class="mt-2 ml-2 text-3xl font-bold text-black block">Your trips :</span>
      <DestinationProfile/>
</template>

<script>
import DestinationProfile from '@/components/DestinationProfile.vue'
import HeroHeader from '@/components/HeroHeader.vue'
import UserProfile from '@/components/UserProfile.vue'
import destinations from '@/destinations.json'

export default {
  name: 'LandingView',
  components: {
    HeroHeader,
    DestinationProfile,
    UserProfile
  },
  data () {
    return {
      task: destinations
    }
  },
  computed: {
    doneCount () {
      return this.task.length > 0 ? this.task[0].done.length : 0
    }
  }
}
</script>

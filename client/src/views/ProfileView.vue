<template>
      <HeroHeader/>
      <div class="bg-montreal p-8 rounded-md shadow-md">
         <UserProfile/>
      </div>
      <span class="mt-2 ml-2 text-3xl font-bold text-black block">Your trips :</span>
      <DestinationProfile/>
</template>

<script>
import DestinationProfile from '@/components/DestinationProfile.vue'
import HeroHeader from '@/components/HeroHeader.vue'
import UserProfile from '@/components/UserProfile.vue'

export default {
  name: 'LandingView',
  components: {
    HeroHeader,
    DestinationProfile,
    UserProfile
  }
}
</script>

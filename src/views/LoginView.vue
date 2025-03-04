<template>
    <div>
        <img :src="logo" alt="Logo"/>
        <TopBar/>
    </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import logo from '@/assets/background.png'
export default {
  components: {
    TopBar
  },
  name: 'LoginBackground',
  data () {
    return {
      logo
    }
  }
}

</script>

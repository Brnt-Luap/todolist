<template>
    <div>
        <img :src="logo" alt="Logo"/>
        <TopBar/>
        <MainFooter/>
    </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import MainFooter from '@/components/MainFooter.vue'
import logo from '@/assets/background.png'
export default {
  components: {
    TopBar,
    MainFooter
  },
  name: 'LoginBackground',
  data () {
    return {
      logo
    }
  }
}

</script>

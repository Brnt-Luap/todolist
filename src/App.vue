<template>
    <router-view/>
    <div class="mt-2">
      <MainFooter/>
    </div>
    <SideBar
    v-if="showSideBar"
    :toggle="toggleSideBar"
    />
</template>

<script>
import MainFooter from './components/MainFooter.vue'
import SideBar from './components/SideBar.vue'

export default {
  components: {
    MainFooter,
    SideBar
  },
  data () {
    return {
      showSideBar: false
    }
  },
  methods: {
    toggleSideBar () {
      this.showSideBar = !this.showSideBar
    }
  }
}
</script>

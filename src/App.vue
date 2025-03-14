<template>
    <router-view
    :user = "user"/>
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
import UserDataService from '@/services/UserDataService'

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
  },
  created () {
    UserDataService.getAuth()
      .then(response => {
        this.name = response.data.fullname
        this.$store.dispatch('user', response.data)
      })
      .catch(e => {
        this.$store.dispatch('user', null)
      })
  },
  logout () {
    UserDataService.getLogout()
      .then(response => {
        localStorage.removeItem('token')
        this.$store.dispatch('user', null)
        this.$router.push('login')
      })
  }
}
</script>

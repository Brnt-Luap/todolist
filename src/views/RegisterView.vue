<template>
  <div>
    <TopBar/>
    <section class="bg-login bg-cover bg-center">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <h1 class="flex items-center mb-6 text-2xl font-semibold text-white bg-black rounded-md p-2 dark:bg-black/60">Create your account</h1>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700 dark:bg-white/60">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div v-show="message" class="bg-red-500 mb-2 text-white p-2 rounded">{{ message }}</div>                  <form class="space-y-4 md:space-y-6">
                      <div>
                        <label for="fullName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Full Name</label>
                        <input type="text" id="fullName" class="bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required="" v-model="user.fullname"/>
                      </div>
                      <div>
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Username</label>
                          <input type="email" name="email" id="email" class="bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required="" v-model="user.email">
                      </div>
                      <div>
                          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                          <input type="password" name="password" id="password" placeholder="Enter your password" class="bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" v-model="user.password">
                      </div>
                      <div class="flex items-center">
                        <button type="submit" @click="saveUser" class="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-primary-700 dark:focus:ring-primary-800">Register</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    </section>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import UserDataService from '@/services/UserDataService'
export default {
  components: {
    TopBar
  },
  data () {
    return {
      message: null,
      emailError: '', // For email validation errors
      user: {
        email: '',
        password: '',
        fullname: ''
      }
    }
  },
  methods: {
    validateEmail (email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Basic email regex
      return regex.test(email)
    },
    saveUser () {
      // Reset error message
      this.emailError = ''
      // Validate email
      if (!this.user.email) {
        this.emailError = 'Email is required.'
        return
      }
      if (!this.validateEmail(this.user.email)) {
        this.emailError = 'Please enter a valid email address.'
        return
      }
      UserDataService.create(this.user)
        .then(response => {
          // console.log(response.data)
          this.$router.push({ name: 'login' })
        })
        .catch(error => {
          // Handle the error here
          // console.log(error.response.data.message)
          this.message = error.response.data.message
        })
    }
  }
}

</script>

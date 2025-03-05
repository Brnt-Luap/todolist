<template>
  <div>
    <TopBar/>
      <section class="bg-login bg-cover bg-center">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <h1 class="flex items-center mb-6 text-2xl font-semibold text-white bg-black rounded-md p-2 dark:bg-black/60">Login</h1>
            <div class="w-full bg-white-80 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white/60 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl text-center font-bold text-gray-900 md:text-2x1">
                        Sign in to your account
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Username</label>
                            <input type="email" name="email" id="email" class="bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required="">
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                            <input type="password" name="password" id="password" placeholder="Enter your password" class="bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                        </div>
                        <div class="flex items-center space-x-4">
                            <router-link to="/landing">

                            <button type="submit" class="text-black bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-300 dark:hover:bg-black dark:hover:text-white dark:focus:ring-primary-800">
                                Sign In
                            </button>
                          </router-link>
                          <router-link to="/register">
                            <button type="button" class="text-white bg-black inline-flex items-center hover:text-black border border-black-600 hover:bg-white focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-black-500 dark:text-black-500 dark:hover:text-black dark:hover:bg-black-600 dark:focus:ring-black-900">
                                Register
                            </button>
                          </router-link>
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
export default {
  components: {
    TopBar
  }
}

</script>

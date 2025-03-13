<template>
  <HeroHeader/>
  <div class="max-w-screen-xl mx-auto bg-white">
    <nav class="border-gray-200">
        <div class="space-y-4">
            <div>
                <span class="text-4xl font-bold text-black block flex justify-center mt-5">Travel To Do List</span>
                 <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-black mb-10 mt-10">
                  <svg class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                  </svg>
                  <p>“ Life is either a daring adventure or nothing at all. “ - Helen Keller</p>
                </blockquote>
                <img src="../assets/landing/landing.png" alt="ToDo" class="rounded-md pb-5">
            </div>

            <span class="mt-16 text-3xl font-bold text-black block">Your lists :</span>
            <!-- Clickable images + scroll to destination page -->
            <div class="flex justify-center space-x-8">
                <div class="flex flex-col items-center">
                  <router-link to="/list#todo"><img src="@/assets/landing/todo.jpg" alt="ToDo" class="rounded-md transition-transform duration-300 hover:scale-90"></router-link>
                    <p class="text-gray-700 font-medium font-bold leading-tight">To Do</p>
                    <p class="text-gray-700 font-small italic leading-tight">Where I dream to go !</p>
                </div>
                <div class="flex flex-col items-center">
                  <router-link to="/list#doing"><img src="../assets/landing/doing.jpg" alt="Doing" class="rounded-md transition-transform duration-300 hover:scale-90"></router-link>
                    <p class="text-gray-700 font-bold font-medium leading-tight">Doing</p>
                    <p class="text-gray-700 font-small italic leading-tight">The dream that I am currently living !</p>
                </div>
                <div class="flex flex-col items-center">
                  <router-link to="/list#done"><img src="../assets/landing/done.jpg" alt="Done" class="rounded-md transition-transform duration-300 hover:scale-90"></router-link>
                    <p class="text-gray-700 font-medium font-bold leading-tight">Done</p>
                    <p class="text-gray-700 font-small italic leading-tight">From dream to reality...</p>
                </div>
            </div>
        </div>
    </nav>
  </div>

</template>

<script>
import HeroHeader from '@/components/HeroHeader.vue'
export default {
  name: 'LandingView',
  components: {
    HeroHeader
  }
}
</script>

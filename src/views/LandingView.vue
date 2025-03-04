<template>
  <HeroHeader/>
  <div class="max-w-screen-xl mx-auto bg-white">
    <nav class="border-gray-200">
        <div class="space-y-4">
            <!-- Texte principal -->
            <div>
                <span class="text-4xl font-bold text-black block">Travel To Do List</span>
                <p class="mb-4 font-light mt-1 italic">“ Life is either a daring adventure or nothing at all. “ - Helen Keller</p>
                <img src="../assets/landing/landing.png" alt="ToDo" class="rounded-md pb-5">
            </div>

            <span class="mt-16 text-3xl font-bold text-black block">Your lists :</span>
            <!-- Images avec message sous chaque -->
            <div class="flex justify-center space-x-8">
                <div class="flex flex-col items-center">
                  <router-link to="/list#todo"><img src="@/assets/landing/todo.jpg" alt="ToDo" class="rounded-md"></router-link>
                    <p class="text-gray-700 font-medium font-bold leading-tight">To Do</p>
                    <p class="text-gray-700 font-small italic leading-tight">Where I dream to go !</p>
                </div>
                <div class="flex flex-col items-center">
                  <router-link to="/list#doing"><img src="../assets/landing/doing.jpg" alt="Doing" class="rounded-md"></router-link>
                    <p class="text-gray-700 font-bold font-medium leading-tight">Doing</p>
                    <p class="text-gray-700 font-small italic leading-tight">The dream that I am currently living !</p>
                </div>
                <div class="flex flex-col items-center">
                  <router-link to="/list#done"><img src="../assets/landing/done.jpg" alt="Done" class="rounded-md"></router-link>
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

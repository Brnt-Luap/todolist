<template>
    <HeroHeader/>
    <div class="max-w-screen-xl mx-auto bg-white">
    <nav class="border-gray-200">
        <div class="space-y-4 mx-auto flex flex-col items-center justify-center text-center">
            <div>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
            </div>
            <div id="todo">
                <span class="text-4xl font-bold text-black block">To do</span>
                <p class="mb-4 font-light mt-1 italic">“ Life is like riding a bicycle. To keep your balance, you must keep moving. ” - Albert Einstein</p>
                <img src="../assets/thumbnail_image003 (3).jpg" alt="ToDo" class="rounded-lg mb-40 block mx-auto">
            </div>
            <div>
                <span class="text-4xl font-bold text-black block">Doing</span>
                <p class="mb-4 font-light mt-1 italic">“ May the Force be with you. ” - Star Wars</p>
                <img src="../assets/thumbnail_image004.jpg" alt="ToDo" class="rounded-lg mb-40 block mx-auto">
            </div>
            <div>
                <span class="text-4xl font-bold text-black block">Done</span>
                <p class="mb-4 font-light mt-1 italic">“ It is good to have an end to journey toward, but it is the journey that matters in the end. ” - Ernest Hemingway</p>
                <img src="../assets/image001.jpg" alt="ToDo" class="rounded-lg mb-40 block mx-auto">
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

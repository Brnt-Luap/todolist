<template>
    <HeroHeader/>
    <div class="max-w-screen-xl mx-auto bg-white">
    <nav class="border-gray-200">
        <div class="space-y-4 mx-auto flex flex-col items-center justify-center text-center">
            <div id="todo" class="flex items-center space-x-4">
                <span class="text-4xl font-bold text-black leading-tight">To do</span>
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded inline-flex items-center">
                    <span>+</span>
                </button>
            </div>
            <p class="font-light italic mt-0">“ Life is like riding a bicycle. To keep your balance, you must keep moving. ” - Albert Einstein</p>
            <img src="../assets/thumbnail_image003 (3).jpg" alt="ToDo" class="rounded-lg mb-10 block mx-auto">
            <div id="doing" class="flex items-center space-x-4">
                <span class="text-4xl font-bold text-black leading-tight">Doing</span>
            </div>
            <p class="font-light italic mt-0">“ May the Force be with you. ” - Star Wars</p>
            <img src="../assets/thumbnail_image004.jpg" alt="Doing" class="rounded-lg mb-10 block mx-auto">
            <div>
                <span class="text-4xl font-bold text-black leading-tight">Done</span>
            </div>
            <p class="font-light italic mt-0">“ It is good to have an end to journey toward, but it is the journey that matters in the end. ” - Ernest Hemingway</p>
            <img src="../assets/image001.jpg" alt="Done" class="rounded-lg mb-10 block mx-auto">
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

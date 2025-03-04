<template>
    <HeroHeader/>
    <div class="max-w-screen-xl mx-auto bg-white">
    <nav class="border-gray-200">
        <div class="space-y-4 mx-auto flex flex-col items-center justify-center text-center">
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

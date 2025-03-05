<template>
    <HeroHeader/>
    <div class="max-w-screen-xl mx-auto bg-white">
    <nav class="border-gray-200">
        <div class="mx-auto flex flex-col items-center justify-center text-center">
            <div class="flex flex-col items-center mt-10">
                <div class="flex items-center space-x-4" id="todo">
                    <span class="text-4xl font-bold text-black leading-tight">To do</span>
                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1/3 px-1 rounded inline-flex items-center" @click="toggleSideBar">
                        <span>+</span>
                    </button>
                </div>
                <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-black">
                  <svg class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                  </svg>
                  <p>“ Life is like riding a bicycle. To keep your balance, you must keep moving. ” - Albert Einstein</p>
                </blockquote>
                <div class="flex items-center space-x-100 p-4 bg-gray-300 shadow-md w-screen mt-5">
                  <img src="../assets/landing/todo2.jpg" alt="ToDo" class="rounded-lg mt-10 mb-10 block mx-auto">
                </div>
                <div class="flex mt-10">
                    <div class="flex items-center h-5">
                        <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="ms-2 text-sm">
                        <label for="helper-checkbox" class="font-medium text-black-900 dark:text-black-300">The moon</label>
                        <p id="helper-checkbox-text" class="text-xs font-normal text-gray-900 dark:text-gray-500">Inshallah Akhy</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center mt-10" id="doing">
                <div id="doing" class="flex items-center space-x-4">
                    <span class="text-4xl font-bold text-black leading-tight">Doing</span>
                </div>
                <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-black mb-5">
                  <svg class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                  </svg>
                  <p>“ May the Force be with you. ” - Star Wars</p>
                </blockquote>
                <div class="flex items-center space-x-100 p-4 bg-gray-300 shadow-md w-screen">
                  <img src="../assets/landing/doing2.jpg" alt="Doing" class="rounded-lg mt-10 mb-10 block mx-auto h-1/2 w-1/2">
                </div>
                <div class="flex mt-10">
                    <div class="flex items-center h-5">
                        <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="ms-2 text-sm">
                        <label for="helper-checkbox" class="font-medium text-black-900 dark:text-black-300">Montréal</label>
                        <p id="helper-checkbox-text" class="text-xs font-normal text-gray-900 dark:text-gray-500">For 3 months - studies - staying at EVO</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center mt-10" id="done">
                <span class="text-4xl font-bold text-black leading-tight">Done</span>
                <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-black mb-5">
                  <svg class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                  </svg>
                  <p>“ “ It is good to have an end to journey toward, but it is the journey that matters in the end. ” - Ernest Hemingway</p>
                </blockquote>
                <div class="flex items-center space-x-100 p-4 bg-gray-300 shadow-md w-screen">
                  <img src="../assets/landing/done2.webp" alt="Done" class="rounded-lg mt-10 mb-10 block mx-auto">
                </div>
                <div class="flex mt-10">
                    <div class="flex items-center h-5">
                        <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="ms-2 text-sm">
                        <label for="helper-checkbox" class="font-medium text-black-900 dark:text-black-300">Beijing</label>
                        <p id="helper-checkbox-text" class="text-xs font-normal text-gray-900 dark:text-gray-500">Happiness came upside down</p>
                    </div>
                </div>
                <div class="flex mt-3">
                    <div class="flex items-center h-5">
                        <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    <div class="ms-2 text-sm">
                        <label for="helper-checkbox" class="font-medium text-black-900 dark:text-black-300">Marrakech</label>
                        <p id="helper-checkbox-text" class="text-xs font-normal text-gray-900 dark:text-gray-500">🐍</p>
                    </div>
                </div>
            </div>
        </div>

    </nav>
    </div>
    <SideBar
    v-if="showSideBar"
    :toggle="toggleSideBar"
    />
</template>

<script>
import HeroHeader from '@/components/HeroHeader.vue'
import SideBar from '@/components/SideBar.vue'
export default {
  name: 'LandingView',
  components: {
    HeroHeader,
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

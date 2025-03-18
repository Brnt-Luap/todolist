<template>
  <HeroHeader/>
  <div class="max-w-screen-xl mx-auto bg-white">
  <nav class="border-gray-200">
      <div class="mx-auto flex flex-col items-center justify-center text-center">
          <!-- TO DO PART -->
          <div class="flex flex-col items-center mt-10" id="todo">
              <div class="flex items-center space-x-4" id="todo">
                  <span class="text-4xl font-bold text-black leading-tight">To do</span>
                  <!-- Close SideBar button -->
                  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-full inline-flex items-center justify-center h-6 w-6" @click="toggleSideBar">
                      <span class="text-lg">+</span>
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
              <!-- Create task for each task in todo -->
              <div v-for="task in task.todo" :key="task.id" class="flex items-center space-x-4 bg-green-100 p-4 rounded shadow-md mt-2">
                  <div class="flex items-center h-5">
                      <input type="checkbox" @change="moveTask(task, 'todo')" class="w-4 h-4 text-blue-600">
                  </div>
                  <div class="ms-2 text-sm">
                      <label class="font-medium text-black-900">{{ task.city }}</label>
                      <p class="text-xs text-gray-900">{{ task.description }}</p>
                  </div>
                  <button @click="deleteTask(task, 'todo')" class="text-red-500">✕</button>
              </div>
          </div>
          <!-- DOING PART -->
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
              <!-- Create task for each task in doing -->
              <div v-for="task in task.doing" :key="task.id" class="flex items-center space-x-4 bg-yellow-100 p-4 rounded shadow-md mt-2">
                  <div class="flex items-center h-5">
                      <input type="checkbox" @change="moveTask(task, 'doing')" class="w-4 h-4 text-blue-600">
                  </div>
                  <div class="ms-2 text-sm">
                      <label class="font-medium text-black-900">{{ task.city }}</label>
                      <p class="text-xs text-gray-900">{{ task.description }}</p>
                  </div>
                  <button @click="deleteTask(task, 'doing')" class="text-red-500">✕</button>
              </div>
          </div>
          <!-- DONE PART -->
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

              <!-- Create task for each task in done -->
              <div v-for="task in task.done" :key="task.id" class="flex items-center space-x-4 bg-red-100 p-4 rounded shadow-md mt-2">
                  <div class="flex items-center h-5">
                      <input type="checkbox" @change="moveTask(task, 'done')" class="w-4 h-4 text-blue-600" checked>
                  </div>
                  <div class="ms-2 text-sm">
                      <label class="font-medium text-black-900">{{ task.city }}</label>
                      <p class="text-xs text-gray-900">{{ task.description }}</p>
                  </div>
                  <button @click="deleteTask(task, 'done')" class="text-red-500">✕</button>
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
import DestinationDataService from '@/services/DestinationDataService'
import { mapState } from 'vuex'

export default {
  name: 'LandingView',
  components: { HeroHeader, SideBar },
  data () {
    return {
      showSideBar: false,
      task: {
        todo: [],
        doing: [],
        done: []
      }
    }
  },
  computed: {
    ...mapState(['user']), // Retrieves logged-in user from Vuex
    loggedInUser () {
      return this.user // Simplify access to user data
    }
  },
  watch: {
    loggedInUser: {
      immediate: true,
      handler () {
        if (this.loggedInUser) {
          this.fetchTasks() // Refresh tasks as soon as you have the user
        }
      }
    }
  },
  methods: {
    toggleSideBar () {
      this.showSideBar = !this.showSideBar
    },
    fetchTasks () {
      if (!this.loggedInUser) return // Ensures you have a logged-in user

      DestinationDataService.getAll()
        .then(response => {
          // Filter tasks to keep only those created by the logged-in user
          const userTasks = response.data.filter(d => d.userId === this.loggedInUser.id)

          this.task.todo = userTasks.filter(d => d.status === 'todo')
          this.task.doing = userTasks.filter(d => d.status === 'doing')
          this.task.done = userTasks.filter(d => d.status === 'done')
        })
        .catch(error => {
          console.error('Error fetching tasks:', error)
        })
    },
    moveTask (task, currentCategory) {
      const categories = ['todo', 'doing', 'done']
      const currentIndex = categories.indexOf(currentCategory)
      if (currentIndex < categories.length - 1) {
        const nextCategory = categories[currentIndex + 1]
        this.task[currentCategory] = this.task[currentCategory].filter(t => t.id !== task.id)
        task.status = nextCategory
        this.task[nextCategory].push(task)
        this.updateTaskStatus(task)
      }
    },
    updateTaskStatus (task) {
      DestinationDataService.update(task.id, task)
        .then(() => console.log('Task updated'))
        .catch(error => console.error('Error updating task:', error))
    },
    deleteTask (task, category) {
      this.task[category] = this.task[category].filter(t => t.id !== task.id)
      DestinationDataService.delete(task.id)
        .then(() => console.log('Task deleted'))
        .catch(error => console.error('Error deleting task:', error))
    }
  }
}
</script>

<template>
    <aside class="fixed overflow-hidden top-20 right-1 h-81 rounded-lg border border-black">
        <div class="relative h-full bg-gray-100 text-white">
            <h1 class="flex justify-between text-justify items-center p-3 bg-gray-500 border-b border-white text-lg italic text-black">
                Add a destination
                <button class="ml-5 text-lg font-bold text-red-600" @click="toggle">X</button>
            </h1>
                <!-- Buttons container -->
                <form class="bg-gray-200" @submit.prevent="addDestination">
                    <!-- City & Country area -->
                    <label for="Destination_City" class="ml-1 block text-sm font-medium text-gray-900 dark:text-black">Your Destination</label>
                        <!-- Text area for the city -->
                        <input type="text" v-model="newDestination.city" class="mx-1 mb-1 block w-44 p-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-white bg-white dark:bg-gray-800" placeholder="Enter your city..." autocomplete="off">
                        <!-- Button for the country -->
                        <select v-model="newDestination.country" name="statut" class="mx-1 mb-1block w-44 p-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-white bg-white dark:bg-gray-800">
                            <option value="" disabled selected class="text-gray-900 dark:text-black">Choose the country</option>
                                <option value="China">🇨🇳 China</option>
                                <option value="France">🇫🇷 France</option>
                                <option value="Morocco">🇲🇦 Morocco</option>
                                <option value="Japan">🇯🇵 Japan</option>
                                <option value="Greece">🇬🇷 Greece</option>
                                <option value="Brazil">🇧🇷 Brazil</option>
                                <option value="Argentina">🇦🇷 Argentina</option>
                            </select>
                    <!-- Status area -->
                    <label for="Destination_Status" class="ml-1 block mt-1 text-sm font-medium text-gray-900 dark:text-black">Status</label>
                    <ul class="flex justify-center space-x-2 mt-2 items-center ml-1">
                        <!-- ToDo status button -->
                        <li>
                            <input id="Destination_todo" type="radio" v-model="newDestination.status" value="todo" class="peer hidden" name="choice"/>
                            <label for="Destination_todo" class="focus:outline-none text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-teal-200 font-medium rounded-lg text-sm px-5 py-2.5 mx-1/2 border peer-checked:border-black">
                                To Do
                            </label>
                        </li>
                        <!-- Doing status button -->
                        <li>
                            <input id="Destination_doing" type="radio" v-model="newDestination.status" value="doing" class="peer hidden" name="choice"/>
                            <label for="Destination_doing" class="focus:outline-none text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 border peer-checked:border-black">
                                Doing
                            </label>
                        </li>
                        <!-- Done status button -->
                        <li>
                            <input id="Destination_done" type="radio" v-model="newDestination.status" value="done" class="peer hidden" name="choice"/>
                            <label for="Destination_done" class="focus:outline-none text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-teal-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 border peer-checked:border-black">
                                Done
                            </label>
                        </li>
                    </ul>
                    <!-- Dates area -->
                    <div id="date-range-picker" date-rangepicker class="flex flex-col items-start mt-3 ml-1">
                        <label for="input-group-1" class="ml-1 block text-sm font-medium text-gray-900 dark:text-black">Dates</label>
                        <!-- Start date -->
                        <div class="relative w-44">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </div>
                            <input id="datepicker-range-start" name="start" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start">
                        </div>
                        <!-- End date -->
                        <div class="relative w-44 mt-1">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </div>
                            <input id="datepicker-range-end" name="end" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end">
                        </div>
                    </div>
                    <!-- Comment area -->
                    <label for="input-group-1" class="ml-1 mt-1 block text-sm font-medium text-gray-900 dark:text-black">Your Comment</label>
                    <input type="text" v-model="newDestination.comment" class="mx-1 mb-1 block w-44 p-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-white bg-white dark:bg-gray-800" placeholder="Enter your comment..." autocomplete="off">
                    <!-- Submit button-->
                    <div class="flex justify-center mt-2">
                        <button type="submit" class="mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Add to your list
                        </button>
                    </div>
                </form>
        </div>
    </aside>
</template>

<script>
import DestinationDataService from '@/services/DestinationDataService'
export default {
  props: ['toggle'],
  data () {
    return {
      newDestination: {
        city: '',
        country: '',
        status: '',
        comment: ''
      },
      destinations: {
        todo: [],
        doing: [],
        done: []
      }
    }
  },
  methods: {
    addDestination () {
      // if (!this.newDestination.city || !this.newDestination.country || !this.newDestination.status) {
      // alert('Please fill all the fields!')
      //  return
      // }
      this.destinations[this.newDestination.status].push({ ...this.newDestination })
      this.newDestination = { city: '', country: '', status: '', comment: '' } // Reset form
    }
  }
}
</script>

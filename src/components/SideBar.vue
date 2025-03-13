<template>
    <aside class="fixed overflow-hidden top-20 right-1 h-full rounded-lg border border-black">
        <div class="relative h-full bg-gray-100 text-white">
            <h1 class="flex justify-between text-justify items-center p-3 bg-white-500 border-b border-white text-lg text-black">
                Add a destination
                <button class="ml-5 text-lg font-bold text-black-600" @click="toggle">
                    <svg class="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"/>
                    </svg>
                </button>

            </h1>
            <form class="bg-white-200" @submit.prevent="addDestination">
                    <!-- City & Country area -->
                    <label for="Destination_City" class="ml-1 block text-xl font-medium text-gray-900 dark:text-black mb-2 mt-2 text-center">Your Destination</label>
                        <!-- Text area for the city -->
                        <input type="text" v-model="newDestination.city" class="mx-1 mb-1 block w-44 p-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-white bg-white dark:bg-white-800" placeholder="Enter your city..." autocomplete="off">
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
                    <!-- Dates -->
                    <DatePicker
                        v-model="dates"
                        range
                        autoApply
                        model-type="yyyy-MM-dd"
                        placeholder="Select the dates"
                        class="mt-3 w-full"
                    />
                <!-- Comment -->
                <label for="input-group-1" class="ml-1 mt-1 block text-sm font-medium text-gray-900 dark:text-black">Your Comment</label>
                    <input type="text" v-model="newDestination.comment" class="mx-1 mb-1 block w-44 p-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-white bg-white dark:bg-gray-800" placeholder="Enter your comment..." autocomplete="off">
                <!-- Message d'erreur -->
                <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>

                <!-- Submit -->
                <button type="submit" class="w-full mt-4 p-2 text-black bg-gray-400 rounded-md hover:bg-white ">
                    Add
                </button>

                <!-- Message de succès -->
                <p v-if="successMessage" class="text-green-500 mt-2">{{ successMessage }}</p>
            </form>
        </div>
    </aside>
</template>
<script>
import DatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  props: ['toggle'],
  components: { DatePicker },
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
      },
      dates: [],
      errorMessage: '',
      successMessage: ''
    }
  },
  methods: {
    addDestination () {
      // Vérification des champs
      if (!this.newDestination.city || !this.newDestination.country || !this.newDestination.status || this.dates.length !== 2) {
        this.errorMessage = 'Please fill all the fields, including the travel dates!'
        return
      }

      // Ajout dans la bonne catégorie
      this.destinations[this.newDestination.status].push({
        ...this.newDestination,
        startDate: this.dates[0],
        endDate: this.dates[1]
      })

      // Affichage du message de succès
      this.successMessage = 'Destination added successfully!'
      this.errorMessage = ''

      // Reset formulaire
      this.newDestination = { city: '', country: '', status: '', comment: '' }
      this.dates = []

      // Effacer le message après 3 secondes
      setTimeout(() => { this.successMessage = '' }, 3000)
    }
  }
}
</script>

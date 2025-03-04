<template>
    <aside class="fixed overflow-hidden top-20 right-1 h-60 rounded-lg">
        <div class="relative h-full bg-gray-100 text-white">
            <h1 class="flex justify-between text-justify items-center p-3 bg-gray-500 border-b border-white text-lg italic text-black">
                Add a destination
                <button class="ml-5 text-lg font-bold text-red-600" @click="toggle">&times;</button>
            </h1>
                <!-- Conteneur des boutons -->
                <form >
                    <label for="input-group-1" class="ml-1 block text-sm font-medium text-gray-900 dark:text-black">Your Destination</label>
                    <input type="text" id="input-group-1" class="mx-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md" placeholder="Enter your destination...">
                    <label for="input-group-1" class="ml-1 block text-sm font-medium text-gray-900 dark:text-black">Status</label>
                    <ul class="flex justify-center space-x-2 mt-4 items-center ml-2">
                        <li>
                            <input type="radio" id="toggle1" class="peer hidden" name="choice" value="toggle1"/>
                            <label for="toggle1" class="focus:outline-none text-white bg-teal-200 hover:bg-teal-200 focus:ring-4 focus:ring-teal-200 font-medium rounded-lg text-sm px-5 py-2.5 mx-1/2 border peer-checked:border-black">
                                To Do
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="toggle2" class="peer hidden" name="choice" value="toggle2"/>
                            <label for="toggle2" class="focus:outline-none text-white bg-teal-300 hover:bg-teal-300 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 border peer-checked:border-black">
                                Doing
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="toggle3" class="peer hidden" name="choice" value="toggle3"/>
                            <label for="toggle3" class="focus:outline-none text-white bg-teal-400 hover:bg-teal-400 focus:ring-4 focus:ring-teal-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 border peer-checked:border-black">
                                Done
                            </label>
                        </li>
                    </ul>
                    <div class="flex justify-center mt-7">
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            ADD
                        </button>
                    </div>
                </form>
        </div>
    </aside>
</template>

<script>
export default {
  props: ['toggle']
}
</script>

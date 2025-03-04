<template>
    <aside class="fixed overflow-hidden top-20 right-0 h-full rounded-lg">
        <div class="relative h-full bg-gray-100 text-white">
            <h1 class="flex justify-between items-center p-3 bg-gray-500 border-b border-white text-lg italic text-black">
                Ajouter une destination
                <button class="ml-5 text-lg font-bold text-red-600" @click="toggle">&times;</button>
            </h1>
                <!-- Conteneur des boutons -->
                <form >
                    <ul class="flex space-x-1 mt-4">
                        <li>
                            <input type="radio" id="toggle1" class="peer hidden" name="choice" value="toggle1"/>
                            <label for="toggle1" class="focus:outline-none text-white bg-green-200 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 border border-black peer-checked:bg-green-700">
                                To Do
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="toggle2" class="peer hidden" name="choice" value="toggle2"/>
                            <label for="toggle2" class="focus:outline-none text-white bg-green-200 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 border border-black peer-checked:bg-green-700">
                                Doing
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="toggle3" class="peer hidden" name="choice" value="toggle3"/>
                            <label for="toggle3" class="focus:outline-none text-white bg-green-200 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 border border-black peer-checked:bg-green-700">
                                Done
                            </label>
                        </li>
                    </ul>
                </form>
        </div>
    </aside>
</template>

<script>
export default {
  props: ['toggle']
}
</script>

<template>
    <aside class="fixed overflow-hidden top-20 right-0 h-full rounded-lg">
        <div class="relative h-full bg-gray-100 text-white">
            <h1 class="flex justify-between items-center p-3 bg-gray-500 border-b border-white text-lg italic text-black">
                Ajouter une destination
                <button class="ml-5 text-lg font-bold text-red-600" @click="toggle">&times;</button>
            </h1>
        </div>
    </aside>
</template>

<script>
export default {
  props: ['toggle']
}
</script>

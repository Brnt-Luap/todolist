<template>
    <header class="bg-gray-100 text-black border fixed top-0 left-0 w-full z-50">
        <section class="rounded-lg">
            <div class="py-4 px-4 mx-auto lg:py-4 lg:px-4 flex justify-between items-center">
                <div class="sm:text-lg">
                    <router-link to="/landing">
                        <img
                        src="@/assets/landing/pg-logo.jpg"
                        alt="TripGoal Logo"
                        class="h-12 cursor-pointer border-2 border-black rounded-md transition-transform duration-300 hover:scale-110"
                        />
                    </router-link>
                </div>

                <!-- Conteneur flex pour aligner les boutons -->
                <div class="flex space-x-1">
                    <router-link to="/list">
                        <button class="relative inline-flex items-center justify-center p-2 text-black bg-ray-100 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 transition-transform duration-300 hover:scale-110">
                            <span>List</span>
                        </button>
                    </router-link>

                    <router-link to="/landing">
                        <button class="relative inline-flex items-center justify-center p-2 text-black bg-gray-100 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 transition-transform duration-300 hover:scale-110">
                            <span>Home</span>
                        </button>
                    </router-link>

                    <router-link to="/profile">
                        <button class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 transition-transform duration-300 hover:scale-110">
                            Profile
                        </button>
                    </router-link>
                </div>
            </div>
        </section>
    </header>
</template>

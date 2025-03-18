<template>
    <footer class="w-full bg-gray-100 text-black border mt-1 p-4 flex flex-col items-center">
        <span class="text-md font-semibold text-gray-500 text-center">All Rights reserved @2025.</span>
        <div class="sm:text-lg">
                    <router-link to="/landing">
                        <img
                        src="@/assets/landing/pg.png"
                        alt="TripGoal Logo"
                        class="h-12 cursor-pointer rounded-md"
                        />
                    </router-link>
                </div>

        <!-- Clickable Logo -->
        <div class="flex items-center self-start mt-1">
            <router-link to="/incoming"><img src="../assets/logo/logo_facebook.png" alt="Facebook Logo" class="w-6 h-6 mr-2"></router-link>
            <router-link to="/incoming"><img src="../assets/logo/logo_linkedin.png" alt="LinkedIn Logo" class="w-5 h-5 mr-2"></router-link>
            <router-link to="/incoming"><img src="../assets/logo/logo_youtube.png" alt="Youtube Logo" class="w-5 h-5 mr-2"></router-link>
            <router-link to="/incoming"><img src="../assets/logo/logo_instagram.png" alt="Instagram Logo" class="w-5 h-5 mr-2"></router-link>
        </div>

    </footer>
</template>

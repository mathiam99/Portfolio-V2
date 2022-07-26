<template>
    <div class="h-screen px-4">
        <div class="h-1/2">
            <h1 class="text-center text-2xl font-semibold p-2"><i class="fa-solid fa-language"></i> Spoken languages</h1>
            <div class="flex justify-around">
                <div class="bg-white h-64 w-96 rounded-xl shadow-lg flex flex-col justify-center items-center">
                    <p class="font-semibold ">Wolof</p>
                    <div class="w-24 h-24 rounded-full">
                        <img src="../static/sn.png" alt="">
                    </div>
                    
                </div>
                <div class="bg-white h-64 w-96 rounded-xl shadow-lg flex flex-col justify-center items-center">
                    <p class="font-semibold ">Français</p>
                    <div class="w-24 h-24 rounded-full">
                        <img src="../static/fr.png" alt="">
                    </div>
                </div>
                <div class="bg-white h-64 w-96 rounded-xl shadow-lg flex flex-col justify-center items-center">
                    <p class="font-semibold ">English</p>
                    <div class="w-24 h-24 rounded-full">
                        <img src="../static/uk.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="h-1/2">
            <h1 class="text-center text-2xl font-semibold p-2"><i class="fa-solid fa-campfire"></i> Centre d'interêt & Hobbies</h1>
            <div class="flex justify-around">
                <div class="bg-white h-64 w-96 rounded-xl shadow-lg flex flex-col justify-center items-center">
                    <p class="font-semibold ">Soccer</p>
                    <div class="w-24 h-24 rounded-full">
                        <img src="../static/soccer.png" alt="">
                    </div>
                    
                </div>
                <div class="bg-white h-64 w-96 rounded-xl shadow-lg flex flex-col justify-center items-center">
                    <p class="font-semibold ">Anime</p>
                    <div class="w-24 h-24 rounded-full">
                        <img src="../static/anime.png" alt="">
                    </div>
                </div>
                <div class="bg-white h-64 w-96 rounded-xl shadow-lg flex flex-col justify-center items-center">
                    <p class="font-semibold ">Gaming</p>
                    <div class="w-24 h-24 rounded-full">
                        <img src="../static/gaming.png" alt="">
                    </div>
                </div>
            </div>            
        </div>
    </div>
</template>

<script>
    export default{
        name:'Languages'
    }
</script>
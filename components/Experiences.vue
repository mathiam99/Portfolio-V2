<template>
    <div class="h-screen flex">
        <div class="left w-1/2">

        </div>

        <div class="w-1/2 p-12">
            <h1 class="text-2xl font-semibold text-center"><i class="fa-solid fa-book"></i> Experiences professionnelles</h1>
            <ol class="relative border-l border-green-400 pt-4 mt-16">                  
                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-green-400 rounded-full -left-1.5 border border-white"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400">Août 2021 - maintenant</time>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Assistant planification de previsions des ressources à la Direction des Services CLients du Groupe Sonatel.</h3>
                    <p class="mb-4 text-base font-normal text-gray-500">Un poste qui consitait à produire des reportings quotidien pour le suivi et le pilotage des performances des prestataires.</p>
                </li>

                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-green-400 rounded-full -left-1.5 border border-white"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400">Avril 2021 - Août 2021</time>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Stagiaire Assistant planification et prévison des ressouces à la Direction des Services Clients du Groupe Sonatel.</h3>
                    <p class="mb-4 text-base font-normal text-gray-500">Stage à la DSC du Groupe Sonatel. Un poste qui consitait à produire des reportings quotidien pour le suivi et le pilotage des performances des prestataires.</p>
                </li>

                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-green-400 rounded-full -left-1.5 border border-white"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400">Septembre 2020 - Avril 2021</time>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">FreeLance</h3>
                    <p class="mb-4 text-base font-normal text-gray-500">Freelancing en developpement web et traitement et analyse de données.</p>
                </li>
            </ol>
        </div>
    </div>
</template>


<script>
    export default{
        name:'Experience'
    }
</script>

<style scoped>
    .left{
        background-image: url('../static/vectorcity.gif');
        background-repeat: no-repeat;
        background-size: 50%;
        background-attachment: fixed;
    }
</style>
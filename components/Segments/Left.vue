<template>
    <div class="left h-full w-1/2 p-4 flex flex-col items-center justify-evenly">
        <p class="text-2xl font-semibold">Hello world ✌ !</p>
        <div class="presentation md:w-2/3 bg-white p-4 shadow-xl rounded-xl">
            <div class="flex items-center">
                <div class="w-24 h-24 rounded-full overflow-hidden">
                <img src="https://via.placeholder.com/150" alt="">
            </div>
                <div class="flex flex-col mx-auto items-center">
                    <p class="text-xl font-semibold text-green-500">Mathiam Mbow</p>
                    <p class="text-gray-500">Webdev & Data scientist</p>
                </div>
            </div>

            <div class="mt-4">
                <p>
                    <i class="fa-solid fa-cake-candles"></i>
                    Age : 23
                </p>

                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    Adresse : Yoff Layenne Rte de l'aeroport
                </p>

                <p>
                    <i class="fa-solid fa-at"></i>
                    Email : mathiammbow99@gmail.com
                </p>

                <p>
                    <i class="fa-solid fa-phone"></i>
                    Téléphone : +221 77 856 73 76
                </p>

                <p>
                    <i class="fa-brands fa-github"></i>
                    Github : http://github.com/mathiam99
                </p>
            </div>
        </div>

        <div class="text-xl p-4">
            <p class="italic text-gray-600">"if debugging is the process of removing bugs then programming must be the process of putting them in."</p>
            <p class="font-semibold text-green-500">Edsger W. Dijkstra</p>
        </div>

    </div>
</template>

<script>
export default{
    name:'Left'
}
</script>
<template>
    <div class="h-screen flex">
        <div class="p-4 w-1/2">
            <h1 class="text-2xl font-semibold text-center"><i class="fa-solid fa-screwdriver-wrench"></i> Skills</h1>
 
            <div class="p-4">
                
                <div class="flex justify-between mb-1">
                <span class="text-base font-medium font-semibold">HTML</span>
                <span class="text-sm font-medium text-green-500 font-semibold">90%</span>
                </div>
                <div class="w-full bg-gray-300 rounded-full h-2.5">
                <div class="bg-green-500 h-2.5 rounded-full" style="width: 90%"></div>
                </div>

                <div class="flex justify-between mb-1 mt-4">
                <span class="text-base font-medium font-semibold">CSS</span>
                <span class="text-sm font-medium text-green-500 font-semibold">85%</span>
                </div>
                <div class="w-full bg-gray-300 rounded-full h-2.5">
                <div class="bg-green-500 h-2.5 rounded-full" style="width: 85%"></div>
                </div>
                
                <div class="flex justify-between mb-1 mt-4">
                <span class="text-base font-medium font-semibold">JavaScript</span>
                <span class="text-sm font-medium text-green-500 font-semibold">73%</span>
                </div>
                <div class="w-full bg-gray-300 rounded-full h-2.5">
                <div class="bg-green-500 h-2.5 rounded-full" style="width: 75%"></div>
                </div>

                <div class="flex justify-between mb-1 mt-4">
                <span class="text-base font-medium font-semibold">Python</span>
                <span class="text-sm font-medium text-green-500 font-semibold">80%</span>
                </div>
                <div class="w-full bg-gray-300 rounded-full h-2.5">
                <div class="bg-green-500 h-2.5 rounded-full" style="width: 80%"></div>
                </div>

                <div class="flex justify-between mb-1 mt-4">
                <span class="text-base font-medium font-semibold">SQL</span>
                <span class="text-sm font-medium text-green-500 font-semibold">76%</span>
                </div>
                <div class="w-full bg-gray-300 rounded-full h-2.5">
                <div class="bg-green-500 h-2.5 rounded-full" style="width: 76%"></div>
                </div>

                <div class="flex justify-between mb-1 mt-4">
                <span class="text-base font-medium font-semibold">Django (Python)</span>
                <span class="text-sm font-medium text-green-500 font-semibold">78%</span>
                </div>
                <div class="w-full bg-gray-300 rounded-full h-2.5">
                <div class="bg-green-500 h-2.5 rounded-full" style="width: 78%"></div>
                </div>

                <div class="flex justify-between mb-1 mt-4">
                <span class="text-base font-medium font-semibold">Data Analysis</span>
                <span class="text-sm font-medium text-green-500 font-semibold">69%</span>
                </div>
                <div class="w-full bg-gray-300 rounded-full h-2.5">
                <div class="bg-green-500 h-2.5 rounded-full" style="width: 69%"></div>
                </div>

                <div class="flex justify-between mb-1 mt-4">
                <span class="text-base font-medium font-semibold">Databases</span>
                <span class="text-sm font-medium text-green-500 font-semibold">80%</span>
                </div>
                <div class="w-full bg-gray-300 rounded-full h-2.5">
                <div class="bg-green-500 h-2.5 rounded-full" style="width: 80%"></div>
                </div>

                <div class="flex justify-between mb-1 mt-4">
                <span class="text-base font-medium font-semibold">Statistics</span>
                <span class="text-sm font-medium text-green-500 font-semibold">69%</span>
                </div>
                <div class="w-full bg-gray-300 rounded-full h-2.5">
                <div class="bg-green-500 h-2.5 rounded-full" style="width: 69%"></div>
                </div>
            </div>
        </div>

        <div class="p-4 background w-1/2">
            
        </div>
    </div>
</template>

<script>
export default{
    name:'Skills'
}
</script>

<style scoped>
    .background{
        background-image: url('../static/coding.gif');
        background-attachment: fixed;
        background-position: right;
        background-position-y: center;
        background-repeat: no-repeat;
        background-size: 50%;
    }
</style>
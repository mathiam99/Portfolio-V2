<template>
    <div>
        <div class="flex h-screen border-red-400">
            <Left/>
            <Right/>
        </div>

        <Skills/>
        <Experiences/>
        <Languages/>
        <Footer/>

    </div>
</template>

<script>
    import Right from './Segments/Right.vue';
    import Left from './Segments/Left.vue';
    import Skills from './Skills.vue';
    import Experiences from './Experiences.vue';
    import Languages from './Languages.vue';
import Footer from './footer.vue';
    export default{
        name: "MainSection",
        components: { Right, Left, Skills, Experiences, Languages, Footer }
}
</script>

<style scoped>
    @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css';
</style>
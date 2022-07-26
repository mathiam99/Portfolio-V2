<template>
  <div>
    <NavigationBar/>
    <MainSection/>
  </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue';
import MainSection from '../components/MainSection.vue';
export default {
    name: "IndexPage",
    components: { NavigationBar, MainSection}
}
</script>

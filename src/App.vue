<template>
  <div class="app">
    <Header />
    <NavRoute />
    <!-- <DepenseDur /> -->
    <Depense />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import NavRoute from './components/NavRoute.vue';
import Depense from './components/Depense.vue';
import DepenseDur from './components/DepenseDur.vue';


export default {
  components: {
    // List of components used in this file
    Header,
    Footer,
    NavRoute,
    DepenseDur,
    Depense,
  },
}

</script>

<style>
.navigation-menu {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #3493d6;
}

.app {
  margin: 0 auto;
}
</style>

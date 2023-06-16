<template>
  <div class="navigation-menu">
    <div class="logo-container">
      <img src="../assets/img/note.png" alt="Logo" class="logo">
      <span>Dépense</span>
    </div>
    <div class="logo-container">
      <img src="../assets/img/equilibre.png" alt="Logo" class="logo">
      <span>Équilibre</span>
    </div>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.navigation-menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  background-color: #3493d6;
  color: #ffffff;
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  height: 50px;
  margin-bottom: 5px;
  /* Espacement entre l'image et le texte */
}
</style>

<script>
</script>

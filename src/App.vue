<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="container">
      <nav>
        <RouterLink class="home" to="/">Home</RouterLink> |
        <RouterLink class="about" to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>


<style scoped>
nav {
  margin-top: 5px;
  text-align: center;
  align-items: center;
}

.home {
  font-size: larger;
  font-weight: bold;
  color: rgb(3, 174, 3);
}

.about {
  font-size: larger;
  font-weight: bold;
  color: black;
}
</style>

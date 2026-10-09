<template>
    <nav class="navbar">
      <router-link to="/">Home</router-link>
<router-link to="/habits">Habits</router-link>
<router-link to="/stats">stats</router-link>
    </nav>


</template>

<script>


</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #6b1e2e;
  padding: 15px 30px;
}
.navbar a {
  color: #f5eadc;
  text-decoration: none;
  margin-left: 20px;
}
</style>
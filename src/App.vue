<template>  
 <nav>
       <Navbar/>
       <router-view/>
     </nav>  
 
</template>

  <script>
  import Navbar from './components/Navbar.vue';
  export default{
     components:{Navbar}
  }

</script>

<style>
body {
  margin: 0;
  background: #f5eadc;
  color: #6b1e2e;
  font-family: Arial, sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav{
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #8e483f;
  
}
</style>

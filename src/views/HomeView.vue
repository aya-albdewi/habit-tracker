<template>
  <div class="home">
     <h1>Habit Tracker</h1>
     <h3>Welcome</h3>
     <p>Build better habits, one day at a time.</p>
      <router-link class="start" to="/habits">Start Tracking</router-link>
      <div class="information-container">
       <div class="information">
        <i class="fa-solid fa-chart-simple"></i>
       <p>Total Habits</p>
       </div>
       <div class="information">
         <i class="fas fa-trophy"></i>
     <p>completed Habits</p>
       </div>
          <div  class="information">
          <i class="fa-solid fa-hourglass-half"></i>
           <p>Active Habits</p>
       </div>
  </div>
  </div>
</template>
<script>
  

export default {
    
}
</script>
<style>
.home{
  margin-top:30px;

}
.start{
   background: #6b1e2e;
  color: white;
  border: none;
  padding: 10px 10px;
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
  margin-top: 20px;
  display: inline-block;
 
}
.information-container {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 50px;
}
.information {
  width: 180px;
  padding: 25px;
  background: #f5eadc;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(107, 30, 46, 0.12);
}

.information i {
  color: #6b1e2e;
  font-size: 32px;
  margin-bottom: 10px;
}

.information p {
  color: #6b1e2e;
  font-weight: bold;
  font-size: 17px;
}
</style>
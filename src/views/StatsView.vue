.<template>
  <div class="stats">
    <h1>Statistics</h1>
    <p>See your progress and achievements.</p>
  </div>
  <div class="design">
   <i class="fa-solid fa-chart-simple"></i>
    <p>Total Habits</p>
    <span>{{ totalHabits }}</span>
  </div> 

    <div class="design">
      <i class="fas fa-trophy"></i>
     <p>completed Habits</p>
     <span>{{ completedHabits }}</span>
    </div>

    <div class="design">
      <i class="fa-solid fa-hourglass-half"></i>
      <p>Active Habits</p>
      <span>{{ activeHabits }}</span>
    </div>
</template>


<script>
 export default{
   
     data(){
      return{
            habitsState:JSON.parse( localStorage.getItem( 'habits' ) ) ||[]
                 
              }
     },
     computed:{
          totalHabits(){
              return this.habitsState.length
                     },
                completedHabits(){
                   return this.habitsState.filter(habit=>habit.completed).length
                },
                activeHabits() {
        return this.habitsState.filter(habit => !habit.completed).length
           }
     }
 }

</script>
<style>
.stats h1 {
  color: #6b1e2e;
  font-size: 38px;
  margin-bottom: 10px;
}

.stats p {
  color: #555;
  font-size: 18px;
}
.design {
  max-width: 500px;
  margin: 25px auto;
  padding: 25px;
  background: #f5eadc;
  border-radius: 18px;
  border: none;
  box-shadow: 0 5px 15px rgba(107, 30, 46, 0.15);
  text-align: center;
}

.design p {
  color: #6b1e2e;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 15px;
}

.design span {
  display: block;
  color: #6b1e2e;
  font-size: 32px;
  font-weight: bold;
}

.design i {
  color: #6b1e2e;
  font-size: 35px;
  margin-bottom: 10px;
}


</style>

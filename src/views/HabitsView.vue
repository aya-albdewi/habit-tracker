<template>
<div class="habits">
    <h1>My habits</h1>
    <HabitForm @add="recive"/>
    <HabitList :habits="habits" @edit="EditHabit"  @delete="DeleteHabit"/>
</div>

</template>
<script>
import HabitForm from '@/components/HabitForm.vue';
import HabitList from '@/components/HabitList.vue';
 export default{
   components:{HabitForm,HabitList},
   data(){
    return{
        habits:[]
    }
   },
   methods:{
   recive(habit) {
  this.habits.push(habit)

  localStorage.setItem(
    'habits',
    JSON.stringify(this.habits)
  )
},
DeleteHabit(habit) {
  this.habits = this.habits.filter(h => h !== habit)

  localStorage.setItem(
    'habits',
    JSON.stringify(this.habits)
  )
},

    EditHabit(habit){
    habit.completed = !habit.completed

    localStorage.setItem(
        'habits',
        JSON.stringify(this.habits)
    )
}
   },
  mounted() {
  const savedHabits = localStorage.getItem('habits')

  if (savedHabits) {
    this.habits = JSON.parse(savedHabits)
  }
  }
 }

</script>
<style>


</style>
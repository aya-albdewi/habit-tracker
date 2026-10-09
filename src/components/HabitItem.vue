<template>
  <div :class="{ completed: habit.completed }" class="myhabit">
      <p class="habit-name">{{ habit.name }}</p>
      <p>{{ habit.description }}</p>
      <p> <span>{{ habit.date }}</span></p>
       <div class="state">
         <input type="checkbox" :checked="habit.completed" @change="toggleState">
       <button @click="DeletHabit" class="delete-btn">Delete</button>
       </div>
   
  </div>

</template>
<script>
export default{
    props:['habit'],
   
    methods:{
        toggleState(){
             this.$emit('comp',this.habit)
        },
        DeletHabit(){
             this.$emit('del',this.habit)
        }
      
    }
}

</script>
<style>
.completed {
  background: #e8d8c3;
  color: #6b1e2e;
  font-weight: bold;
  text-decoration: line-through;
}
.myhabit {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  background: #f5eadc;
  border: 1px solid #6b1e2e;
}
.myhabit p{
   color: #6b1e2e;
}
.myhabit span{
 color: #777;
 text-decoration:none;
}
.habit-name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}
input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
   accent-color: #800020;
}
.delete-btn {
  background: #6b1e2e;
  color: white;
  border: none;
  padding: 4px 10px;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 10px;
}
</style>
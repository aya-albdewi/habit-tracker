<template>
 <div class="card">
    <form @submit.prevent>
         <label>Your Habit:</label>
         <input type="text"  v-model="name">
         <label >Describe:</label>
         <textarea v-model="description" cols="5" rows="5"></textarea>
         <label>Date:</label>
         <input  type="date" v-model="date">
          <button @click="addHabit">Add your habit</button>
          
    </form>
 </div>
</template>

<script>
 export default{
    data(){
        return{
             name:'',
             description:'',
             date:''
        }
    },
    methods:{
        addHabit(){
           if (!this.name.trim()) {
             return
              }
            const habit={
              name:this.name,
              description:this.description,
              date:this.date,
              completed:false
            }
            this.$emit('add',habit)
            this.name='',
            this.description="",
            this.date=""
        }
    }
 }

</script>

<style>
.card {
  max-width: 500px;
  margin: 30px auto;
  padding: 25px;
  background: #f5eadc;
  border-radius: 12px;
  border: 2px solid #6b1e2e;
}
form{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
label {
  font-weight: bold;
  margin-top: 5px;
}
input,
textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
}
button {
  padding: 10px;
  border: none;
  border-radius: 6px;
  background: #6b1e2e;
  color: white;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  transform: scale(1.02);
}
</style>
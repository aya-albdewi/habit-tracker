<template>
<div v-for="habit in habits">
<HabitItem :habit="habit" @comp="updateHabit"  @del="Delete"/>
</div>
</template>

<script>
import HabitItem from './HabitItem.vue';
export default{
    props:['habits'],
    components:{HabitItem},
    methods:{
       updateHabit(habit){
        this.$emit('edit',habit)
       },
       Delete(habit){
          this.$emit('delete',habit)
       }

    }
}

</script>

<style>


</style>
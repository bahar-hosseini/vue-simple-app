<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h3>You have {{ toDoCount }} todos</h3>
    <div>
      <input
        v-model="newTodoName"
        @keyup.enter="addTodo"
        placeholder="Add a Todo"
        type="text"
      />
    </div>
    <div>
      <ul>
        <li v-for="(todo, index) in todos" :key="todo.id">
          <span>{{ todo.name }}</span>
          <button @click="deleteTodo(index)">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    let newTodoName = ref('');
    let todos = ref([
      { id: 1, name: 'One' },
      { id: 2, name: 'Two' },
      { id: 3, name: 'Three' },
    ]);
    let toDoCount = computed(() => {
      return todos.value.length;
    });

    const deleteTodo = (index) => {
      todos.value.splice(index, 1);
    };
    const addTodo = () => {
      let newTodo = {
        id: Date.now(),
        name: newTodoName.value,
      };
      todos.value.push(newTodo);
      newTodoName.value = '';
    };

    watch(newTodoName,(newValue)=>{
      console.log(`New value is ${newValue}`);
    })
    return {
      newTodoName,
      todos,
      toDoCount,
      deleteTodo,
      addTodo,
    };
  },
};
</script>

<style>
ul {
  list-style: none;
  padding: 0;
  width: 100px;
  width: 200px;
  margin: 20px auto 0;
}
li {
  border: 1px solid;
  display: flex;
  margin-bottom: 10px;
}
li span {
  flex-grow: 1;
}
</style>


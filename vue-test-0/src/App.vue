<template>
  <div>
    <form @submit.prevent="addToPage">
      <div>{{ name }}</div>
      <div>{{ data.name }}</div>
      <input v-model="data.word" />
      <button>I am a button</button>
    </form>
    <ul>
      <li v-for="(w, index) in data.words" :key="index">
        <h1>{{ w }}</h1>
      </li>
    </ul>
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { reactive } from 'vue';
export default {
  name: 'App',
  setup() {
    const data = reactive({ name: '', word: '', words: [] });
    let name = 'hello';
    function addToPage() {
      console.log('submit');
      name = 'Hello word';
      data.name = 'start';
      data.words.push(data.word);
    }
    return { name, addToPage, data };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>

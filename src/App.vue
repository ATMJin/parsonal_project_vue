<script setup>
import WebHeader from "./components/WebHeader.vue";
import WebFooter from "./components/WebFooter.vue";
import { useDataStore } from './stores/data';
import jsonData from "./assets/data/data.json";
console.log("app");
const store = useDataStore();
console.log(jsonData);
store.courses = jsonData.course;
store.masterpieces = jsonData.masterpiece;
store.skills = jsonData.skill;

fetch("./data.json")
  .then(res => res.json())
  .then(data => {
    console.log("fetch");
    store.courses = data.course;
    store.masterpieces = data.masterpiece;
    store.skills = data.skill;
  })
  .catch(err => console.log(err));
</script>

<template>
  <WebHeader></WebHeader>
  <router-view></router-view>
  <WebFooter></WebFooter>
</template>

<style>
* {
  box-sizing: border-box;
}

:root {
  --course_color: #84bae6;
  --masterpiece_color: #4f96d8;
  --skill_color: #357ecd;
  --main_padding_LR: 4.6875vw;
  font-size: 16px;
  scrollbar-width: thin;
}

body {
  position: relative;
  font-family: "Noto Sans TC", "Roboto", sans-serif, serif;
  font-weight: 500;
  color: #1c1c1c;
  font-size: 1.25rem;
}

a {
  text-decoration: none;
}

img {
  width: 100%;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(140, 140, 140, 0.15);
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
}

::-webkit-scrollbar-corner {
  background: transparent;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.25);
}
</style>

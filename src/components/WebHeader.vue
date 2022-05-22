<template>
  <header class="top_of_page">
    <div class="cover_logo_and_nav">
      <router-link class="link_of_logo" to="/">
        <div class="logo_pic">
          <img class="logo" width="80" src="../assets/img/logo_s.svg" alt="染一片春天Logo" />
        </div>
      </router-link>
      <h1 class="h1">染一片春天藍染教學工作室</h1>
      <nav class="nav">
        <h2 class="nav_h2">導覽列</h2>
        <div :class="['cover_other_page', { 'appear': appearNav }]" @click.self="changeToggle">
          <ul :class="['other_page', { 'gotoLeft': appearNav }]">
            <li>
              <router-link to="/Course">課程介紹</router-link>
            </li>
            <div class="plumb_line"></div>
            <li>
              <router-link to="/Masterpiece">作品一覽</router-link>
            </li>
            <div class="plumb_line"></div>
            <li>
              <router-link to="/Skill">技法介紹</router-link>
            </li>
            <div class="plumb_line"></div>
            <li>
              <router-link to="/AboutMe">關於我</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div :class="['hamburger', { 'gotoLeft': appearNav }]" @click="changeToggle">
      <div style="--i: 1" :class="[{ 'arrow': appearNav }]"></div>
      <div></div>
      <div style="--i: -1" :class="[{ 'arrow': appearNav }]"></div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

let appearNav = ref(false);

const changeToggle = () => {
  appearNav.value = !appearNav.value;
};
</script>

<style lang="scss">
.top_of_page {
  background-color: #c7f2ff;
  text-align: center;

  h1,
  h2 {
    position: absolute;
    height: 0;
    width: 0;
    z-index: -100;
  }
}

.link_of_logo {
  display: inline-block;
}

.logo_pic {
  width: 10%;
  min-width: 80px;
  margin: auto;
}

.logo {
  width: 100%;
}

.cover_logo_and_nav {
  width: 90%;
  max-width: 1200px;
  padding-bottom: 5px;
  margin: 0 auto;
}

.other_page {
  display: flex;
  justify-content: space-evenly;

  * {
    display: inline-block;
  }

  a {
    color: #1a388c;
    font-size: 1.25rem;
    padding: 10px 1vw;

    &:visited {
      color: #1a388c;
    }

    &:hover {
      border-radius: 0.25em;
      background-color: #1a388c30;
      transition: 0.5s;
    }
  }
}

.cover_line_message {
  color: #1a388c;
}

@media screen and (max-resolution: 2.8dppx) {
  .other_page a {
    font-size: 1rem;
  }
}

@media screen and (max-width: 384px) {
  .hamburger {
    width: 50px;
    height: 40px;
    border-radius: 0.25em;
    position: fixed;
    z-index: 11;
    top: 15px;
    right: 0;
    cursor: pointer;
    transition: 1s;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    --r: 100px;
    background-color: #fff7;

    >div {
      background-color: #0007;
      border-radius: 1px;
      height: 2px;
      width: 30px;
      transition: 1s;
      transform-origin: 30px 1px;
    }

    >.arrow {
      transform: translate(-1px, calc(13px * var(--i))) rotate(calc(45deg * var(--i))) scaleX(0.7);
    }
  }

  .other_page {
    flex-direction: column;
    background-color: #fff;
    width: 100px;
    line-height: 2em;
    border-radius: 0.5em;
    position: absolute;
    top: 15px;
    right: -100px;
    transition: 1s;
    --r: 3px;
  }

  .cover_other_page {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #fff0;
    visibility: hidden;
    transition: 0.5s;

    &.appear {
      z-index: 10;
      visibility: visible;
      background-color: #fffa;
      backdrop-filter: blur(5px);
    }
  }

  .gotoLeft {
    right: var(--r);
  }
}

@media screen and (min-width: 768px) {
  .cover_logo_and_nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0;
  }

  .nav {
    flex-grow: 1;
  }

  .other_page {
    margin-top: 0;

    a {
      font-size: 1.5rem;
      padding: 10px 3vw;

      @media screen and (min-width: 992px) {
        font-size: 1.75rem;
        padding: 10px 30px;
      }
    }
  }

  .plumb_line {
    border: 1px solid #1a388cee;
    background-color: #1a388cee;
  }
}
</style>
<template>
  <main>
    <!-- FIXME min-width->max-width -->
    <section class="masterpiece">
      <!-- 小圖 -->
      <div class="cover_min_pic">
        <div class="min_pic" ref="min_pic" @mouseenter="clearXY" @mouseleave="X_or_Y" @touchstart="clearXY"
          @touchend="X_or_Y">
          <div class="pic" v-for="(masterpiece, i) in masterpieces" :key="masterpiece.name">
            <img :src="`./src/assets/img/min/${masterpiece.image}`" :alt="masterpiece.alt" :data-picIndex="i"
              :data-picName="masterpiece.name" @click="changeCard($event)" />
          </div>
        </div>
      </div>
      <div class="beside_min_pics">
        <!-- 大圖和介紹文字 -->
        <div class="card">

          <div :class="['pic', { 'show': show, 'hidden': !show }]">
            <img :src="show ? piccard.src : tempcard.src" />
          </div>
          <div :class="['pic', { 'show': !show, 'hidden': show }]">
            <img :src="!show ? piccard.src : tempcard.src" />
          </div>

          <div :class="['text', { 'show': show, 'hidden': !show }]">
            <h2>{{ show ? piccard.name : tempcard.name }}</h2>
            <p v-for="(text, i) in show ? piccard.intro : tempcard.intro" :key="i">{{ text }}</p>
          </div>
          <div :class="['text', { 'show': !show, 'hidden': show }]">
            <h2>{{ !show ? piccard.name : tempcard.name }}</h2>
            <p v-for="(text, i) in !show ? piccard.intro : tempcard.intro" :key="i">{{ text }}</p>
          </div>
        </div>
        <!-- 可以連結到課程的區塊 -->
        <aside class="cover_you_know">
          <div :class="['you_know', { 'show': show, 'hidden': !show }]">
            <h3>你知道嗎?</h3>
            <p>
              這件作品是用<span class="skill_name">{{ show ? piccard.skill : tempcard.skill }}</span>的技法製作而成的
            </p>
            <div class="link_to_other">
              <a href="course_page.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-chevron-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
                查詢相關課程
              </a>
              <a href="skill_page.html">
                查詢相關技法
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </a>
            </div>
          </div>
          <div :class="['you_know', { 'show': !show, 'hidden': show }]">
            <h3>你知道嗎?</h3>
            <p>
              這件作品是用<span class="skill_name">{{ !show ? piccard.skill : tempcard.skill }}</span>的技法製作而成的
            </p>
            <div class="link_to_other">
              <a href="course_page.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-chevron-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
                查詢相關課程
              </a>
              <a href="skill_page.html">
                查詢相關技法
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import { useDataStore } from './stores/data';
const store = useDataStore();
let masterpieces = reactive(store.masterpieces);

// let masterpieces = ref([]);
let piccard = reactive({
  name: "",
  src: "./src/assets/img/masterpiece_01.jpg",
  alt: "",
  intro: [],
  skill: ""
});
let tempcard = ref({
  name: "",
  src: "./src/assets/img/masterpiece_01.jpg",
  alt: "",
  intro: [],
  skill: ""
});
// piccard={...masterpieces[0]}
piccard.src = `./src/assets/img/${masterpieces[0].image}`;
piccard.alt = masterpieces[0].alt;
piccard.name = masterpieces[0].name;
piccard.intro = masterpieces[0].introduce;
piccard.skill = masterpieces[0].skill;

tempcard.value = { ...piccard };

// fetch("./src/assets/data/data.json")
//   .then(res => res.json())
//   .then(data => {
//     piccard.value.src = `./src/assets/img/${masterpieces.value[0].image}`;
//     piccard.value.alt = masterpieces.value[0].alt;
//     piccard.value.name = masterpieces.value[0].name;
//     piccard.value.intro = masterpieces.value[0].introduce;
//     piccard.value.skill = masterpieces.value[0].skill;
//     tempcard.value = { ...piccard.value };
//   })
//   .catch(err => console.log(err));


let show = ref(true);
//點小圖換切換右側資訊
const changeCard = (e) => {
  let picindex = e.target.dataset.picindex;

  piccard.src = `./src/assets/img/${masterpieces[picindex].image}`;
  piccard.alt = masterpieces[picindex].alt;
  piccard.name = masterpieces[picindex].name;
  piccard.intro = masterpieces[picindex].introduce;
  piccard.skill = masterpieces[picindex].skill;
  console.log("before", tempcard.value);
  setTimeout(() => { tempcard.value = { ...piccard }; console.log("after", tempcard); }, 1010);

  // 資訊切換時的效果
  // 切換class
  show.value = !show.value;
};


const min_pic = ref(null);
let x = 5;
let y = 0;
//橫向自動卷軸
const min_pic_scroll_X = () => {
  min_pic.value.scrollLeft += x;
  if (min_pic.value.scrollLeft >= min_pic.value.scrollLeftMax - x) x = -x;
  else if (min_pic.value.scrollLeft <= -x) x = -x;
  //到底反轉
  //TODO 無限輪播
};
//直向自動卷軸
const min_pic_scroll_Y = () => {
  min_pic.value.scrollTop += y;
  if (min_pic.value.scrollTop >= min_pic.value.scrollTopMax - y) y = -y;
  else if (min_pic.value.scrollTop <= -y) {
    y = -y;
  }
};

let XY = ref();
//直向或橫向
const X_or_Y = () => {
  if (min_pic.value.scrollTopMax == 0) {
    clearInterval(XY.value);
    min_pic_scroll_X();
    XY.value = setInterval(min_pic_scroll_X, 30);
  } else if (min_pic.value.scrollLeftMax == 0) {
    clearInterval(XY.value);
    min_pic_scroll_Y();
    XY.value = setInterval(min_pic_scroll_Y, 30);
  }
};
const clearXY = () => {
  clearInterval(XY.value);
};

onMounted(() => {
  window.addEventListener("load", X_or_Y);
  window.addEventListener("resize", X_or_Y, false);
});
onBeforeUnmount(() => {
  clearInterval(XY.value);
});
</script>

<style lang="scss" scoped>
main {
  background-color: var(--masterpiece_color);
}

.masterpiece {
  overflow: hidden;
}

.cover_min_pic {
  padding: 15px 0;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.min_pic {
  height: 110px;
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;
  scroll-behavior: smooth;
  font-size: 0;
  border-radius: 0.25rem;
  background-color: #fff7;
}

.min_pic::-webkit-scrollbar {
  display: none;
}

.min_pic>.pic {
  margin: 5px;
  flex-shrink: 0;
  cursor: pointer;
}

.pic>img {
  width: 100%;
}

.beside_min_pics {
  width: 90%;
  margin: auto;
}

.card {
  position: relative;
  overflow: hidden;
  padding-bottom: 15px;
  letter-spacing: 0.2em;
  text-shadow: 1px 1px 2px #fff3;
}

.card>.pic {
  width: 100%;
}

.text>h2 {
  font-size: 2rem;
  line-height: 2em;
  text-align: center;
}

.text>p {
  font-weight: 400;
  line-height: 1.75em;
  text-indent: 1.2em;
  text-align: justify;
  white-space: pre-line;
  margin-bottom: 1em;
}

.cover_you_know {
  position: relative;
  padding-bottom: 20px;
}

.you_know {
  padding: 1em;
  width: 100%;
  background-color: #fffa;
  border-radius: 0.5em;
  position: relative;
  line-height: 2em;
}

.you_know h3::before {
  content: "";
  display: inline-block;
  height: 30px;
  width: 31px;
  margin-right: 5px;
  background-image: url(../img/small_logo_flower.png);
  background-size: cover;
  vertical-align: middle;
}

.you_know p {
  font-size: 1rem;
  text-align: center;
}

.link_to_other {
  display: flex;
  justify-content: space-around;
}

.you_know a {
  display: inline-block;
  color: #1a388c;
}

.you_know a:visited {
  color: #1a388c;
}

@media screen and (min-width: 768px) {
  .cover_min_pic {
    padding: 20px 0;
  }

  .min_pic {
    flex-direction: column;
    flex-wrap: wrap;
    height: 220px;
  }

  .beside_min_pics {
    padding-top: 15px;
  }

  .card {
    display: flex;
    justify-content: space-between;
    /*     padding: 15px 0; */
  }

  .card .pic {
    width: 50%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }

  .card .text {
    width: 45%;
    flex-shrink: 0;
  }
}

.cover_under_page {
  background-color: var(--masterpiece_color);
}

@media screen and (max-resolution: 2.8dppx) {
  .link_to_other {
    font-size: 1rem;
  }
}

@media screen and (min-width: 1200px) {
  .masterpiece {
    display: flex;
    width: 80%;
    min-width: 1200px;
    margin: 0 auto;
  }

  .cover_min_pic {
    width: 360px;
    flex-shrink: 0;
  }

  .min_pic {
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: auto;
    height: 90vh;
  }

  .min_pic>.pic {
    margin: 10px;
  }

  .beside_min_pics {
    padding-top: 20px;
  }

  .card {
    margin-left: auto;
    width: 95%;
  }

  .cover_you_know {
    margin-left: auto;
    width: 95%;
  }
}

@media screen and (min-width: 768px) and (min-height: 1040px) {
  .masterpiece {
    height: 80vh;
  }
}

/* ============================= */
/* 卡片滑入動畫 */
.show {
  position: absolute;
  opacity: 1;
  transition: 1s;
}

.hidden {
  position: relative;
  opacity: 0;
  transition: 1s;
}

.pic.show {
  left: 0;
  animation-name: picshow;
  animation-duration: 1s;
}

.text.show {
  right: 0;
  animation-name: textshow;
  animation-duration: 1s;
}

.you_know.show {
  top: 0;
  animation-name: youknowshow;
  animation-duration: 1s;
}

@keyframes picshow {
  0% {
    opacity: 0;
    left: -500px;
  }

  100% {
    opacity: 1;
    left: 0;
  }
}

@keyframes textshow {
  0% {
    opacity: 0;
    right: -500px;
  }

  100% {
    opacity: 1;
    right: 0;
  }
}

@keyframes youknowshow {
  0% {
    opacity: 0;
    top: 300px;
  }

  100% {
    opacity: 1;
    top: 0;
  }
}
</style>
<template>
  <main>
    <section class="course">
      <div class="container">
        <div class="row">
          <div class="col_12 col_md_4 col_xl_3" v-for="course in courses" :key="course.name">
            <div class="card">
              <div class="pic">
                <img :src="`./img/${course.image[0]}`" @click="open" />
              </div>
              <div class="text">
                <div>
                  <h2>{{ course.name }}</h2>
                  <div class="course_info">
                    <div class="course_people">
                      開課人數: <span>{{ course.people }}</span> 人
                    </div>
                    <div class="course_item">自備器材: <span>{{ course.item ? "是" : "否" }}</span></div>
                  </div>
                  <div class="course_introduce">
                    <p>{{ course.introduce }}</p>
                  </div>
                </div>
                <div>
                  <div :class="course.beginner ? 'for_beginner' : 'not_beginner'"><span
                      v-show="course.beginner">初學者推薦課程</span></div>
                  <div class="course_money">
                    <span>課程費用: </span><span>{{ course.price }}</span><span>元</span>
                  </div>
                  <div class="about_others">
                    <a href="masterpiece_page.html">
                      <i class="bi bi-arrow-left"></i><span>相關作品</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="out_ribbon" v-if="course.ribbon">
                <div class="ribbon"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="row "> -->
        <!-- </div> -->
      </div>
      <aside class="pic_3d" @click.self="d3_displayNone" ref="pic_3d">
        <div class="d3_position" ref="d3_position">
          <button id="pre" @click="turn(1)"><i class="bi bi-chevron-compact-left"></i></button>
          <div class="out_3d" ref="out_3d">
            <div class="middle_3d" ref="middle_3d">
              <div v-for="i in 4" :key="i" :style="`--i: ${i - 1}`" class="inner_3d" ref="inner_3d">
                <img :src="`./img/course_0${i}.jpg`" ref="inner_3d_img" alt="" />
              </div>
            </div>
          </div>
          <button id="next" @click="turn(-1)"><i class="bi bi-chevron-compact-right"></i></button>
        </div>
        <div class="close_3d" @click="d3_displayNone(); wResize()"></div>
      </aside>
    </section>
  </main>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useDataStore } from '../stores/data';
console.log("course");
const store = useDataStore();
let courses = reactive(store.courses);
console.log("store over");
const pic_3d = ref(null);
const out_3d = ref(null);
const inner_3d = ref(null);
const middle_3d = ref(null);
const inner_3d_img = ref(null);
const d3_position = ref(null);


// 調整圖片距離，使圖片可以圍成圈
const wResize = () => {
  let w = window.getComputedStyle(out_3d.value).width;
  w = w.replace("px", "") / 2;
  for (let i = 0; i < inner_3d.value.length; i++) {
    inner_3d.value[i].style.transform = `rotateY(calc(var(--i) * 90deg))translateZ(${w}px)`;
  }
};

// 調整圖片Y座標，使圖片位置差不多在視窗中間
const reY = () => {
  let maxH = 0;
  let img = inner_3d_img.value;
  for (let i = 0; i < img.length; i++) {
    let imgH = window.getComputedStyle(img[i]).height.replace("px", "");
    if (imgH > maxH) maxH = imgH;
  }
  let y = 0;
  y = (window.getComputedStyle(pic_3d.value).height.replace("px", "") - maxH) / 2;
  d3_position.value.style.top = `${y}px`;
  // pre.style.top = `${maxH}px`;
  // next.style.top = `${maxH}px`;
};

// 3D轉圈
let yy = 0;
const turn = (i) => {
  console.log("turn");
  yy += 90 * i;
  middle_3d.value.style.transform = `rotateY(${yy}deg)`;
};

// 關閉燈箱
const d3_displayNone = () => {
  pic_3d.value.style.zIndex = "-10";
  pic_3d.value.style.visibility = "hidden";
};

// 打開燈箱
const open = () => {
  pic_3d.value.style.visibility = "visible";
  pic_3d.value.style.zIndex = "10";
};

onMounted(() => {
  window.addEventListener("load", () => {
    wResize();
    reY();
  }, false);
  window.addEventListener("resize", () => {
    wResize();
    reY();
  }, false);
});

</script>

<style lang="scss" scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css");

.course {
  background-color: var(--course_color);
  padding-top: 10px;
}

.card {
  background: #fff6;
  height: calc(100% - 10px);
  padding: 10px;
  border-radius: 0.25em;
  position: relative;
  display: flex;
  flex-direction: column;
}

.pic {
  >img {
    width: 100%;
    cursor: pointer;
    box-shadow: 2px 2px 2px 0px #000c;
    transition: 0.5s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 4px 4px 4px 2px #0009;
    }
  }
}

.text {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 1px;
  text-align: justify;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.course_info {
  display: flex;
}

.course_people {
  flex-grow: 0.5;
}

.course_item {
  flex-grow: 1;
}

.course h2 {
  margin-top: 0.5rem;
  line-height: 2;
  font-size: 1.25rem;
  font-weight: 500;
}

.course_introduce {
  text-indent: 1.2em;
  padding: 1em 0;
  white-space: pre-line;
}

.not_beginner {
  white-space: pre;
  margin: 10px;
}

.course .for_beginner {
  text-align: center;
  margin: 10px;
}

.for_beginner span {
  outline: 2px blue solid;
  padding: 2px 4px;
  border-radius: 5px;
}

.course_money {
  text-align: right;
  font-size: 1.15em;
  font-weight: 400;
}

.about_others * {
  color: #1a388c;
  vertical-align: middle;
}

/* 3D輪播 */
.pic_3d {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 45vh;
  margin: auto;
  background: #fffc;
  visibility: hidden;
  z-index: -10;
}

.d3_position {
  position: relative;
  display: flex;
  justify-content: center;
}

.out_3d {
  width: 70%;
  perspective-origin: center;
  perspective: 1500px;
}

.middle_3d {
  width: 100%;
  /* height: 100%; */
  transform-style: preserve-3d;
  /* transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); */
  transition: 1s cubic-bezier(0.29, 0.84, 0.32, 1.34);
}

.inner_3d {
  width: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transform: rotateY(calc(var(--i) * 90deg)) translateZ(100px);
  /* transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); */
}

.pic_3d button {
  position: absolute;
  z-index: 1;
  top: 210px;
  cursor: pointer;
  font-size: 50px;
  font-weight: 800;
  border: none;
  border-radius: 0.5em;
  background-color: #0004;
}

#pre {
  left: 0;
  /* margin-right: 2%; */
}

#next {
  right: 0;
  /* margin-left: 2%; */
}

.close_3d {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  transform: rotate(45deg);
  transition: 1s;

  &:hover {
    transform: rotate(225deg) scale(1.25);
  }

  &::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 24px;
    width: 2px;
    height: 40px;
    background: #000;
  }

  &::after {
    content: "";
    position: absolute;
    top: 24px;
    left: 5px;
    width: 40px;
    height: 2px;
    background: #000;
  }
}

@media screen and (min-width: 768px) {
  .text {
    h2 {
      font-size: 1.5rem;
    }

    :not(h2) {
      font-size: 1.25rem;
    }
  }

  .course_info div {
    font-size: 1rem;
  }

  .pic_3d {
    height: 50vh;
  }

  .out_3d {
    width: 60%;
  }
}

@media screen and (min-width: 992px) {
  .pic_3d {
    height: 100vh;
  }

  .out_3d {
    width: 40%;
  }
}

/* card裝飾 */
.out_ribbon {
  position: absolute;
  height: 100px;
  width: 100px;
  top: -7px;
  left: -7px;
  overflow: hidden;

  &::before {
    content: "";
    height: 0px;
    width: 0px;
    border-bottom: 7px solid black;
    border-left: 7px solid #fff0;
    position: absolute;
    left: 47px;
  }

  &::after {
    content: "";
    height: 0px;
    width: 0px;
    border-bottom: 7px solid #000;
    border-left: 7px solid #fff0;
    position: absolute;
    top: 47px;
  }
}

.ribbon {
  position: absolute;
  width: 100px;
  height: 15px;
  left: -30px;
  top: 15px;
  background: #f00;
  transform: rotate(-45deg);
}

/* ============================== */
.cover_under_page {
  background-color: var(--course_color);
}
</style>
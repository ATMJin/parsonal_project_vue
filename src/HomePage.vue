<template lang="">
  <main class="section_club">
    <!--   課程介紹   -->

    <div class="outer_intro">
      <section class="introduce_of_course">
        <h2>課程介紹</h2>
        <div class="course_image_with_button">
          <button class="btn pre_pic"><i class="fas fa-angle-left"></i></button>
          <!-- 佔位用圖片 -->
          <div class="course_image nothing">
            <img class=" nothing" src="./assets/img/master.jpg" alt="車縫染課程">
          </div>
          <div class="course_image carousel show">
            <img class="" src="./assets/img/master.jpg" alt="車縫染課程">
          </div>
          <div class="course_image carousel hidden hidden_left">
            <img class="" src="./assets/img/class_woman_169.jpg" alt="車縫染課程">
          </div>
          <div class="course_image carousel hidden hidden_right">
            <img class="" src="./assets/img/class_three_women_169.jpg" alt="車縫染課程">
          </div>
          <button class="btn next_pic"><i class="fas fa-angle-right"></i></button>
        </div>
        <div class="course_introduce_words carousel show">
          <h3>縫染課程</h3>
          <p class="course_introduce_words_paragraph">春風老師以此知名的技巧。
            由專業裁縫背景出身的春風老師手把手地帶領您一針一線細心縫製圖案，當最後染完拆線時能讓您發出驚奇的讚嘆聲。</p>
        </div>
        <div class="course_introduce_words carousel hidden hidden_left">
          <h3>蠟染課程</h3>
          <p class="course_introduce_words_paragraph">可以隨心所欲地繪製想要的圖案。
            我們有提供相關材料，您只需要攜帶畫筆和一顆想要創作的心前來就可以了。</p>
        </div>
        <div class="course_introduce_words carousel hidden hidden_right">
          <h3>車縫染課程</h3>
          <p class="course_introduce_words_paragraph">縫染的進階技巧。
            利用裁縫車在布料上縫製圖案，能更省力地完成縫製過程。</p>
        </div>
        <div class="course_introduce_words nothing">
          <h3>車縫染課程</h3>
          <p class="course_introduce_words_paragraph">春風老師以此知名的技巧。
            由專業裁縫背景出身的春風老師手把手地帶領您一針一線細心縫製圖案，當最後染完拆線時能讓您發出驚奇的讚嘆聲。</p>
        </div>
        <div class="more">
          <a href="course_page.html">更多課程介紹></a>
        </div>
        <!-- TODO: 最新消息 -->
      </section>
    </div>


    <!-- 漸層 -->
    <div class="change_backgraound_front"></div>


    <!--   作品一覽   -->
    <div class="outer_master">
      <section class="introduce_of_masterpiece">
        <h2>作品一覽</h2>
        <div class="big_flower">
          <img src="./assets/img/masterpiece_wolf.jpg" alt="鯨魚" class="circle_in_flower">
          <img src="./assets/img/masterpiece_wave.jpg" alt="" class="big_flower_petal big_flower_petal_top_left">
          <img src="./assets/img/masterpiece_wolf.jpg" alt="" class="big_flower_petal big_flower_petal_top lighter">
          <img src="./assets/img/min/masterpiece_11.jpg" alt="" class="big_flower_petal big_flower_petal_top_right">
          <img src="./assets/img/masterpiece_whiteCircle_and_blueLine.jpg" alt=""
            class="big_flower_petal big_flower_petal_right">
          <img src="./assets/img/min/masterpiece_02.jpg" alt="" class="big_flower_petal big_flower_petal_bottom_right">
          <img src="./assets/img/masterpiece_maria.jpg" alt="" class="big_flower_petal big_flower_petal_bottom">
          <img src="./assets/img/masterpiece_happy_baby.jpg" alt="" class="big_flower_petal big_flower_petal_bottom_left">
          <img src="./assets/img/masterpiece_ginkgo.jpg" alt="" class="big_flower_petal big_flower_petal_left">
        </div>
        <div class="background_flower"></div>
        <div class="background_flower bgf2"></div>
        <div class="background_flower lb_flower"></div>
        <div class="background_flower bgf2 lb_flower"></div>
        <div class="more">
          <a href="masterpiece_page.html">更多作品一覽></a>
        </div>
      </section>
    </div>

    <!-- 漸層 -->
    <div class="change_backgraound_back"></div>
    <!--   技法介紹   -->
    <div class="outer_skill">
      <section class="introduce_of_skill">
        <h2>技法介紹</h2>
        <div class="skill_pic_and_intro_and_roulette">
          <div>
            <div class="skill_roulette">
              <div class="flower_roulette">
                <img class="roulette_top_left" src="./assets/img/skill_heart_circle.jpg" alt="">
                <img class="roulette_top lighter" src="./assets/img/masterpiece_eagle.jpg" alt="蠟染">
                <img class="roulette_top_right" src="./assets/img/skill_linear_gradien.jpg" alt="">
                <img class="roulette_bottom_right" src="./assets/img/skill_squir.jpg" alt="">
                <img class="roulette_bottom" src="./assets/img/skill_whiteCircle_and_blueBackground.jpg" alt="綁染">
                <img class="roulette_bottom_left" src="./assets/img/skill_leaf.jpg" alt="">
              </div>
            </div>
            <div class="skill_intro">
              <h3>蠟染</h3>
              <p>使用畫筆將蠟塗在布料上，吸滿蠟液的地方將不會使染液滲入，形成淺色區域。
                因為如同使用畫筆繪圖，在圖像上會有很高的自由度。
              </p>
            </div>
          </div>
          <div class="skill_pic">
            <img src="./assets/img/masterpiece_eagle.jpg" alt="綁染">
          </div>


        </div>
        <div class="more">
          <a href="skill_page.html">更多技法介紹></a>
        </div>
      </section>
    </div>
  </main>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
section {
  position: relative;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 20px;
}

:root {
  /* 花瓣路徑，寬100高150 */
  --upper_petal: path("M 50,136.6 L 0,50 A 50,50 0,0,1 100,50 L 50,136.6 z");
  --down_petal: path("M 50,0 L 0,86.6 A 50,50 0,0,0 100,86.6 L 50,0 z");
  /* 花瓣路徑，1.5倍 */
  --upper_petal_bigger: path("M 75,204.9 L 0,75 A 75,75 0,0,1 150,75 L 75,204.9 z"
    );
  --down_petal_bigger: path("M 75,0 L 0,129.9 A 75,75 0,0,0 150,129.9 L 75,0 z"
    );
}

h2 {
  letter-spacing: 0.1em;
}

h3 {
  letter-spacing: 0.1em;
}

p {
  letter-spacing: 0.2em;
}

.more {
  font-size: 1.25rem;
  text-align: right;
  margin-top: 20px;
  text-shadow: 1px 1px 2px darkblue;
}

.more>a {
  color: #fed857;
}

.more>a:visited {
  color: #fed857;
}

/* ========================================= */
/* 以下課程介紹 */
.outer_intro {
  background-color: #84bae6;
  overflow: hidden;
}

.introduce_of_course>h2 {
  line-height: 3em;
}

.course_image_with_button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.course_image {
  width: 100%;
}

/* 佔位用圖片 */
.course_image.nothing>.nothing {
  width: 100%;
  opacity: 0;
}

/* 輪播的圖片 */
.course_image.carousel {
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  transition: 1000ms;
}

/* 待輪播的圖片 */
.course_image.carousel.hidden {
  opacity: 0;
}

.course_image.carousel.hidden.hidden_left {
  opacity: 0;
  left: -2000px;
}

.course_image.carousel.hidden.hidden_right {
  opacity: 0;
  left: 2000px;
}

.course_image.carousel>img {
  width: 100%;
}

/* 輪播列左右按鈕 */
.btn {
  position: absolute;
  z-index: 1;
  width: 100px;
  height: 150px;
  font-size: 5.5rem;
  border: 0;
  border-radius: 50%;
  color: #0009;
  background-color: #fff0;
  cursor: pointer;
  font-family: "fontawesome";
}

.btn:hover {
  background-color: #fff3;
  transition: 0.5s;
}

.pre_pic {
  left: -40px;
}

.pre_pic>i {
  position: relative;
  left: -5px;
}

.next_pic {
  right: -40px;
}

.next_pic>i {
  position: relative;
  left: 5px;
}

.course_introduce_words {
  width: 90%;
  border-radius: 0.75rem;
  /* padding-top: 20px; */
  padding-bottom: 30px;
  margin: 10px auto;
  margin-top: 20px;
  font-size: 1.5rem;
  text-align: center;
  background-color: #fff8;
  transition: 1s;
  left: 0;
  right: 0;
  white-space: pre-line;
}

.course_introduce_words h3 {
  margin-top: 20px;
}

.course_introduce_words_paragraph {
  font-size: 1rem;
  font-weight: 300;
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
  padding-bottom: 5px;
  text-align: left;
  line-height: 1.5em;
  text-indent: 1em;
  letter-spacing: 2px;
  background-image: linear-gradient(#fff0 96%, #0002 97%);
  background-size: 100% 1.5em;
}

/* 文字輪播 */
.course_introduce_words.nothing {
  opacity: 0;
}

.course_introduce_words.carousel {
  position: absolute;
}

.course_introduce_words.carousel.hidden {
  opacity: 0;
}

.course_introduce_words.carousel.hidden_left {
  left: -2000px;
}

.course_introduce_words.carousel.hidden_right {
  left: 2000px;
}

/* 以上課程介紹 */
/* ========================================= */
.change_backgraound_front {
  /* height: 60vh;
  background-image: url(../img/bg_01.jpg);
  background-size: cover;
  background-attachment: fixed; */
  height: 50px;
  background-image: linear-gradient(#84bae6, #6eaddf, #4f96d8);
}

/* ========================================= */
/* 以下作品一覽 */
.outer_master {
  background-color: #4f96d8;
}

.introduce_of_masterpiece {
  position: relative;
  overflow: hidden;
}

.introduce_of_masterpiece h2 {
  line-height: 3em;
}

/* 小花背景裝飾 */
.background_flower {
  position: absolute;
  /*   border: 1px solid black; */
  width: 25vw;
  height: 25vw;
  top: 20px;
  right: 0;
  background-image: radial-gradient(#fff2 10%, #0000 20%),
    radial-gradient(ellipse 40% 80%, #fff4 20%, #0000 20%),
    radial-gradient(ellipse 80% 40%, #fff4 20%, #0000 20%),
    radial-gradient(ellipse 40% 80%, #fff4 20%, #0000 20%),
    radial-gradient(ellipse 80% 40%, #fff4 20%, #0000 20%);
  /*     background-size: 200px 200px; */
  background-position: 0 0, 0 calc(25vw * 0.3), calc(25vw * 0.3) 0,
    0 calc(-25vw * 0.3), calc(-25vw * 0.3) 0;
  background-repeat: no-repeat;
  z-index: 0;
}

.bgf2 {
  transform: rotate(45deg);
}

.lb_flower {
  top: 50%;
  left: 30px;
}

/* 大花輪播 */
/* FIXME: 大花輪播，之後RWD要大修 */
.big_flower {
  position: relative;
  z-index: 1;
  height: 600px;
  width: 600px;
  margin: auto;
  display: grid;
  grid-template: repeat(5, auto) / repeat(5, auto);
  transform-origin: top left;
  transform: scale(53%);
}

@media screen and (min-width: 768px) {
  .big_flower {
    transform: scale(100%);
  }
}

.big_flower>img:not(.circle_in_flower) {
  width: 100px;
  /*! height: 100px; */
  aspect-ratio: 2/3;
  object-fit: cover;
  filter: brightness(40%);
}

.big_flower>img:not(.circle_in_flower).lighter {
  filter: brightness(100%);
}

.big_flower>img:nth-child(even) {
  aspect-ratio: 1/1;
  width: 150px;
}

.big_flower>img:nth-child(4n + 1) {
  aspect-ratio: 3/2;
  width: 150px;
}

.big_flower>img:first-child {
  grid-column: 2/5;
  grid-row: 2/5;
  width: 300px;
  aspect-ratio: 1/1;
  border-radius: 50%;
}

.big_flower_petal_top_left {
  grid-column: 1;
  grid-row: 1;
  clip-path: var(--upper_petal);
  transform: translate(130px, 50px) rotate(-45deg);
  transform-origin: 50px 136.6px;
}

.big_flower_petal_top {
  grid-column: 3;
  grid-row: 1;
  clip-path: var(--upper_petal);
}

.big_flower_petal_top_right {
  grid-column: 5;
  grid-row: 1;
  clip-path: var(--upper_petal);
  transform: translate(-80px, 43px) rotate(45deg);
  transform-origin: 50px 136.6px;
}

.big_flower_petal_right {
  grid-column: 5;
  grid-row: 3;
  clip-path: path("M 0,50 L 86.6,0 A 50,50 0,0,1 86.6,100 L 0,50 z");
  transform: translate(15px);
}

.big_flower_petal_bottom_right {
  grid-column: 5;
  grid-row: 5;
  clip-path: var(--down_petal);
  transform: translate(-84px, -30px) rotate(-45deg);
  transform-origin: 50px top;
}

.big_flower_petal_bottom {
  grid-column: 3;
  grid-row: 5;
  clip-path: var(--down_petal);
  transform: translate(0, 15px);
}

.big_flower_petal_bottom_left {
  grid-column: 1;
  grid-row: 5;
  clip-path: var(--down_petal);
  transform: translate(130px, -30px) rotate(45deg);
  transform-origin: 50px top;
}

.big_flower_petal_left {
  grid-column: 1;
  grid-row: 3;
  clip-path: path("M 136.6,50 L 50,100 A 50,50 0,0,1 50,0 L 136.6,50 z");
}

@media screen and (min-width: 1500px) {
  .big_flower {
    height: 900px;
    width: 900px;
  }

  .big_flower>img:not(.circle_in_flower) {
    width: 150px;
  }

  .big_flower>img:nth-child(even) {
    width: 225px;
  }

  .big_flower>img:nth-child(4n + 1) {
    width: 225px;
  }

  .big_flower>img:first-child {
    width: 450px;
  }

  .big_flower_petal_top_left {
    clip-path: var(--upper_petal_bigger);
    transform: translate(195px, 75px) rotate(-45deg);
    transform-origin: 75px 204.9px;
  }

  .big_flower_petal_top {
    clip-path: var(--upper_petal_bigger);
  }

  .big_flower_petal_top_right {
    clip-path: var(--upper_petal_bigger);
    transform: translate(-120px, 64.5px) rotate(45deg);
    transform-origin: 75px 204.9px;
  }

  .big_flower_petal_right {
    clip-path: path("M 0,65 L 129.9,0 A 65,65 0,0,1 129.9,150 L 0,65 z");
    transform: translate(22.5px);
  }

  .big_flower_petal_bottom_right {
    clip-path: var(--down_petal_bigger);
    transform: translate(-126px, -45px) rotate(-45deg);
    transform-origin: 75px top;
  }

  .big_flower_petal_bottom {
    clip-path: var(--down_petal_bigger);
    transform: translate(0, 22.5px);
  }

  .big_flower_petal_bottom_left {
    clip-path: var(--down_petal_bigger);
    transform: translate(195px, -45px) rotate(45deg);
    transform-origin: 75px top;
  }

  .big_flower_petal_left {
    clip-path: path("M 204.9,75 L 75,150 A 75,75 0,0,1 75,0 L 204.9,75 z");
  }
}

/* 以上作品一覽 */
/* ========================================= */
.change_backgraound_back {
  height: 50px;
  background-image: linear-gradient(#4f96d8, #357ecd);
}

/* ========================================= */
/* 以下技法介紹 */
.outer_skill {
  background-color: #357ecd;
}

.introduce_of_skill {
  color: #e3e3e3;
  text-shadow: 1px 1px 1px #0007;
}

.introduce_of_skill h2 {
  line-height: 3em;
}

.skill_pic_and_intro_and_roulette {
  display: flex;
  flex-direction: column;
}

.skill_roulette {
  display: flex;
  align-items: center;
}

/* 花瓣輪盤 */
/* FIXME: 花瓣輪盤，之後RWD要大修 */
.flower_roulette {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  /* border: 1px solid #000; */
  font-size: 0;
  height: 300px;
  aspect-ratio: 1/1;
  margin: auto;
}

.flower_roulette>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(40%);
}

.flower_roulette>img.lighter {
  filter: brightness(100%);
}

.flower_roulette>img:nth-child(1) {
  grid-column: 1;
  grid-row: 1;
  clip-path: var(--upper_petal);
  transform: translate(83px) rotate(-60deg);
  transform-origin: center 136.6px;
}

.flower_roulette>img:nth-child(2) {
  grid-column: 2;
  grid-row: 1;
  clip-path: var(--upper_petal);
}

.flower_roulette>img:nth-child(3) {
  grid-column: 3;
  grid-row: 1;
  clip-path: var(--upper_petal);
  transform: translate(-83px) rotate(60deg);
  transform-origin: center 136.6px;
}

.flower_roulette>img:nth-child(4) {
  grid-column: 3;
  grid-row: 2;
  clip-path: var(--down_petal);
  transform: translate(-83px) rotate(-60deg);
  transform-origin: top center;
}

.flower_roulette>img:nth-child(5) {
  grid-column: 2;
  grid-row: 2;
  clip-path: var(--down_petal);
}

.flower_roulette>img:nth-child(6) {
  grid-column: 1;
  grid-row: 2;
  clip-path: var(--down_petal);
  transform: translate(83px) rotate(60deg);
  transform-origin: top center;
}

@media screen and (min-width: 1500px) {
  .flower_roulette {
    height: 450px;
  }

  .flower_roulette>img:nth-child(1) {
    clip-path: var(--upper_petal_bigger);
    transform: translate(124.5px) rotate(-60deg);
    transform-origin: center 204.9px;
  }

  .flower_roulette>img:nth-child(2) {
    clip-path: var(--upper_petal_bigger);
  }

  .flower_roulette>img:nth-child(3) {
    clip-path: var(--upper_petal_bigger);
    transform: translate(-124.5px) rotate(60deg);
    transform-origin: center 204.9px;
  }

  .flower_roulette>img:nth-child(4) {
    clip-path: var(--down_petal_bigger);
    transform: translate(-124.5px) rotate(-60deg);
    transform-origin: top center;
  }

  .flower_roulette>img:nth-child(5) {
    clip-path: var(--down_petal_bigger);
  }

  .flower_roulette>img:nth-child(6) {
    clip-path: var(--down_petal_bigger);
    transform: translate(124.5px) rotate(60deg);
    transform-origin: top center;
  }
}

/* --------- */
.skill_intro {
  background-color: #fff4;
  border-radius: 0.75rem;
  padding: 0 10px;
  padding-bottom: 10px;
}

.skill_intro h3 {
  font-size: 1.5rem;
  line-height: 3em;
}

.skill_intro p {
  font-size: 1rem;
  line-height: 1.5em;
  font-weight: 300;
  text-align: justify;
  white-space: pre-line;
}

.skill_pic {
  width: 100%;
  margin-bottom: 10px;
}

.skill_pic img {
  width: 100%;
  border-radius: 1em;
}

@media screen and (min-width: 768px) {
  .skill_pic_and_intro_and_roulette {
    flex-direction: row;
    /* flex-wrap: wrap;
    height: 500px; */
  }

  .skill_pic_and_intro_and_roulette>div:first-child {
    margin-right: 10px;
  }

  .skill_pic {
    margin-left: 10px;
    margin-bottom: 0;
  }
}

@media screen and (min-width: 992px) {
  .course_image {
    width: 70%;
    max-width: 1200px;
  }
}

/* 以上技法介紹 */
/* ========================================= */
.cover_under_page {
  background-color: var(--skill_color);
}

.cover_line_message {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url(../img/LINE_APP_Android.png);
  opacity: 1;
  position: fixed;
  right: 20px;
  bottom: 90px;
  z-index: 2;
}

.cover_line_message::after {
  content: "歡迎聯絡";
  display: block;
  font-size: 1.25rem;
  position: fixed;
  bottom: 105px;
  right: 80px;
  background-color: #fff4;
  /* border: 1px solid #000; */
}

.line_message {
  display: block;
  width: 50px;
  height: 50px;
}

.go_to_top {
  background-color: #fff;
  opacity: 0.5;
  font-family: "fontawesome";
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  bottom: 20px;
  right: 20px;
}

/* 進版動畫 */
.logo_flower_animation {
  position: fixed;
  z-index: 888;
  top: 0;
  left: 0;
  width: calc(100vw - 17px);
  height: 100vh;
  width: 100%;
  background-color: #fff;
  animation: logo_flower_animation_bg 0.5s linear;
  animation-delay: 5s;
  display: none;
}

.logo_flower_animation div {
  background-repeat: no-repeat;
  position: absolute;
  /* left: 0;
  right: 0;
  top: 0;
  bottom: 0; */
  width: 0px;
  height: 0px;
  /* margin: auto; */

  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.logo_flower_black {
  background-image: radial-gradient(#000 20%, #fff 60%);
  mix-blend-mode: screen;
  background-position: center;
  animation-name: logo_flower_animation_b;
}

.logo_flower {
  background-image: url(../img/logo_flower.svg);
  animation-name: logo_flower_animation;
}

@keyframes logo_flower_animation {
  0% {
    width: 0;
    height: 0;
    opacity: 0;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
  }

  50% {
    width: 300px;
    height: 300px;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(180deg);
  }

  95% {
    width: 50px;
    height: 50px;
    transform: rotate(360deg);
    left: 5%;
    top: 6px;
  }

  100% {
    width: 50px;
    height: 50px;
    transform: rotate(360deg);
    left: 5%;
    top: 6px;
  }
}

@keyframes logo_flower_animation_b {
  0% {
    width: 0;
    height: 0;
    /* opacity: 0; */
    /* background-size: 50% 50%; */
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
  }

  50% {
    width: 300px;
    height: 300px;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(180deg);
  }

  95% {
    width: 50px;
    height: 50px;
    transform: rotate(360deg);
    opacity: 0;
    left: 5%;
    top: 5px;
  }

  100% {
    width: 50px;
    height: 50px;
    transform: rotate(360deg);
    opacity: 0;
    left: 5%;
    top: 5px;
  }
}

@keyframes logo_flower_animation_bg {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

/* 小花掉落 */
.flower_animation {
  position: absolute;
  z-index: 888;
  top: 0;
  left: 0;
  width: calc(100vw - 17px);
  height: 100vh;
  background-color: #fff;
  display: none;
}

.cos_f {
  position: absolute;
  animation-name: cos;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.flower_animation_small_flower {
  width: 73px;
  height: 71px;
  position: relative;
  background-image: url(../img/small_logo_flower.png);

  animation-name: sin;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
}

.cos_f:nth-child(1) {
  left: 5%;
  animation-duration: 3s;
  /* animation-delay: 1s; */
}

.cos_f:nth-child(2) {
  left: 25%;
  animation-duration: 5s;
  /* animation-delay: 3s; */
}

.cos_f:nth-child(3) {
  left: 45%;
  animation-duration: 2s;
  /* animation-delay: 2s; */
}

.cos_f:nth-child(4) {
  left: 65%;

  animation-duration: 3.5s;
  /* animation-delay: 1s; */
}

.cos_f:nth-child(5) {
  left: 85%;

  animation-duration: 2.5s;
  /* animation-delay: 3s; */
}

.cos_f:nth-child(1)>.flower_animation_small_flower {
  animation-duration: 1s;
}

.cos_f:nth-child(2)>.flower_animation_small_flower {
  animation-duration: 2s;
}

.cos_f:nth-child(3)>.flower_animation_small_flower {
  animation-duration: 3s;
}

.cos_f:nth-child(4)>.flower_animation_small_flower {
  animation-duration: 2.5s;
}

.cos_f:nth-child(5)>.flower_animation_small_flower {
  animation-duration: 1.5s;
}

@keyframes cos {
  0% {
    top: 0%;
  }

  50% {
    top: 50%;
  }

  100% {
    top: 100%;
  }
}

/* @keyframes sin {
  0% {
    left: 0;
  }

  25% {
    left: -100px;
  }

  50% {
    left: 0;
  }

  75% {
    left: 100px;
  }

  100% {
    left: 0;
  }
} */
@keyframes sin {
  0% {
    left: -100px;
  }

  100% {
    left: 100px;
  }
}
</style>
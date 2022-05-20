<script setup>
import BackgroundFlower from "./components/BackgroundFlower.vue";
</script>

<template>
  <main style="overflow: hidden">
    <section class="skill">
      <aside>
        <ul>
          <li id="AA">蠟染</li>
          <li id="BB">摺疊縫染</li>
          <li id="CC">縫染</li>
          <li id="DD">植物染</li>
        </ul>
      </aside>
      <h2 class="skill_name">蠟染</h2>
      <div class="container a">
        <div class="row">
          <div class="col col_12 col_md_4">
            <div class="pic">
              <img src="./assets/img/skill_01.jpg" alt="" />
            </div>
          </div>
          <div class="col col_12 col_md_8">
            <div class="text">
              <p>首先在處理過的布上畫上草稿。</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col col_12 col_md_4">
            <div class="pic">
              <img src="./assets/img/skill_02.jpg" alt="" />
            </div>
          </div>
          <div class="col col_12 col_md_8">
            <div class="text">
              <p>接著再將融化的蠟用畫筆畫在布料上。</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col col_12 col_md_4">
            <div class="pic">
              <img src="./assets/img/skill_03.jpg" alt="" />
            </div>
          </div>
          <div class="col col_12 col_md_8">
            <div class="text">
              <p>
                等蠟凝固在布上後就可以把布放進染缸中染色了。因為有蠟的地方染液不容易進入，因此最後會形成淺色的區域。
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col col_12 col_md_4">
            <div class="pic">
              <img src="./assets/img/skill_04.jpg" alt="" />
            </div>
          </div>
          <div class="col col_12 col_md_8">
            <div class="text">
              <p>這就是我們的成品❤</p>
            </div>
          </div>
        </div>
      </div>

      <div class="container none b">
        <div class="row">
          <div class="col col_12 col_md_4">
            <div class="pic">
              <img src="./assets/img/skill_11.jpg" alt="" />
            </div>
          </div>
          <div class="col col_12 col_md_8">
            <div class="text">
              <p>首先將布摺疊好。</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col col_12 col_md_4">
            <div class="pic">
              <img src="./assets/img/skill_12.jpg" alt="" />
            </div>
          </div>
          <div class="col col_12 col_md_8">
            <div class="text">
              <p>
                接著再將布用針線緊緊縫在一起。縫僅的地方會使染液不容易滲入。
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col col_12 col_md_4">
            <div class="pic">
              <img src="./assets/img/skill_13.jpg" alt="" />
            </div>
          </div>
          <div class="col col_12 col_md_8">
            <div class="text">
              <p>這就是我們的成品❤</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FIXME overflow -->
    <!-- 背景裝飾 -->
    <BackgroundFlower></BackgroundFlower>
  </main>
</template>

<style lang="scss">
body {
  font-size: 1.5rem;
}

a[href="skill_page.html"] {
  border-radius: 0.25em;
  background-color: #1a388c30;
}

h1,
header h2 {
  opacity: 0;
}

main {
  background-color: #357ecde5;
  letter-spacing: 0.05em;
  text-shadow: 1px 1px 2px #fff3;
  // FIXME
  // overflow: hidden;
}

.skill {
  position: relative;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.skill_name {
  text-align: center;
  line-height: 3em;
  letter-spacing: 0.5em;
}

img {
  width: 100%;
}

.row {
  margin-bottom: 20px;
}

.text {
  font-size: 1rem;
  font-weight: 300;
  margin-top: 10px;
}

aside {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
}

aside ul {
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  background: #fff9;
}

aside li {
  cursor: pointer;
}

aside li:hover {
  animation: jump 0.5s infinite;

  /* transform: translateY(20px); */
}

.container.none {
  display: none;
}

@keyframes jump {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0px);
  }
}

@media screen and (min-width: 768px) {
  .skill_name {
    font-size: 2rem;
  }

  .text {
    font-size: 1.5rem;
    font-weight: 400;
  }

  aside ul {
    font-size: 1.5rem;
  }
}

/* ============================== */
.cover_under_page {
  background-color: #357ecde5;
}
</style>
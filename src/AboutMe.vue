<template>
  <main>
    <section class="about_me">
      <h2>關於我</h2>
      <div class="topper">
        <div>
          <div class="pic"><img src="./assets/img/master_02.jpg" alt="" /></div>
          <div>
            <p>
              我給自己取個名字叫春風，在網路上使用很多年，習慣了!哈哈
              大家不妨都叫我春風吧!
            </p>
            <p>
              2018年4月20日，我突然失業了!晴天霹靂的這一天，是我人生極大的轉捩點。對於工作30幾年的職業婦女，一天之中變成家庭主婦，真是料想不到，甚至忿忿不平，但是又怎樣?
            </p>
          </div>
        </div>
        <div>
          <p style="text-indent: 0em">
            幸好我的孩子都長大了!房屋貸款也還完了!好吧!就此提早進入退休生活吧!
          </p>
          <p style="font-weight: 400; margin: 1em 0; text-indent: 0em">
            於是開始嘗試以前未曾擁有的自由。
          </p>
          <p>
            2018年5月，參加白沙屯媽祖徒步進香，雖因雙腿不適應長途跋涉而受傷，但不必請假的日子真是舒服呀!
            同年6月跟先生到土耳其自由行21天，9月參加勞動部職能發展學會委託中華菁英協會辦理的「藍染及手工皂」職前訓練，從此進入藍染的世界……
          </p>
        </div>
      </div>
      <hr />
      <div class="content">
        <div class="row">
          <div class="col col_12 col_md_6">
            <div class="pic">
              <img src="./assets/img/about_01.jpg" alt="" />
            </div>
          </div>
          <div class="col col_12 col_md_6">
            <div class="text">
              <p>
                民國107年8月31日至11月16日
                參加臺北市職能發展學院辦理107年度委託辦理職能培育手作商品製作班，修習藍染及手工皂343小時訓練期滿成績及格。
              </p>
              <p>
                民國108年2月25日
                參加108年淡水暮色展覽，配合展出藍染創作，推展藍染技藝有功。
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col col_12 col_md_6">
            <div class="pic">
              <img src="./assets/img/about_02.jpg" alt="" />
            </div>
          </div>
          <div class="col col_12 col_md_6">
            <div class="text">
              <p>
                民國108年2月至7月
                台北客家推廣教育中心，藍染意象山水課程，完成全期課程。
              </p>
              <p>
                民國108年6月4日至8月14日
                參加勞動部勞動力發展署委託辦理失業者職業訓練其他職類群:多媒材拼布縫製實務班，修習360小時訓練期滿成績合格。
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col col_12 col_md_6">
            <div class="pic">
              <img src="./assets/img/about_03.jpg" alt="" />
            </div>
          </div>
          <div class="col col_12 col_md_6">
            <div class="text">
              <p>
                民國108年4月22日至6月24日
                參加臺北市職能發展學院委託辦理職能進修:創意飾品編織班，修習60小時訓練期滿成績及格。
              </p>
              <p>
                民國108年7月
                參加HAKKA好學園，新北客家藍染(進階班)課程，時數60小時。
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col col_12 col_md_6">
            <div class="pic">
              <img src="./assets/img/about_04.jpg" alt="" />
            </div>
          </div>
          <div class="col col_12 col_md_6">
            <div class="text">
              <p>
                民國108年8月24日至11月16日
                參加「藍金傳奇-藍染種籽客家人才培育~客家藍茶文創計畫研習課程」，總研習時數90小時。
              </p>
              <p>
                民國109年11月
                參加「109年HAKKA好學園」青出於藍(文創班)課程，時數60小時。
              </p>
              <p>
                民國111年10月
                參加「110年HAKKA好學園」天然植物創意染(初階班)課程，時數30小時。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bottomer">
        <div>
          <div class="pic"><img src="./assets/img/master_03.jpg" alt="" /></div>
          <div class="text">
            <p>
              目前成立「染一片春天」手作坊，以做中學為主旨，有時同學一起來切磋，教學也交朋友。
              處於半退休狀態，休閒娛樂更多於工作，工作本身就是娛樂。
            </p>
            <p>
              「染一片春天」以植物染為主，染好的布再後製成各種實用作品，如提袋、帽子、衣服、飾物...等。
              歡迎有興趣的朋友，一起來染一片春天工作室，一同腦力激盪、一同創作。
            </p>
          </div>
        </div>
        <div class="pic"><img src="./assets/img/master_04_2.jpg" alt="" /></div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
a[href="about_me.html"] {
  border-radius: 0.25em;
  background-color: #1a388c30;
}

main {
  background-color: #c7f2ff;
}

.about_me {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;

  > h2 {
    visibility: hidden;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    white-space: pre-line;
    text-indent: 1.2em;
    line-height: 1.75;
    letter-spacing: 1px;
    text-align: justify;
  }
}

.pic > img {
  width: 100%;
}

.row + .row {
  padding-top: 20px;
  padding-bottom: 20px;
}

.bottomer {
  padding-bottom: 40px;

  .text {
    margin-bottom: 20px;
  }
}

@media screen and (min-width: 768px) {
  .about_me p {
    font-size: 1.25rem;
    letter-spacing: 2px;
  }

  .topper {
    > div:first-child {
      display: flex;
      margin-left: -20px;
      margin-right: -20px;
      padding-bottom: 40px;

      .pic {
        padding-left: 20px;
        padding-right: 20px;
        width: 50%;
        flex-shrink: 0;
      }
    }
  }

  .row {
    margin-left: -20px;
    margin-right: -20px;
    position: relative;

    + .row {
      padding-top: 40px;
      padding-bottom: 40px;
    }

    &:nth-child(even) {
      flex-direction: row-reverse;
    }

    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 2px;
      left: 50%;
      background: #0003;
    }

    &:first-child::before {
      height: calc(100% + 40px);
    }

    &:last-child::before {
      height: calc(100% - 80px);
    }

    &::after {
      content: "";
      position: absolute;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translateX(-50%);
      background: #00f6;
    }
  }

  [class*="col_"] {
    padding: 1px 20px;
  }

  .bottomer {
    > div:first-child {
      display: flex;
      margin-bottom: 40px;
    }

    > div:first-child .pic {
      margin-right: 20px;
      flex-shrink: 0.7;
    }
  }
}

@media screen and (min-width: 992px) {
  .about_me p {
    font-size: 1.5rem;
  }
}

/* ======================== */
.cover_under_page {
  background-color: #c7f2ff;
}
</style>
<template>
  <!-- footer -->
  <div class="cover_under_page">
    <footer class="under_page">
      <address class="cover_address_and_icon">
        <div class="address_and_tel">
          <p class="address">地址: 新北市中和區華安街17巷5號</p>
          <p class="tel">連絡電話: 0908-081-310</p>
        </div>
        <div class="cover_bussines_icon">
          <p>相關連結:</p>

          <div class="many_bussines_icons">
            <a href="https://line.me/ti/p/CC5-CxTp8R" target="_blank">
              <div class="bussines_icon">
                <img width="50" src="../assets/img/LINE_Brand_icon.png" alt="染一片春天的LINE" />
              </div>
            </a>
            <a href="https://www.facebook.com/%E6%9F%93%E4%B8%80%E7%89%87%E6%98%A5%E5%A4%A9-%E6%89%8B%E4%BD%9C%E5%9D%8A-369868907123043/"
              target="_blank">
              <div class="bussines_icon">
                <img width="50" src="../assets/img/facebook.png" alt="染一片春天的Facebook主頁" />
              </div>
            </a>
            <a href="https://www.instagram.com/flower.huang.180/" target="_blank">
              <div class="bussines_icon">
                <img width="50" src="../assets/img/instagram.png" alt="染一片春天的instagram" />
              </div>
            </a>
            <a href="https://shopee.tw/jojoppq?smtt=0.0.9" target="_blank">
              <div class="bussines_icon">
                <img width="50" src="../assets/img/shopee.svg" alt="染一片春天的蝦皮賣場" />
              </div>
            </a>
          </div>
        </div>
      </address>
      <p class="front_of_copyright">
        <small class="copyright">版權所有© 2022 染一片春天藍染工作室</small>
      </p>
    </footer>
  </div>
</template>

<style lang="scss">
.cover_under_page {
  font-size: 1rem;
  font-weight: 300;
}

.under_page {
  background-color: #fff9;
  padding-top: 10px;
  padding-bottom: 10px;

  p {
    line-height: 2em;
    letter-spacing: 1px;
  }
}

.address_and_tel {
  max-width: 288px;
}

.cover_address_and_icon {
  width: 80%;
  max-width: 288px;
  margin: 0 auto;
}

.cover_bussines_icon {
  max-width: 300px;
}

.many_bussines_icons {
  display: flex;
  justify-content: space-between;

  >a {
    display: flex;
    align-items: flex-end;
  }
}

.bussines_icon {
  /* display: inline-block; */
  width: 50px;

  >img {
    width: 100%;
  }
}

.front_of_copyright {
  line-height: 3em;
  text-align: center;
}

@media screen and (max-width: 360px) {
  .cover_under_page {
    font-size: 0.75rem;
  }
}

@media screen and (min-width: 768px) {
  .cover_address_and_icon {
    display: flex;
    justify-content: center;
    max-width: 1200px;

    >div {
      margin: 0 10px;
    }
  }

  .address_and_tel {
    flex-grow: 1;
  }

  .cover_bussines_icon {
    flex-grow: 1;
  }
}
</style>
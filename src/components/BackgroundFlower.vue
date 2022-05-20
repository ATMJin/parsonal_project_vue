<template>
  <!-- FIXME overflow -->
  <div class="a_lot_of_flower">
    <div class="cover_background_flower">
      <div class="background_flower"></div>
      <div class="background_flower bgf2"></div>
    </div>
    <div class="cover_background_flower">
      <div class="background_flower"></div>
      <div class="background_flower bgf2"></div>
    </div>
    <div class="cover_background_flower">
      <div class="background_flower"></div>
      <div class="background_flower bgf2"></div>
    </div>
    <div class="cover_background_flower">
      <div class="background_flower"></div>
      <div class="background_flower bgf2"></div>
    </div>
    <!-- <div class="cover_background_flower">
        <div class="background_flower"></div>
        <div class="background_flower bgf2"></div>
      </div>
      <div class="cover_background_flower">
        <div class="background_flower"></div>
        <div class="background_flower bgf2"></div>
      </div>
      <div class="cover_background_flower">
        <div class="background_flower"></div>
        <div class="background_flower bgf2"></div>
      </div>
      <div class="cover_background_flower">
        <div class="background_flower"></div>
        <div class="background_flower bgf2"></div>
      </div> -->
  </div>
</template>

<style lang="scss">
/* FHD寬螢幕背景裝飾 */
@media screen and (min-width: 1600px) {
  .cover_background_flower {
    position: absolute;
    width: 15vw;
    height: 15vw;
    top: 200px;
    left: 0.3%;
  }
  .a_lot_of_flower {
    > .cover_background_flower:nth-of-type(even) {
      left: 80%;
    }
    @for $i from 2 to 9 {
      > .cover_background_flower:nth-of-type(#{$i}) {
        top: calc(200px + (#{$i} - 1) * 500px);
      }
    }
  }

  .background_flower {
    position: absolute;
    width: 15vw;
    height: 15vw;
    /* top: 20px; */
    /* right: 0; */
    background-image: radial-gradient(#fff2 10%, #0000 20%),
      radial-gradient(ellipse 40% 80%, #fff4 20%, #0000 20%),
      radial-gradient(ellipse 80% 40%, #fff4 20%, #0000 20%),
      radial-gradient(ellipse 40% 80%, #fff4 20%, #0000 20%),
      radial-gradient(ellipse 80% 40%, #fff4 20%, #0000 20%);
    /*     background-size: 200px 200px; */
    background-position: 0 0, 0 calc(15vw * 0.3), calc(15vw * 0.3) 0,
      0 calc(-15vw * 0.3), calc(-15vw * 0.3) 0;
    background-repeat: no-repeat;
  }

  .bgf2 {
    transform: rotate(45deg);
  }
}
</style>
<template>
  <div>
    <!-- navbar -->
    <nav-bar />
    <!-- home -->
    <section class="home">
      <div class="max-width">
        <div class="bigpic"></div>
      </div>
    </section>

    <!-- corousel test -->
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="~@/assets/img/1.jpeg" class="d-block w-100" alt="" />
        </div>
        <div class="carousel-item">
          <img src="~@/assets/img/2.jpeg" class="d-block w-100" alt="" />
        </div>
        <div class="carousel-item">
          <img src="~@/assets/img/3.jpeg" class="d-block w-100" alt="" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- foryou -->
    <section class="foryou">
      <div class="max-width">
        <div class="title">
          <h3>FOR YOU</h3>
        </div>
        <div class="d-flex flex-wrap justify-content-center">
          <div
            v-for="item in 8"
            :key="`l-${item}`"
            class="col-12 col-sm-6 col-lg-3"
          >
            <movie-box></movie-box>
          </div>
        </div>

        <div class="d-grid gap-2"></div>
      </div>
    </section>

    <!-- rating -->
    <rate-list></rate-list>

    <!-- footer -->
    <custom-foot />
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar";
import CustomFoot from "@/components/common/CustomFoot";
import MovieBox from "@/components/common/MovieBox";
import RateList from "@/components/common/RateList";

export default {
  components: { NavBar, CustomFoot, MovieBox, RateList },
  setup() {},
};
</script>

<style scoped>
section {
  background: #363636;
  padding-bottom: 40px;
}
.title {
  padding: 30px;
}
h3 {
  font-size: 30px;
  color: #fec926;
  font-weight: 400;
}
.bigpic {
  width: 100%;
  height: 500px;
  background: lightgray;
}

/* responsive */
/* @media (max-width: 919px) {
  .list a {
    width: 250px;
    height: 200px;
  }
} */
@media (max-width: 550px) {
  .bigpic {
    width: 100%;
    height: 400px;
    margin-bottom: 50px;
  }
}
</style>
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

        <div class="d-grid gap-2">
        </div>
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
<template>
  <section class="rating">
    <div class="max-width">
      <div class="title">
        <h3>RATING</h3>
      </div>

      <div class="list-row">
        <div v-for="(item, index) in list" :key="index" class="col-12 col-sm-6">
          <router-link
            :to="{
              name: 'rate',
              query: {
                by: item.query,
              },
            }"
            class="box"
            >{{ item.text }}</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // list: ["top rates", "most recent", "most view", "mostlike"],
      list: [
        { query: "top_rated", text: "Top Rated" },
        { query: "now_playing", text: "Now Playing" },
        { query: "upcoming", text: "UpComing" },
        { query: "popular", text: "Popular" }
      ],
    };
  },
};
</script>

<style scoped>
.list-row {
  /* d-flex flex-wrap justify-content-center */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
}
.box {
  margin: 20px;
  cursor: pointer;
  background: cornsilk;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  color: #363636;
  opacity: 50%;
  transition: 0.3s ease;
  text-transform: uppercase;
}
.box:hover {
  opacity: 100%;
}
.title {
  padding: 30px;
}
h3 {
  font-size: 30px;
  color: #fec926;
  font-weight: 400;
}
@media (max-width: 550px) {
  .box {
    height: 50px;
  }
  .rating {
    background: #fec926;
  }
  h3 {
    color: #363636;
  }
}
@media (max-width: 919px) {
  .box {
    height: 200px;
  }
}
</style>
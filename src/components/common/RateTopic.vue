<template>
  <div>
    <section>
      <div class="max-width">
        <div class="d-flex flex-wrap justify-content-center">
          <h1>{{title}}</h1>
        </div>
        <div class="eiei d-flex flex-wrap justify-content-center">
          <div v-for="item in list" :key="`k-${item}`" class="col-12 col-lg-6">
            <a href="" class="box2"></a>
            <p>{{ item }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Top Rates",
    },
  },
  data() {
    return {
      list: [
        "Percy Jackson",
        "Pirates of the Carribbean",
        "Avatar",
        "KingsMan",
        "Harry Potter",
        "Star Wars",
        "Kimetsu No Yaiba",
        "Ready Player One",
      ],
    };
  },
  components: {},
  setup() {},
};
</script>

<style scoped>
section {
  background: #363636;
}
h1 {
  color: #fec926;
  font-weight: 500;
  padding-top: 40px;
}
.eiei {
  padding: 2rem;
}
.box2 {
  margin: 20px;
  background: cornsilk;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  opacity: 50%;
  transition: 0.3s ease;
}
.box2:hover {
  cursor: pointer;
  opacity: 100%;
}
p {
  margin: 20px;
  color: #fec926;
}
@media (max-width: 550px) {
  section {
    background: #fec926;
  }
  h1 {
    color: #363636;
    padding-top: 40px;
    font-weight: 400;
  }
  p {
    color: #363636;
  }
}
</style>
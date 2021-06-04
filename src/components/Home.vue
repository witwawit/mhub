<template>
  <div>
    <!-- foryou -->
    <section class="foryou">
      <div class="max-width">
        <div class="title">
          <h3>FOR YOU</h3>
        </div>

        <div class="container">
          <div class="block1"><a href=""></a></div>
          <div class="block2"><a href=""></a></div>
          <div class="block3"><a href=""></a></div>
          <div class="block4"><a href=""></a></div>
        </div>

        <div class="container">
          <div class="block1"><a href=""></a></div>
          <div class="block2"><a href=""></a></div>
          <div class="block3"><a href=""></a></div>
          <div class="block4"><a href=""></a></div>
        </div>
      </div>
    </section>

    <!-- rating -->
    <section class="rating">
      <div class="max-width">
        <div class="title">
          <h3>RATING</h3>
        </div>

        <div class="list">
					<a href="">TOP RATES</a>
					<a href="">MOST RECENT</a>
				</div>	

				<div class="list">
					<a href="">MOST VIEW</a>
					<a href="">MOST LIKE</a>
				</div>
			</div>
    </section>
  </div>
</template>

<script>
export default {
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
  font-weight: 500;
}
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.block1,
.block2,
.block3,
.block4 {
  width: 280px;
  height: 360px;
  background: #eed589;
  margin: 15px;
  transition: 0.3s ease;
}
.block1:hover,
.block2:hover,
.block3:hover,
.block4:hover {
  cursor: pointer;
  transform: scale(1.1);
}
.list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.list a{
	width: 35%;
	height: 400px;
	background: cornsilk;
	margin: 20px;
	text-align: center;
	padding-top: 180px;
}
</style>
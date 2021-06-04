<template>
  <div>
    <!-- navbar -->
    <nav>
      <div class="max-width">
        <div class="logo">
          <a href=""><span>M</span>HUB</a>
        </div>

        <ul class="menu">
          <li><a href="">HOME</a></li>
          <li><a href="">RATING</a></li>
          <li><router-link to="/watch">WATCH</router-link></li>
        </ul>

				<a href=""><div class="profile"></div></a>
      </div>
    </nav>
    <!-- home -->
    <section class="home">
      <div class="max-width"></div>
    </section>
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

    <!-- footer -->
    <footer>
      <div class="logo">
        <a href=""><img src="~@/assets/img/fb.png" /></a>
        <a href=""><img src="~@/assets/img/ig.png" /></a>
        <a href=""><img src="~@/assets/img/tw.png" /></a>
        <a href=""><img src="~@/assets/img/yo.png" /></a>
      </div>

      <div class="cr">
        <p>2021 - 2021 by Mhub.com, Inc.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
nav {
  background: #363636;
  width: 100%;
	padding: 15px 0;
}
nav .max-width{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
nav .logo a {
  font-weight: 500;
  font-size: 50px;
  color: #fec926;
}
nav .logo span{
	font-size: 90px;
}
nav .menu{
	margin-left: 500px /*ถ้า respon แล้วเอ๋อ เอาออก */
}
nav .menu li {
  list-style: none;
  display: inline-block;
}
nav .menu li a {
  color: #fec926;
	font-size: 25px;
	font-weight: 300;
	margin: 30px;
}
nav .profile {
  background: #fec926;
  width: 70px;
  height: 70px;
}
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
.list a {
  width: 35%;
  height: 400px;
  background: cornsilk;
  margin: 20px;
  text-align: center;
  padding-top: 180px;
}
footer {
  width: 100%;
  height: 150px;
  background: #fec926;
  display: block;
}
footer .logo,
footer .cr {
  display: flex;
  justify-content: center;
}
footer .logo img{
  width: 40px;
  margin: 15px;
  padding-top: 25px;
	transition: .3s ease;
}
footer .logo img:hover{
	transform: scale(1.1);
}
</style>
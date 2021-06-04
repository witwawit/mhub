<template>
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
</template>

<style scoped>
nav {
  background: #363636;
  width: 100%;
  padding: 15px 0;
}
nav .max-width {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav .logo a {
  font-weight: 500;
  font-size: 50px;
  color: #fec926;
}
nav .logo span {
  font-size: 90px;
}
nav .menu {
  margin-left: 500px; /*ถ้า respon แล้วเอ๋อ เอาออก */
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
nav .menu li a:hover {
  font-weight: 500;
}
nav .profile {
  background: #fec926;
  width: 70px;
  height: 70px;
}
@media (max-width: 550px) {
  nav {
    background: #fec926;
  }
  nav .logo a,
  nav .menu li a {
    color: #363636;
  }

}
</style>
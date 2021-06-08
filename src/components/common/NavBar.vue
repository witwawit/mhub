<template>
  <nav class="navbar navbar-expand-lg p-0">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><span>M</span>HUB</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >HOME</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <router-link
              class="nav-link dropdown-toggle"
              to="/rate"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              RATE
            </router-link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link class="dropdown-item" to="/rate"
                  >TOP RATES</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/rate"
                  >MOST RECENT</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/rate"
                  >MOST VIEW</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/rate"
                  >MOST LIKE</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
    <!-- <div class="max-width">
      <div class="logo">
        <a href=""><span>M</span>HUB</a>
      </div>

      <ul class="menu">
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/rate">RATING</router-link></li>
        <li><router-link to="/watch">WATCH</router-link></li>
      </ul>

      <a href=""><div class="profile"></div></a>
    </div> -->
  </nav>
</template>

<style scoped>
.container-fluid {
  background: #363636;
}
.navbar-brand span {
  font-size: 60px;
}
.navbar-brand {
  margin-left: 60px;
  color: #fec926;
  font-size: 40px;
}
.navbar-brand:hover {
  color: #fec926;
}
.nav-link {
  color: #fec926;
  margin: 20px;
}
.nav-link:hover,
.nav-link:focus{
  color: #fec926;
}
#navbarSupportedContent{
  margin-left: 40%;
}
@media (max-width: 550px) {
  .container-fluid{
    background: #fec926;
  }
  .navbar-brand {
    margin-left: 20px;
    color: #363636;
  }
  .navbar-brand:hover {
    color: #363636;
  }
  .nav-link:hover{
  color: #363636;
}
}
/* nav {
  background: #363636;
  width: 100%;
  padding: 15px 0;
}
nav .max-width {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav .logo a{
  font-weight: 500;
  font-size: 50px;
  color: #fec926;
}
nav .logo span {
  font-size: 90px;
}
nav .menu {
  margin-left: 500px; 
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

} */
</style>
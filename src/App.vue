<template>
  <h1 class="title">
    <router-link to="/min">min()</router-link> |
    <router-link to="/max">max()</router-link> |
    <router-link to="/clamp">clamp()</router-link>
  </h1>
  <router-view/>
</template>

<style lang="scss">
body {
  margin: 0;
  white-space: pre-wrap;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

p {
  font-size: 2rem;
}

h1 {
  font-size: 3rem;
  margin: 3rem 0;
}
</style>

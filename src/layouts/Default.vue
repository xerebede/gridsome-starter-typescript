<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link
          class="nav__link"
          to="/"
        >
          Home
        </g-link>
        <g-link
          class="nav__link"
          to="/about"
        >
          About
        </g-link>
      </nav>
    </header>
    <transition
      name="fade"
      appear
    >
      <main>
        <slot />
      </main>
    </transition>
  </div>
</template>

<script lang="ts">
  export default {};
</script>


<static-query>
  query {
    metaData {
      siteName
    }
  }
</static-query>

<style>
  .layout {
    max-width: 760px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    height: 80px;
  }

  .nav__link {
    margin-left: 20px;
  }


  .fade-enter-active {
    transition: opacity .5s;
  }

  .fade-enter {
    opacity: 0;
  }
</style>

<template>
  <Nuxt class="layout" />
</template>

<style lang="scss">
  html {
    height: 100%;
  }

  body {
    height: inherit;
    min-width: 320px;
    margin: 0;
  }

  #__nuxt {
    height: inherit;
    display: flex;
    flex-direction: column;
  }

  #__layout {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .layout {
    flex-grow: 1;
  }
</style>

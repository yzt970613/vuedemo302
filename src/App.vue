<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import {
  setPublicCommentDefaultOptions,
  setPublicCommentStoredData,
} from '@ktlib/public-comment-pc'

setPublicCommentDefaultOptions({
  appCode: 'yzttest1',
  userId: '9f76e863df4a4cb79da725c3a909988e',
  getToken() {
    return 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJncm91cCIsInVzZXJJZCI6IjAwYjlhZmM5NDA0MzQ0ODBhYTBmZDU5MmNmOWJkNzlmIiwidXNlck5hbWUiOiLmooHlhYjojaMiLCJsb2dpblR5cGUiOjEsImlhdCI6MTc0Mjc5Njg3NiwiZXhwIjo2NDA2MzIzODM5OX0.f0YED02i93VfDWReiU70XwhsWO7zZQCTct_iJe3meHM'
  },
})

setPublicCommentStoredData({
  taro: {
    origin: 'https://yongce-pro-test.keytop.cn/',
    appCode: 'yzttest1',
    userId: '92b9cc14ba134fc4a0fe74cbf4ef5af2',
    getToken() {
      return 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJncm91cCIsInVzZXJJZCI6IjAwYjlhZmM5NDA0MzQ0ODBhYTBmZDU5MmNmOWJkNzlmIiwidXNlck5hbWUiOiLmooHlhYjojaMiLCJsb2dpblR5cGUiOjEsImlhdCI6MTc1NzQxMTkzOCwiZXhwIjo2NDA2MzIzODM5OX0.AIJflivvVkFs0gZbtCViRaDFYGLgqYo_5PMWlsTeX3M'
    },
    uploadUrl: 'fileserver/manage/upload',
  },
})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

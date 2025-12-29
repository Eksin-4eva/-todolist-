<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="layout-container">
    <aside class="sidebar">
      <div class="logo">Vue3练习</div>
      <div class="nav-title">导航</div>
      
      <nav>
        <RouterLink to="/home">❄️主页❄️</RouterLink>
        <RouterLink to="/todo" class="active">❄️todoList❄️</RouterLink>
        <RouterLink to="/time" class="active">❄️时间❄️</RouterLink>

      </nav>
    </aside>

    <main class="content-area">
      <RouterView />
    </main>
  </div>
</template>

<style>
/* 全局样式重置 */
body { margin: 0; padding: 0; font-family: "Microsoft YaHei", sans-serif; background-color: #f5f5f5; }

.layout-container {
  display: flex; /* 让左右横向排列 */
  min-height: 100vh; /* 占满全屏高度 */
}

/* 左侧样式 */
.sidebar {
  width: 200px;
  background-color: #fff;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}

.logo { padding: 0 20px; font-weight: bold; font-size: 18px; margin-bottom: 20px; color: #666; }
.nav-title { padding: 0 20px; font-size: 14px; color: #999; margin-bottom: 10px; }

nav a {
  display: block;
  padding: 12px 20px;
  color: #333;
  text-decoration: none;
  font-size: 15px;
  transition: 0.2s;
}

nav a:hover, nav a.router-link-active {
  background-color: #f0f0f0;
  color: #42b983;
}

/* 右侧样式 */
.content-area {
  flex: 1; /* 占据剩余空间 */
  padding: 20px;
  background-color: white; /* 截图右侧是白底 */
}
</style>
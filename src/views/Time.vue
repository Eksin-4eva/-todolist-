<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const timeStr = ref('')
const dateStr = ref('')
let timer = null

// 更新时间的函数
const updateTime = () => {
  const now = new Date()
  
  // 1. 获取北京时间的日期部分
  dateStr.value = now.toLocaleDateString('zh-CN', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  })

  // 2. 获取北京时间的时间部分 (24小时制)
  timeStr.value = now.toLocaleTimeString('zh-CN', {
    timeZone: 'Asia/Shanghai',
    hour12: false, // 使用24小时制
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

// 组件挂载后：立即更新一次，然后开启定时器
onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})

// 组件卸载前：清除定时器，防止内存泄漏 (非常重要！)
onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="time-container">
    <div class="card">
      <div class="title">🇨🇳 当前北京时间</div>
      <div class="clock">{{ timeStr }}</div>
      <div class="date">{{ dateStr }}</div>
    </div>
  </div>
</template>

<style scoped>
.time-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%; /* 让卡片在右侧区域垂直居中 */
}

.card {
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  padding: 40px 60px;
  border-radius: 20px;
  color: white;
  text-align: center;
  box-shadow: 0 10px 30px rgba(110, 142, 251, 0.4);
  /* 简单的入场动画 */
  animation: float 3s ease-in-out infinite;
}

.title {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 10px;
  letter-spacing: 2px;
}

.clock {
  font-size: 5rem;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace; /* 等宽字体，防止数字跳动 */
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

.date {
  font-size: 1.5rem;
  margin-top: 10px;
  opacity: 0.9;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
</style>
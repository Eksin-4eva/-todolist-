<script setup>
import { ref, computed } from 'vue'

// 1. 数据
const newTodo = ref('')
const todos = ref([
  { id: 1, title: '洗澡', done: false },
  { id: 2, title: '睡觉', done: false },
  { id: 3, title: '吃饭', done: false }
])

// 2. 添加任务
function addTodo() {
  if (!newTodo.value.trim()) return
  todos.value.unshift({
    id: Date.now(),
    title: newTodo.value,
    done: false
  })
  newTodo.value = ''
}

// 3. 统计数据 (计算属性)
const total = computed(() => todos.value.length)
const doneCount = computed(() => todos.value.filter(t => t.done).length)

// 4. 清除已完成
function clearDone() {
  if(confirm('确定清除已完成任务吗？')) {
    todos.value = todos.value.filter(t => !t.done)
  }
}

// 5. 全选/反选逻辑
const isAllDone = computed({
  get() {
    return total.value > 0 && doneCount.value === total.value
  },
  set(val) {
    todos.value.forEach(todo => todo.done = val)
  }
})
</script>

<template>
  <div class="todo-container">
    <div class="header">
      <input 
        v-model="newTodo" 
        @keyup.enter="addTodo"
        type="text" 
        placeholder="请输入你的任务名称，按回车确认。"
      >
    </div>

    <ul class="todo-list">
      <li v-for="item in todos" :key="item.id">
        <label>
          <input type="checkbox" v-model="item.done">
          <span>{{ item.title }}</span>
        </label>
      </li>
    </ul>

    <div class="footer" v-if="todos.length > 0">
      <label class="check-all">
        <input type="checkbox" v-model="isAllDone">
        已完成 {{ doneCount }} / 全部 {{ total }}
      </label>
      <button class="clear-btn" @click="clearDone">清楚已完成任务</button>
    </div>
  </div>
</template>

<style scoped>
.todo-container {
  max-width: 800px;
  margin: 0 auto;
}

/* 输入框样式 */
.header input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  box-sizing: border-box; /* 防止padding撑大宽度 */
}
.header input:focus {
  border-color: #ccc;
  box-shadow: 0 0 4px rgba(0,0,0,0.1);
}

/* 列表样式 (模仿截图的粉色边框) */
.todo-list {
  list-style: none;
  padding: 0;
  margin: 20px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.todo-list li {
  padding: 10px 15px;
  border-bottom: 1px solid #ffdeeb; /* 截图里的粉色线条 */
  display: flex;
  align-items: center;
}
.todo-list li:last-child {
  border-bottom: none;
}
.todo-list li:hover {
  background-color: #fafafa;
}

label {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
}

input[type="checkbox"] {
  margin-right: 10px;
  width: 16px;
  height: 16px;
}

/* 底部样式 */
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.clear-btn {
  background-color: #da4f49; /* 截图里的红色按钮 */
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}
.clear-btn:hover {
  background-color: #bd362f;
}
</style>
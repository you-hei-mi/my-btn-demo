<template>
    <button class="my-button" @click="handleClick">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'MyButton',
    methods: {
      handleClick() {
        // 按钮点击事件处理逻辑
        console.log('Button clicked!');
      }
    }
  }
  </script>
  
  <style scoped>
  .my-button {
    padding: 8px 16px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
<script lang="ts" setup>
import {useHomeStore} from "@/stores/home-store.ts";
import {storeToRefs} from "pinia";

const store = useHomeStore()
const {name, age, blog, hobby} = storeToRefs(store)
const {add} = store
</script>

<template>
  <div>
    <!-- 插值表达式 -->
    <div>姓名：{{ name }}</div>
    <div>年龄：{{ age }}</div>
    <!-- v-bind 绑定属性 -->
    <a :href="blog" target="_blank">博客地址</a>
    <!-- v-model 双向数据绑定 -->
    <br>
    请输入姓名：<input v-model="name" type="text">
    <!-- v-for 循环 -->
    <br>
    爱好：
    <ul>
      <li v-for="item in hobby" :key="item">{{ item }}</li>
    </ul>
    <div>
      <!-- v-if 显示隐藏 -->
      <p v-if="age > 18">18岁以上</p>
      <p v-else>18岁以下</p>
      <!-- v-show 显示隐藏，不会删除标签 -->
      <p v-show="age > 18">18岁以上</p>
    </div>
    <!-- v-on 事件监听，可简写成 @ -->
    <button @click="age++">年龄+1</button>
    <button @click="add">年龄+1</button>
  </div>
</template>

<style scoped>
</style>

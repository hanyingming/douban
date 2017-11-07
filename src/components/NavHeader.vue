<template>
  <section id="nav-header">
    <el-container>
      <el-header style="height: 0.92rem;">
        <a href="/">
          <h1>豆瓣</h1>
        </a>
        <nav>
          <router-link style="color: #2384E8;" to="/film">电影</router-link>
          <router-link style="color: #9F7860;" to="">图书</router-link>
          <router-link style="color: #E4A813;" to="">广播</router-link>
          <router-link style="color: #2AB8CC;" to="">小组</router-link>
          <span class="search-icon"></span>
        </nav>
      </el-header>
    </el-container>
  </section>
</template>
<style>
  #nav-header {
    border-bottom: 1px solid #cccccc;
  }
  #nav-header header.el-header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  #nav-header h1 {
    margin: 0 0;
    color: #00b600;
    font-weight: bold;
    font-size: 0.44rem;
  }
  #nav-header nav {
    display: flex;
    font-size: 0.30rem;
    align-items: center;
  }
  #nav-header a {
    margin-right: 0.38rem;
  }
  #nav-header .search-icon {
    background: url('./../assets/search.png') no-repeat;
    background-size: cover;
    width: 0.48rem;
    height: 0.36rem;
    margin-top: 0.04rem;
  }
</style>
<script>
    export default {
      data(){
        return {
          msg: '',
          value1: 3
        }
      }
    }
</script>

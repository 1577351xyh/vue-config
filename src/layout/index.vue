<template>
  <div>
    <div>我是头部</div>
    <div class="app-wrapper">
      <sidebar class="sidebar-container" />
      <div class="main-container">
        <!--            <Breadcrumb></Breadcrumb>-->
        <router-view />
      </div>
    </div>
    <div>
      我是底部
    </div>
  </div>
</template>
<script>
//图标
import Sidebar from '../components/Sidebar'
//面包屑
// import Breadcrumb from "@/components/Breadcrumb";

export default {
  components: {
    Sidebar
  }
}
</script>
<style>
.app-wrapper {
  display: flex;
}
.sidebar-container{
  min-width: 200px;
}
</style>

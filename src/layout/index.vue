<template>
    <div class="app-wrapper">
        <sidebar class="sidebar-container" />
        <div class="main-container">
<!--            <Breadcrumb></Breadcrumb>-->
            <router-view />
        </div>
    </div>
</template>
<script>
    //图标
    import Sidebar from "../components/Sidebar";
    //面包屑
    // import Breadcrumb from "@/components/Breadcrumb";

    export default {
        components: {
            Sidebar,
        }
    };
</script>

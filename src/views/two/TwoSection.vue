<script setup lang= "ts">
</script>
<template>
    <div class="main-view">
        <div class="float-one">上面的标签 <span style="color: lightblue;">第一个</span>标签</div>
        <div class="float-two">
            <div style="background: blue; color: white;"> 第二个aaaa -- 第一个浮动 </div>
            <div class="test-sun">
                bbbbb -- a 的子标签
            </div>
        </div>
        <div class="float-three">第三个 - -下面的标签</div>

        <div class="float-four">
            第四个 --- 第二个浮动

        </div>
    </div>
</template>

<style scoped >
.main-view{
    min-width: 600px;
}
.float-two {
    background: red;
    width: 200px;
    height: 200px;
    /* 
        left \ right \ none \ inherit  
    */
    float: right;
   /* position: absolute;  */
}

.test-sun {
    background: white;
    width: 50%;
    float: right;
}

.float-one {
    background: green;
    width: 300px;
}

.float-three {
    background: orange;
    width: 400px;
    /* 
    static \ relative \ absolute \ fixed \ inherit 
   
    初始值:  static
    */

    position: static;
}

.float-four {
    background: #9e9e43;
    width: 450px;
    height: 200px;
    float: right;
}
</style>
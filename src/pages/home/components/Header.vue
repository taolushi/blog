<template>
    <div class="header">
        <div class="img-list-box">
            <ul class="img-list">
                <li class="img-item">
                    <img src="@/assets/images/home/1.jpg" alt="">
                </li>
                <li class="img-item">
                    <img src="@/assets/images/home/2.jpg" alt="">
                </li>
                <li class="img-item">
                    <img src="@/assets/images/home/3.jpg" alt="">
                </li>
                                <li class="img-item">
                    <img src="@/assets/images/home/4.jpg" alt="">
                </li>
            </ul>
            <ul class="img-list">
                <li class="img-item">
                    <img src="@/assets/images/home/1.jpg" alt="">
                </li>
                <li class="img-item">
                    <img src="@/assets/images/home/2.jpg" alt="">
                </li>
                <li class="img-item">
                    <img src="@/assets/images/home/3.jpg" alt="">
                </li>
                <li class="img-item">
                    <img src="@/assets/images/home/4.jpg" alt="">
                </li>
            </ul>
        </div>
        <div class="cover-box">

        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({

})
</script>
<style lang="scss" scoped>
@keyframes loop {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
}
@keyframes loop2 {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-200%);
    }
}
.header {
    width: 100vw;
    position: relative;
    .img-list-box {
        position: relative;
        display: flex;
        flex-flow: row nowrap;
        width: 100vw;
        height: 688px;
        left: 50%;
        margin-left: -50vw;
        overflow: hidden;
        .img-list {
            display: flex;
            flex-flow: row nowrap;
            width: calc(480px * 4);
            margin: 0;
            padding: 0;
            &:first-child {
                backface-visibility: hidden;
                will-change: transform;
                animation: loop 300s -150s linear infinite;
            }
            &:nth-child(2) {
                animation: loop2 300s linear infinite;
            }
            .img-item {
                position: relative;
                display: inline-block;
                width: 480rpx;
                text-align: center;
                img {
                    display: block;
                    width: 480px;
                    height: 688px;
                    object-fit: cover;
                }
            }
        }

    }  
    .cover-box {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba($color: #000000, $alpha: .3);
    }  
}
</style>
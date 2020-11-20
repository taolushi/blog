<template>
    <header>
        <div class="nav-content">
            <div class="logo"></div>
            <div class="right">

                <ul>
                    <li>ddd</li>
                    
                </ul>
                <div class="search-box">
                    <input class="search-input" type="text">
                </div>
                <div class="login-button" @click="login">
                    <span class="login-label">立即登录</span>
                </div>
            </div>

        </div>

    </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'globalHeader',
    methods: {
        login() {
            this.$router.push({name: 'login'});
        }   
    }

})
</script>
<style lang="scss" scoped>
header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: 1px solid #ebebeb;
    background-color: #fff;
    box-sizing: border-box;
    height: 64px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    z-index: 999;
    .nav-content {
        width: 1248px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .right {
            display: flex;
            flex-direction: row;
            align-items: center;
            .search-box {
                position: relative;
                .search-input {
                    box-sizing: border-box;
                    border: 1px solid #666;
                    border-radius: 16px;
                    height: 32px;
                    line-height: 32px;
                    padding: 0 16px;
                    width: 32px;
                    transition: width .3s;
                    &:hover {
                        width: 200px;
                    }
                    &:focus {
                        outline: none;
                    }
                    
                }
            }
            .login-button {
                padding: 9px 24px;
                box-sizing: border-box;
                background-color: #fd9e16;
                border-radius: 30px;
                display: flex;
                flex-direction: row;
                align-self: center;
                font-size: 14px;
                color: #fff;
                line-height: 22px;
                font-weight: bold;
                transition: all 1.5s;
                
                &:hover {
                    background-color: #ff6f0f;
                }
            }
        }
    }
}


</style>
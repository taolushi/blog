<template>
    <div class="login-box">
        <div class="cover-box"></div>
        <div class="login-form-box">
            <Shiba shiba="okaka" pop mood="excited"
        left-ear="up" right-ear="flat">
        <div class="login-form-content">

        </div>
        
        </Shiba>
        </div>
    </div>
    
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Shiba from './Shiba.vue'
export default defineComponent({
    components: {
        Shiba
    },
    setup() {
        return {

        }
    }
}) 
</script>
<style lang="scss" scoped>
.login-box {
    .cover-box {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba($color: #000000, $alpha: 0.3);
    }    
    .login-form-box {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        .login-form-content {
            height: 400px;
            width: 400px
        }
    }
}
</style>

<template>
    <div class="login-box" >
        <div class="login-form-box" @click.stop="flipBox">
            <Shiba shiba="okaka" pop mood="excited"
            left-ear="up" right-ear="flat"  >
                <div class="login-form-content"  > 
                    
                </div>
            
            </Shiba>
        </div>

    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Shiba from '@/components/Shiba.vue'
export default defineComponent({
    components: {
        Shiba
    },
    setup() {
        return {

        }
    },
    methods: {
        flipBox(e: { stopPropagation: () => void }) {
            e.stopPropagation()
            console.log('flip')
        }
    }
})
</script>
<style lang="scss" scoped>
.login-box {
    height: 100vh;
    width: 100vw;
    background: #000;
    overflow: hidden;
    position: relative;
    .login-form-box {
        position: absolute;
        left: 50%;
        top: 20%;
        transform: translateX(-50%);
    }
}

</style>
<template>
    <div class="layout-container">
        <global-header></global-header>
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'
import { defineComponent } from 'vue'
export default defineComponent({
    components: {
        GlobalHeader
    },
    setup() {
        return {

        }
    }
})
</script>
<style lang="scss" scoped>
.layout-container {
    padding-top: 64px;
}
</style>
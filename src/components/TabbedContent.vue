<template>
<div>
    <AnimatedSubNav :items="subNavItems" :initialActiveItem='initalActiveTab' v-on:tabbed='tabbed' />
    <transition name="fade" mode="out-in">
        <template v-for='(item, index) in subNavItems' class='tab-content'>
            <div class = 'tab-content' v-if='activeTab == index' :key='item.itemText'>
                <slot :name='item.itemText'>
                    <p :key='index'>Content for the {{ item.itemText }} tab</p>
                </slot>
            </div>
        </template>
    </transition>
</div>
</template>

<script>
import AnimatedSubNav from "./AnimatedSubNav.vue";
export default {
    name: 'TabbedContent',
    data() {
        return {
            activeTab: Number,
        }
    },
    methods: {
        tabbed: function (e) {
            this.activeTab = e
        }
    },

    props: {
        initalActiveTab: Number,
        subNavItems: Array
    },

    mounted: function () {
        this.activeTab = this.initalActiveTab
    },

    components: {
        AnimatedSubNav,
    }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .25s, transform 0.25s ease;
    will-change:opacity, transform;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
    transform:translateY(10px);
}
</style>

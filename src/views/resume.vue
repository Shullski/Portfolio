<template>
<div id="app">
        <router-link class = 'card' to = '/' >Back to main</router-link>
    <span @click  ='clicked'>Reusme</span>
</div>
</template>

<script>
import RecentFav from "./../components/RecentFav.vue";
import CTAButton from "./../components/CTAButton.vue";
import InputSwitch from "./../components/InputSwitch.vue";
import TabbedContent from "./../components/TabbedContent.vue";
import FeaturedCard from "./../components/FeaturedCard.vue";

export default {
    name: "app",
    data() {
        return {
            subNavItems: [
                {
                    itemText: 'Work',
                    color: '#7692FF'
                },
                {
                    itemText: 'Projects',
                    color: '#7692FF'
                },
                {
                    itemText: 'Pens',
                    color: '#2DE1FC'
                },
                {
                    itemText: 'Other',
                    color: '#2AFC98'
                }
            ]
        };
    },

    methods: {
        clicked: function() {
            console.log(this.$route);
        }
    },

    components: {
        RecentFav,
        CTAButton,
        InputSwitch,
        TabbedContent,
        FeaturedCard
    }
};
</script>

<style>
@import './../assets/variables.css';

#app {
    font-family: var(--font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 0;
}

h1,
h2 {
    color: #404040;
}

button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

.shadow-heading {
    position:relative;
}
.shadow-heading:after {
    content: attr(data-content);
    position:absolute;
    display:block;
    bottom:0;
    left:0.75em;
    font-size:2.8em;
    color:inherit;
    z-index:-1;
    opacity:0.075;
    line-height:100%;
}


* {
    box-sizing: border-box;
}

html {
    height: 100%;
}

body {
    margin: 0;
    padding: 0;
    height: 100%;
    background: var(--bg-color);
}

.tab-content {
    display: flex;
    flex-wrap: wrap;
}

.tab-content>* {
    margin: 1.5%;
    width: 22%;
}

.tab-content>*:nth-child(4n) {
    margin-right: 0;
}
</style>

<style scoped>
.cta-buttons>*:not(:last-child) {
    margin-right: 1em;
}

.header {
    display: flex;
    align-items: center;
    padding: 5em 0;
}

.header>div:first-child {
    margin-right: 4em;
}

.copy {
    text-align: left;
}

.copy h1 {
    letter-spacing: 0.05em;
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 800;
    margin-top: 0;
    margin-bottom: 0;
}

.copy h1 span {
    display: block;
    white-space: nowrap;
}

.copy h2 {
    margin: 0;
    font-weight: 400;
}

.copy p {
    font-weight: 200;
    color: #A7A7A7;
}

.recent-fav-container {
    display: flex;
}

.recent-fav {
    margin: 2em;
}

.recent-fav:first-child {
    margin-left: 0;
}

.night-mode-switch {
    display: block;
    margin-top: 1em;
}

.line-left {
    padding-left: 1em;
    position: relative;
}

.line-left:after {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    width: 1px;
    height: 100%;
    background: #A278FF;
}
</style>

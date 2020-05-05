<template>
    <div id="app">
        <transition name="fade" mode = 'out-in'>
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
        };
    },

    components: {

    }
};
</script>

<style>
@import './assets/variables.css';

#app {
    font-family: var(--font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgba(255,255,255,0.75);
    margin-top: 0;
}

h1,
h2 {
    color: white;
}

h1 {
    
    letter-spacing: 0.05em;
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 800;
    margin-top: 0;
    margin-bottom: 0;
}

h2 {
    margin: 0;
    font-weight: 400;
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


</style>

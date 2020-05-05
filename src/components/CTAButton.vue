<template>
    <router-link class = 'button' :class = 'variant' v-on:click = 'buttonClick' :to = "{path: '/resume', params: {id: 123} }">
        <span class ='text'>{{  text  }}</span>
    </router-link>
</template>

<script>
export default {
    name: 'CTAButton',
    data() { return {}},
    computed: {},
    methods:  {
        buttonClick:function() {
            document.documentElement.style.setProperty('--bg-color', 'var(--dark__bgColor--body)');
            document.documentElement.style.setProperty('--card-bg', 'var(--dark__card-bg');
        }
    },
    props: {
        text: String,
        variant: String,
        to: String
    }
}
</script>

<style scoped>
.button {
    position: relative;
    display:inline-flex;
    font-size:1.1em;
    font-weight:600;
    text-transform:uppercase;
    letter-spacing:0.05em;
    padding:0.3em 0.3em;
    overflow: hidden;
    transition: color 0.35s ease, box-shadow 0.35s cubic-bezier(0.4, 0.0, 0.2, 1);
    transform:translate3d(0, 0, 0);
    will-change:transform, box-shadow;
    text-decoration:none;
}

.button.primary {
    color:white;
    background: var(--accent-gradient);
}
.button.secondary {
    color:#A278FF;
    background: white;
}

.text {
    display:block;
    position:relative;
    padding:0.3em;
    will-change:transform;
}
.text:after {
    z-index:-1;
    display:block;
    content:'';
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;
    background:white;
    will-change:transform;
    transform: translateZ(0) scale(1.0,0);
    transition: transform 0.35s cubic-bezier(0.4, 0.0, 0.2, 1);;
    transform-origin: center top;
}
.button.primary .text:after {
    background:white;
}
.button.secondary .text:after {
    background: var(--accent-gradient);
}


.button:hover {
    box-shadow:0 11px 14px rgba(11, 190, 30, 0.1);
}
.button.primary:hover {
    color: #A278FF;
}
.button.secondary:hover {
    color: white;
}

.button:hover .text:after {
    transform:translateZ(0) scale(1.0, 1.0);
}
.button:active {
    transform:scale(0.99);
    box-shadow:0 9px 12px rgba(11, 115, 68, 0.1);
    transition:box-shadow 0s;
}
</style>

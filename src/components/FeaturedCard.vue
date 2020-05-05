<template>
<router-link class = 'card' :to='item.path' >
<!-- <button class = 'card' @click = 'clickHandler($event)'> -->
    <div class='image' :style="{ background: 'url('+ item.image +') center center / cover no-repeat'}"></div>
    <section class='content'>
        <h3>
            <svg v-if = 'item.favorite' viewBox="0 0 24 24">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#A278FF;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#71D8FF;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <path fill="url(#grad1)" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
            </svg>
            {{ item.name }}
        </h3>
        <span class = 'description'>{{ item.description }}</span>
        <div v-if='item.tags' class='tags'>
            <span v-for='(tag, index) in item.tags' :key='index'>{{ tag }}</span>
        </div>
    </section>
</router-link>
</template>

<script>
export default {
    name: 'FeaturedCard',
    methods: {
        clickHandler(e) {
            console.log(e);

        }
    },
    props: {
        item: Object
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items:stretch;
    text-align:left;
    box-shadow: 0 2px 8px rgba(0, 0,0,0.2), 0 0 1px rgba(0,0,0,0.5);
    cursor: pointer;
    will-change:transform, box-shadow;
    transition: all 0.25s cubic-bezier(.4,0,.2,1.5);
    text-decoration:none;
    color:unset;
    background:var(--card-bg);
    border:1px solid #070708;
}

.card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 20px rgba(0,0,0,0.45), 0 0 1px rgba(0,0,0,0.6);
}

.card:active {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.4), 0 0 1px rgba(0,0,0,0.6);
}


.image {
    position:relative;
    height: 125px;
    border-bottom: 1px solid #323234;
    overflow:hidden;
}

.card svg {
    height:20px;
    width:20px;
}

.image:after {
    content: '';
    display:block;
    position:absolute;
    height:100%;
    width:200%;
    bottom:55%;
    left:0;
    background: linear-gradient(to top, rgba(255,255,255,0.04),rgba(255,255,255,0.00), rgba(255,255,255,0.0));
    transform:rotate(15deg);
    transition: transform 0.25s cubic-bezier(.4,0,.2,1.5);
    will-change:transform;
}

.card:hover .image:after {
    transform:rotate(15deg) translateY(8px);
}

.card:active .image:after {
    transform:rotate(15deg) translateY(5px);
}

.content {
    padding: 1em;
    display: flex;
    flex-direction: column;
    flex: 1;
}

.content h3 {
    margin: 0;
    color:white;
}

.card:hover h3 {
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.content .description {
    margin: 0;
    margin-bottom: 1em;
    font-weight: 400;
    flex: 1;
    color: #7b7b7b;
}


.tags {
    display: flex;
    flex-wrap:wrap;
}

.tags span {
    font-size: 0.9em;
    color: #A278FF;
    opacity: 0.7;
    display: block;
    font-weight: 600;
    padding: 0.2em 0.4em;
    border: 2px solid #A278FF;
    transition: opacity 0.25s ease;
    will-change:opacity;
    margin-bottom:0.5em;
}

.card:hover .tags span {
    opacity: 1;
}

/* .tags span:hover {
    color: white;
    background: var(--accent-gradient);
} */

.tags span:not(:last-child) {
    margin-right: 0.5em;
}




</style>

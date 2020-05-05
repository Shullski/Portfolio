<template>
<router-link class = 'card' :to="'/item/' +  title" >
 
    <div class='image'></div>
    <section class='content'>
        <h3>{{ title }}</h3>
        <span class = 'subtitle'>{{ subTitle }}</span>
        <div v-if='tags' class='tags'>
            <span v-for='(tag, index) in tags' :key='index'>{{ tag }}</span>
        </div>
    </section>
</router-link>
</template>

<script>
export default {
    name: 'FeaturedCard',
    props: {
        title: String,
        subTitle: String,
        link: String,
        tags: Array
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.card {
    display: flex;
    flex-direction: column;
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
    background: url('./../assets/portfolio.png') center center no-repeat;
    background-size: cover;
    height: 125px;
    border-bottom: 1px solid #323234;
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

.content .subtitle {
    margin: 0;
    margin-bottom: 1em;
    font-weight: 400;
    flex: 1;
    color: #7b7b7b;
}


.tags {
    display: flex;
}

.tags span {
    font-size: 0.9em;
    color: #A278FF;
    opacity: 0.8;
    display: block;
    font-weight: 600;
    padding: 0.2em 0.4em;
    border: 2px solid #A278FF;
    transition: opacity 0.25s ease;
    will-change:opacity;
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

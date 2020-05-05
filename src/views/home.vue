<template>
<div id="app">
    <div class='width-container'>
        <InputSwitch class='night-mode-switch' :start=false text='Night Mode' _id='nightModeSwitch' />

        <header class='header'>
            <div class='copy'>
                <h1>Mark Shull</h1>
                <h2>Front-End Web Developer</h2>
                <p class='line-left'>Ipsum Blaster sullust bantha sitrep R2-D2, cantina carbonite C-3PO protocol droid lando river. River bothan boomer frak tatooine. Frack vader light saber skywalker naboo firefly fodder C-3PO dalek.</p>
                <div class='cta-buttons'>
                    <CTAButton text='Contact' variant='primary' to = '/contact' />
                    <CTAButton text='Resume' variant='secondary' to = '/resume' />
                </div>
            </div>

            <div>
                <h2 class = 'shadow-heading' data-content = 'Recent Favs'>Recent Favs</h2>
                <section class='recent-fav-container'>
                    <RecentFav heading='Downdown Menu' preHeading='Fun and interactive' tag='Vue' class='recent-fav' />
                    <RecentFav heading='Downdown Menu' preHeading='Fun and interactive' tag='Vue' class='recent-fav' />
                    <RecentFav heading='Downdown Menu' preHeading='Fun and interactive' tag='Vue' class='recent-fav' />
                </section>
            </div>
        </header>

        <TabbedContent :subNavItems='subNavItems' :initalActiveTab='0'>

            <template slot='Work'>
                <FeaturedCard title='Animated Navigation' subTitle='A little animated navigation marker' :tags="['CSS', 'Vanilla JS']" />
                <FeaturedCard title='Animated Accordion' subTitle='A lil description' :tags="['CSS', 'Vanilla JS']" />
                <FeaturedCard title='Animated Accordion' subTitle='A lil description' :tags="['CSS', 'Vanilla JS']" />
            </template>

            <template slot='Projects'>
                <FeaturedCard title='New Portfolio' subTitle='Hey, wait a second.' :tags="['Vue', 'CSS']" />
                <FeaturedCard title='Social Network App Design' subTitle="Inspired by Google's newest Material Design iteration" :tags="['CSS', 'Vanilla JS']" />
                <FeaturedCard title='Ominous Weather Dashboard' subTitle='Art deco inspired dashboard concept' :tags="['CSS', 'Vanilla JS']" />
            </template>

            <template slot='Pens'>
                <FeaturedCard title='Ominous Weather Dashboard' subTitle='Art deco inspired dashboard concept' :tags="['CSS', 'Vanilla JS']" />
                <FeaturedCard title='Animated Navigation' subTitle='A little animated navigation marker' :tags="['CSS', 'Vanilla JS']" />
                <FeaturedCard title='Animated Accordion' subTitle='A lil description' :tags="['CSS', 'Vanilla JS']" />
                <FeaturedCard title='Animated Accordion' subTitle='A lil description' :tags="['CSS', 'Vanilla JS']" />
            </template>

            <template slot='Other'>
                <FeaturedCard title='Ominous Weather Dashboard' subTitle='Art deco inspired dashboard concept' :tags="['CSS', 'Vanilla JS']" />
                <FeaturedCard title='Animated Navigation' subTitle='A little animated navigation marker' :tags="['CSS', 'Vanilla JS']" />
                <FeaturedCard title='Animated Accordion' subTitle='A lil description' :tags="['CSS', 'Vanilla JS']" />
                <FeaturedCard title='Animated Accordion' subTitle='A lil description' :tags="['CSS', 'Vanilla JS']" />
            </template>

        </TabbedContent>

    </div>
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
    left:0;
    font-size:2.8em;
    color:inherit;
    z-index:-1;
    opacity:0.075;
    line-height:100%;
}

.width-container {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
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
    font-weight: 400;
    color: rgba(255,255,255,0.7);
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
    width: 0.2em;
    height: 100%;
    background: #A278FF;
}
</style>

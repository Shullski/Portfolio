<template>
<div class = 'container'>
    <header class='header'>
        
        <div class='copy'>
            <h1>Mark Shull</h1>
            <h2>Front-End Designer/Dev</h2>
            <p class='line-left'>Ipsum Blaster sullust bantha sitrep R2-D2, cantina carbonite C-3PO protocol droid lando river. River bothan boomer frak tatooine. Frack vader light saber skywalker naboo firefly fodder C-3PO dalek.</p>
            <div class='cta-buttons'>
                <CTAButton text='Contact' variant='primary' to = '/contact' />
                <CTAButton text='Resume' variant='secondary' to = '/resume' />
            </div>
        </div>

        <div>
            <h2 class = 'shadow-heading' data-content = 'Recent Favs'>
                <svg viewBox="0 0 24 24">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:#A278FF;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#71D8FF;stop-opacity:1" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#grad1)" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                </svg>
                <span>Recent Favs</span>
            </h2>
            <section class='recent-fav-container'>
                <RecentFav 
                    heading='Downdown Menu' 
                    preHeading='Fun and interactive' 
                    tag='Vue' 
                    class='recent-fav' 
                />
                <RecentFav 
                    heading='Downdown Menu' 
                    preHeading='Fun and interactive' 
                    tag='Vue' 
                    class='recent-fav' 
                />
                <RecentFav 
                    heading='Downdown Menu' 
                    preHeading='Fun and interactive' 
                    tag='Vue' 
                    class='recent-fav' 
                />
            </section>
        </div>
    </header>

    <TabbedContent :subNavItems='subNavItems' :initalActiveTab='0'>

        <template slot='Work'>
            
            <FeaturedCard 
                v-for = '(item, index) in portfolioItems.work' 
                :key = 'index' 
                :item = 'item'
            />
        </template>
        

        <template slot='Projects'>
            <FeaturedCard 
                v-for = '(item, index) in portfolioItems.projects' 
                :key = 'index' 
                :item = 'item'
            />
            <!-- <FeaturedCard title='New Portfolio' subTitle='Hey, wait a second.' :tags="['Vue', 'CSS']" />
            <FeaturedCard title='Social Network App Design' subTitle="Inspired by Google's newest Material Design iteration" :tags="['CSS', 'Vanilla JS']" />
            <FeaturedCard title='Ominous Weather Dashboard' subTitle='Art deco inspired dashboard concept' :tags="['CSS', 'Vanilla JS']" /> -->
        </template>
        <template slot='Demos'>
            <FeaturedCard 
                v-for = '(item, index) in portfolioItems.demos' 
                :key = 'index' 
                :item = 'item'
            />
        </template>

    </TabbedContent>
</div>
</template>

<script>
import RecentFav from "./../components/RecentFav.vue";
import CTAButton from "./../components/CTAButton.vue";
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
                    itemText: 'Demos',
                    color: '#2DE1FC'
                },

            ],

            portfolioItems: { 

                work: [
                    {
                        name: 'Ditto Admin Portal',
                        description: "Work I've done on the Ditto Admin Portal for Squirrels.",
                        image: require('@/assets/ominous.png'),
                        tags: ['Vue', 'Vuex', 'TypeScript', 'Backbone' , 'Node'],
                        path: ''
                    },
                    {
                        name: 'Squirrels Marketing Site',
                        description: "Work & improvements to the Squirrels marketing site.",
                        image: require('@/assets/sqDark.png'),
                        tags: ['Vue'],
                        path: ''
                    }
                ],

                projects: [
                    {
                        name: 'New Portfolio',
                        description: 'This is a description.',
                        image: require('@/assets/portfolio.png'),
                        tags: ['Vue', 'Design'],
                        easterEgg: true,
                        path: '/new-portfolio'
                    },

                    {
                        name: 'Ominous Weather Dashboard',
                        description: 'Weather dashboard & branding concept. Art deco inspired.',
                        image: require('@/assets/ominous.png'),
                        tags: ['Vanilla JS', 'Design', 'CSS'],
                        favorite: true,
                        path: '/ominous-weather'
                    },

                    {
                        name: 'Twitch Livestream Overlay',
                        description: 'Twitch Stream overlay using Adobe XD, AfterEffects, and Streamlabs OBS.',
                        image: require('@/assets/animatedAccordian.png'),
                        tags: ['Vanilla JS', 'CSS'],
                        path: '/twitch-overlay'
                    },
                    
                    {
                        name: 'Social Media App Design',
                        description: 'This is a description.',
                        image: require('@/assets/portfolio.png'),
                        tags: ['Design', 'UX', 'Adobe XD'],
                        favorite: true,
                        path: '/social-media-app'
                    },

                    {
                        name: 'Exercise Tools',
                        description: 'Various calculators helpful for exercise & weightlifting.',
                        image: require('@/assets/exerciseTools.png'),
                        tags: ['Design', 'CSS'],
                        path: '/exercise-tools'
                    },

                    {
                        name: 'Game Finder',
                        description: 'A tool to help discover new video games, stylized as a retro arcade machine.',
                        image: require('@/assets/gameFinder.png'),
                        tags: ['Design', 'CSS'],
                        path: '/game-finder'
                    },
                ],

                demos: [
                    
                    {
                        name: 'Admin Dashboard Concept',
                        description: 'An admin dashboard concept inspired by the UX of Slack, Stream, Discord, and others.',
                        image: require('@/assets/dashboard.png'),
                        paragraphs: [
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        ],
                        tags: ['Vue', 'Product Design'],
                        favorite: true,

                        path: '/admin-dashboard',
                    },

                    {
                        name: 'Animated Nav Marker',
                        description: "Hey, stop animating stuff's 'position'.",
                        image: require('@/assets/animatedNav.png'),
                        tags: ['Vanilla JS'],
                        path: '/animated-nav-marker'
                    },

                    {
                        name: 'Animated Accordian',
                        description: 'A little accordian interaction that inspired an official accoridan component at Squirrels.',
                        image: require('@/assets/animatedAccordian.png'),
                        tags: ['Vanilla JS', 'CSS'],
                        path: '/animated-accordian'
                    },

                    {
                        name: 'Dynamic Dropdown Overflow Shadow',
                        description: 'A dropdown with dynamic shadows to convery scrollable content.',
                        image: require('@/assets/dropdown.png'),
                        tags: ['Vanilla JS', 'CSS'],
                        path: '/dropdown-shadow'
                    }
                ],


            }
        };
    },

    components: {
        RecentFav,
        CTAButton,
        TabbedContent,
        FeaturedCard
    }
};
</script>

<style scoped>
@import './../assets/variables.css';

.container {
    max-width:1200px;
    width:90%;
    margin:0 auto;
}

.shadow-heading {
    position:relative;
}
.shadow-heading svg {
    height:40px;
    width:40px;
    margin-right:0.5em;
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



.copy h1 span {
    display: block;
    white-space: nowrap;
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
    width: 1px;
    height: 100%;
    background: #A278FF;
}
</style>

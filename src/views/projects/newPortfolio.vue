<template>
<div class = 'container'>
    <section class = 'project-showcase'>
        <div class = 'project-showcase__content' :style="{ background: 'url('+ item.image +') center center / cover no-repeat'}">
            <router-link class = 'button--back' to = '/' >
                <svg viewBox="0 0 24 24">
                    <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
                </svg>
                <span>Back</span>
            </router-link>

            <div class = 'project-showcase__info'>
                <div>
                    <h1>{{item.name}}</h1>
                    <h2>{{item.description}}</h2>
                </div>
                <button>
                    <span>Info</span>
                    <svg viewBox="0 0 24 24">
                        <path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" />
                    </svg>
                </button>
            </div>
        </div>
    </section>
    <section class = 'project-info'>
        <h2>Info</h2>
        <template v-if = 'item.paragraphs'>
            <p v-for = '(para, index) in item.paragraphs' :key = 'index'>{{ para }}</p>
        </template>
    </section>
    
</div>
</template>

<script>

export default {
    name: "Project",
    data() {
        return {
            item: { 
                name: 'Admin Dashboard Concept',
                description: 'Twitch Stream overlay using Adobe XD, AfterEffects, and Streamlabs OBS.',
                image: require('@/assets/portfolio.png'),
                paragraphs: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                ],
                tags: ['Vue', 'Product Design'],
                favorite: true,
            }
        };
    },
};
</script>

<style scoped>
@import './../../assets/variables.css';

.project-showcase {
    height:100vh;
    width:100%;
    display:flex;
    align-items:center;
    justify-content: center;
    padding:5em;

    flex-direction: column;
}
.project-showcase__content {
    position:relative;
    display:flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    flex:1;
    padding:2em;
    width:100%;
    border:4px solid #323234;
    box-shadow: 0 20px 22px rgba(0,0,0,0.15);
    overflow:hidden;
    z-index:1;
}

.project-showcase__info {
    display:flex;
    align-items:stretch;
    box-shadow: 0 7px 10px rgba(0,0,0,0.2);
}


.project-showcase__info button,
.project-showcase__info div{
    background:var(--card-bg);
    padding:1em;
    color:white;
    border:1px solid #323234;
}

.project-showcase__info button {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-left:none;
    padding: 0 2em;
}
.project-showcase__info button  span {
    font-weight:600;
    color:rgba(255,255,255,0.75);
    text-transform:uppercase;
    transition: color 0.25s ease,;
}
.project-showcase__info button svg {
    fill:rgba(255,255,255,0.75);
    height:30px;
    width:30px;
    transition: fill 0.25s ease, transform 0.25s ease;;
    will-change:color, transform;
}
.project-showcase__info button:hover svg {
    fill:white;
    transform:translateY(2px);
} 
.project-showcase__info button:hover span {
    color:white;
} 

.project-info {
    max-width:1200px;
    width: 90%;
    margin: 0 auto;
}
.project-showcase__content:after {
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
    z-index:1;
    pointer-events:none;
}

.project-showcase__content:before {
    content: '';
    display:block;
    position:absolute;
    height:100%;
    width:100%;
    bottom:0;
    left:0;
    background: linear-gradient(to top right, rgba(0,0,0,0.4), rgba(0,0,0,0.0));
    transition: transform 0.25s cubic-bezier(.4,0,.2,1.5);
    will-change:transform;z-index:-1;
    pointer-events:none;
}


.button--back {
    background:var(--card-bg);
    color:white;
    padding:0.75em;
    color:white;
    font-weight:600;
    display:inline-flex;
    align-items:center;
    text-decoration:none;
    text-transform:uppercase;
    box-shadow: 0 7px 10px rgba(0,0,0,0.2);
}
.button--back:hover {
    background:var(--card-bg);
    transform:translateY(-1px);
}

.button--back svg{ 
    height:16px;
    width:16px;
    margin-right:0.5em;
    fill:white;
}


</style>

<template>
<a class = 'card'>
    <span class = 'tag'>{{ tag }}</span>
    <span class = 'pre-head'>{{ preHeading }}</span>
    <h3>{{ heading }}</h3>
    <svg xmlns="http://www.w3.org/2000/svg"  height="10" viewBox="0 0 16.707 7.414">
        <g id="Group_24" data-name="Group 24" transform="translate(-1103.5 -536.793)">
            <line id="Line_2" data-name="Line 2" x2="15" transform="translate(1104 540.5)" fill="none"  stroke-linecap="round" stroke-width="1"/>
            <line id="Line_3" data-name="Line 3" x2="3" y2="3" transform="translate(1116.5 537.5)" fill="none"  stroke-linecap="round" stroke-width="1"/>
            <line id="Line_4" data-name="Line 4" y1="3" x2="3" transform="translate(1116.5 540.5)" fill="none"  stroke-linecap="round" stroke-width="1"/>
        </g>
    </svg>
</a>
</template>

<script>
export default {
  name: 'RecentFav',
  props: {
    tag: String,
    preHeading: String,
    heading: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
    display:inline-flex;
    padding:1em;
    padding-top:0;
    padding-left:0;
    text-align:left;
    background:var(--card-bg);
    box-shadow: 0 20px 22px rgba(0,0,0,0.04);
    flex-direction: column;
    align-items: flex-start;
    position:relative;
    cursor:pointer;
    font-size:0.8em;
    border:1px solid #070708;
}

.card svg {
    stroke: #71D8FF;
}
.tag {
    background: var(--accent-gradient);
    display:inline-block;
    box-shadow: 0 10px 12px rgba(0,70,20,0.08);
    margin-left:20px;
    color:white;
    font-weight:600;
    font-size:0.9em;
    padding:0.3em;
    transform:translateY(-25%);
}
.pre-head {
    margin-left:20px;
    font-weight:400;
    color:rgba(255,255,255,0.7);
    font-size:01em;
}
h3 {
    margin:0;
    z-index:0;
    position:relative;
    padding:0 20px;
    transition: text-shadow 0.25s ease,  color 0.25s ease;
    will-change:text-shadow, color;
    color:white;
    font-weight:600;
    white-space:nowrap;
    font-size:1.25em;
}

h3:after {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    background: var(--accent-gradient);
    height: 70%;
    width: 92%;
    top: 0%;
    left: 0;
    transform-origin:right;
    will-change:transform;
    transition: 0.2s cubic-bezier(0.0, 0.0, 0.2, 1);
    transform: translate(0, 100%) scaleX(0.91) scaleY(0.1);
}


.card:hover h3 {
    color:white;
    text-shadow:0 3px 5px rgba(0,0,0,0.35), 0 0 10px #323234;
}
.card:hover h3:after {
    transform: none
}
svg {
    position: absolute;
    right: 20px;
    top: 30px;
    opacity:0;
    transform:translateX(-5px);
    transition: opacity 0.25s ease,  transform  0.25s ease;
    will-change:transform, opacity;
}
.card:hover svg {
    opacity:1;
    transform:translateX(0);
}
.card:active {
    background:rgb(0,0,0);
}
.card:active svg {
    transform:translateX(2px);
}



</style>

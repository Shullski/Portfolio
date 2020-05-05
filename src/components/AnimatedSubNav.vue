<template>
<section class = 'nav' id = 'elastic-nav'>
	<template>
	<div 
		v-for="(item, index) in items" 
		:key = 'index' 
        v-on:click = 'navItemClickHandler($event, index)'
		class = 'item' 
		:class = '{ active : activeItem == index }'
        :ref = "`nav${index}`"
		:data-color = 'item.color'>
		<span>{{ item.itemText }}</span>
	</div>
	</template>
    <span class = 'marker' v-bind:style = 'navMarkerStyle'></span>
</section>
</template>

<script>
export default {
    name: 'AnimatedSubNav',
    data() { return {
        // we'll initialize this when the DOM actualy loads
        activeItem: Number
    }},

    computed: {
        navMarkerStyle: function(){
            let theitem = this.activeItem;
            let toggledNav = this.$refs[`nav${theitem}`] ? this.$refs[`nav${theitem}`][0] : null;
            return toggledNav ? 
                {
                    transform: `translateX(${toggledNav.offsetLeft/this.$el.offsetWidth * 100}%)` + 
                                        `scaleX(${toggledNav.offsetWidth/this.$el.offsetWidth})`,
                }  :  { display: 'none' };
        }
    },

    methods: {
        navItemClickHandler: function(event, a) {
            this.activeItem = a;
            this.$emit('tabbed', this.activeItem);
        }
    },

  mounted: function(){
      //Initialize the active item when the vue loads
      this.activeItem = this.initialActiveItem;
  },
  
  props: {
	items: Array,
    initialActiveItem: Number
  }
}
</script>


<style scoped>
.nav {
    display: inline-flex;
    position:relative;
    font-size: 1.1em;
    font-weight:200;
    color:#7b7b7b;
}

.marker {
    position:absolute;
    left:0;
    bottom:0;
    height:5px;
    width:100%;
    background: var(--accent-gradient);
    transform-origin:left;
    will-change:transform;
    transition: transform 0.75s cubic-bezier(.55,0,.1,1),
    background-color 0.65s 0.1s ease, box-shadow 0.65s 0.1s ease;
    z-index:-1;
}

.marker:after {
    content:'';
    display:block;
    position:absolute;
    z-index:1;
    left:0;
    bottom:calc(100% - 1px);
    width:100%;
    height:10px;
    background: var(--accent-gradient);
    opacity:0.6;
}
.marker:before {
    content:'';
    display:block;
    position:absolute;
    z-index:2;
    left:0;
    bottom:calc(100% - 1px);
    width:100%;
    height:10px;
    background: linear-gradient(to top, transparent,rgba(14, 14, 16, 0.8),rgba(14, 14, 16, 1));
}

.item {
    position:relative;
    padding:0.5em;
    cursor:pointer;
    font-weight:600;
    text-transform:lowercase;
    letter-spacing:0.07em;
    font-size:1.1em;
    color:rgba(255,255,255,0.6);
    user-select:none;
    /* transition: background-color 0.35s ease, color 0.75s; */
}
.item:after {
    content:'';
    display:block;
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:5px;
    background:rgba(255,255,255,0.25);
    pointer-events:none;
    opacity:0;
    transform:translateY(12px);
    transition: opacity 0, transform 0s;
    will-change: transform, opacity;
}
.item:hover:after {
    opacity:0.5;
    transform:translateY(0);
    transition: opacity 0s, transform 0s;
}
.item:hover:after {
    opacity:0.5;
    transform:translateY(0);
    transition: opacity 0s, transform 0s;
}
.item.active:after {
    opacity:0;
    transform:translateY(12px);
    transition: opacity 0.35s cubic-bezier(0.4, 0.0, 1, 1),  transform 0.35s cubic-bezier(0.4, 0.0, 1, 1);
}

.item span {
    pointer-events:none;
}
.item:hover {
    background:rgba(255,255,255,0.025);
    color:rgba(255,255,255,0.8);
  }
.item:active {
    background:rgba(255,255,255,0.1);
    color:rgba(255,255,255,0.9);
  }
  .item.active {
    color: #49ca90;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
.item:not(:first-child) {
    margin-left:1.25em;
}

</style>

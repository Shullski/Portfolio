<template>
<nav class = 'nav'>
    <template>
        <a class = 'item' v-for="item in items" :key = 'item.id' :href = 'item.link'>{{ item.text }}</a>
    </template>
</nav>
</template>

<script>
export default {
  name: 'TopNav',
  props: {
    items: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.nav {
    display:flex;
    align-items:center;
    justify-content: flex-end;
    padding:0.25em;
    box-shadow: 0 3px 7px rgba(0,0,0,0.06);
}

.item {
    padding:0.5em 1.25em;
    text-decoration:none;
    color:#7b7b7b;
}

.item:hover {
    color:#404040;
}

</style>

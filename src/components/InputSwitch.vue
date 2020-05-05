<template>
<div class='switch-container'>
    <input v-model='checked' class='input' :value='value' type='checkbox' :id='_id'>
    <label class='label' :for='_id'>
        <div class='switch'></div>
        <span class='text'>{{ text  }}</span>
    </label>
</div>
</template>

<script>
export default {
    name: 'InputSwitch',
    data() {
        return {
            checked: this.start
        }
    },
    props: {
        value: String,
        start: Boolean,
        text: String,
        _id: String
    }
}
</script>

<style scoped>
.switch-container {
    display: inline-block;
}

.input {
    display: none;
}

.label {
    display: inline-flex;
    padding: 0.5em;
    align-items: center;
    cursor: pointer;
}

.switch {
    height: 15px;
    width: 30px;
    padding: 0.2em;
    border: 3px solid rgba(0, 0, 0, 0.15);
    position: relative;
    box-sizing: content-box;
    margin-right: 0.5em;
    background: white;
}

.text {
    color: rgba(0, 0, 0, 0.15);
    font-weight: 600;
    text-transform: uppercase;
    user-select: none;
}

.label:hover .text {
    color: rgba(0, 0, 0, 0.2);
}

.label:hover .switch {
    border-color: rgba(0, 0, 0, 0.2);
}

.switch:after {
    display: flex;
    content: '';
    position: relative;
    ;
    flex: 1;
    height: 100%;
    width: 50%;
    transition: transform 0.35s cubic-bezier(0.4, 0.0, 0.2, 1.5);
    will-change: transform;
    background: var(--accent-gradient);
}

.label:active .switch:after {}

/* checked styles */

.input:checked+.label .switch:after {
    transform: translateX(100%);
}
</style>

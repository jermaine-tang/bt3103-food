<template>
    <div>
        <button v-on:click="decrement()">-</button> <span id="count">{{ counter }}</span> <button v-on:click="increment()">+</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increment: function() {
            if(this.counter<10) {
                this.counter++
            } else {
                alert("You cannot buy more than 10 items.")
            }
            this.$emit('counter', this.item, this.counter)
        },
        decrement: function() {
            if(this.counter>0) {
                this.counter--
            }
            this.$emit('counter', this.item, this.counter)
        }
    },
    props: ['item']
}
</script>

<style scoped>
button {
    background-color: pink;
    font-size: 18px;
}

#count {
    font-size: 18px;
}
</style>
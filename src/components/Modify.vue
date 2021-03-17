<template>
    <div>
        <ul>
            <li v-for= "(qty, named, index) in this.datapacket" :key="index">
                <span>{{ named }}: {{ qty }} </span>
                <br>
                <input placeholder="0" type="number" min="0" v-bind:id="named" v-bind:value="0">
                <br><br>
            </li>
            
        </ul>
        <button v-on:click="updateOrder()">Update Order</button>
    </div>
</template>

<script>
import database from '../firebase.js'

export default {
   props: ['value'],
    data() {
        return {
            datapacket: {},
            copy: {},
        }
    },
    methods: {
        fetchItems: function() {
            database.collection('orders').doc(this.$route.query.id).get().then(snapshot => {
                const toadd = snapshot.data();
                this.datapacket = toadd
                })     
            },
        
        updateOrder: function() {
            for (var copyKey in this.datapacket) {
                var x=document.getElementById(copyKey).value;
                this.copy[copyKey] = x;
            }
            
            database.collection('orders').doc(this.$route.query.id).set(this.copy).then(
                this.$router.push({path: "/orders"})
            ) 
        }
    },

    created:function() {
        this.fetchItems()
    },
    watch: {
        "$route": "fetchItems"
    }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
button {
  width: 100px;
  height: 30px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}
</style>

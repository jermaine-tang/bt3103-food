<template>
    <div>
        <ul>
            Menu:
            <br>
            <li v-for="i in itemsSel" :key="i[0]">
            {{ i[0] }} x {{ i[1] }}
            </li>
            <br>
            <button v-on:click.prevent="findTotal()">Calculate Total</button>
            <p v-show="calculated">Subtotal: ${{ this.subtotal }}<br>Grand Total: ${{ this.grandTotal }}</p>
            <br><br>
            <button v-on:click.prevent="sendOrder()">Add Order</button>
        </ul>
    </div>
</template>

<script>
import database from '../firebase.js'

export default {
    data() {
        return {
            subtotal: 0,
            calculated: false,
            dict: {
                "Cereal Prawn": 0,
                "Prawn omelette": 0,
                "Pork Fried Rice": 0,
                "Sambal KangKung": 0,
                "Dry Beef Hor Fun": 0,
                "Mapo Tofu": 0
            }
        }
    },
    props: ['itemsSel'],
    methods: {
        findTotal: function() {
            this.subtotal = 0;
            this.calculated = true;
            for (let i=0; i < this.itemsSel.length; i++) {
                var curr = this.itemsSel[i];
                this.subtotal += curr[2]*curr[1];
            }
            return;
        },
        sendOrder: function() {
            for (let i=0; i < this.itemsSel.length; i++) {
                var curr_item = this.itemsSel[i];
                var name = curr_item[0];
                var count =  curr_item[1];
                this.dict[name] = count;
            }

            database.collection('orders').add(this.dict).then(() => location.reload());
            
        }
    },
    computed: {
        grandTotal: function() {
            var result = this.subtotal*1.07;
            return result.toFixed(2);
        }
   }
}
</script>

<style scoped>
button {
    background-color: pink;
    border-radius: 8px;
    font-size: 20px;
}
</style>
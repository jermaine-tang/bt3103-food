import { Bar } from 'vue-chartjs'
import database from '../../firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
      //  dish: ["Prawn omelette", "Dry Beef Hor Fun", "Sambal KangKung", "Pork Fried Rice", "Mapo Tofu", "Cereal Prawn"],
        datacollection: {
         //   labels: ["Prawn omelette", "Dry Beef Hor Fun", "Sambal KangKung", "Pork Fried Rice", "Mapo Tofu", "Cereal Prawn"],
            labels: [],
            datasets: [{
                label: "Number of dish",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#ebeb34"],
                data: []
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Total Number of each dish'
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        beginAtZero: true
                    }
                }]
            }
        }
    }
  },
  methods: {
    fetchItems: function () {
      database.collection('orders').get().then(querySnapShot => {
      let item = {}
        querySnapShot.forEach(doc => { 
            item=doc.data()
            for (var key in item) {
                var idx = this.datacollection.labels.indexOf(key)
                var qty = item[key]
                if (idx == -1) {
                    this.datacollection.labels.push(key)
                    this.datacollection.datasets[0].data.push(qty)
                } else {
                    this.datacollection.datasets[0].data[idx] += qty
                }
            }
           // this.datacollection.labels.push(doc.data()[0])
           // this.datacollection.datasets[0].backgroundColor.push(doc.data().color)
          //  this.datacollection.datasets[0].data.push(item[1])
        })
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}
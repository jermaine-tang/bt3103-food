import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
        datacollection: {
            labels: [''],
            datasets: [{
                label: "west" ,
                data: [],
                borderColor: "#3e95cd",
                fill: false
              },{
              label: "national" ,
              data: [],
              borderColor: "#8e5ea2",
              fill: false
            }, {
            label: "east" ,
            data: [],
            borderColor: "#3cba9f",
            fill: false
          }, {
          label: "central" ,
          data: [],
          borderColor: "#e8c3b9",
          fill: false
      },
      {
        label: "south" ,
        data: [],
        borderColor: "#c45850",
        fill: false
    },
    {
      label: "north" ,
      data: [],
      borderColor: "#ebeb34",
      fill: false
  }]
        },
        options: {
            legend: { display: true },
            title: {
              display: true,
              text: 'PSI Twenty Four Hourly (By Region)'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
        axios.get(`https://api.data.gov.sg/v1/environment/psi?date=2021-02-23`)
        .then(response => {
            var data = response.data
            var ds =  this.datacollection.datasets
                var items = data["items"]
                for (let i = 0; i < items.length; i++) {
                    this.datacollection.labels.push(items[i]["timestamp"])
                    var reading = items[i]["readings"]["psi_twenty_four_hourly"]
                    ds[0]['data'].push(reading['west'])
                    ds[1]['data'].push(reading['national'])
                    ds[2]['data'].push(reading['east'])
                    ds[3]['data'].push(reading['central'])
                    ds[4]['data'].push(reading['south'])
                    ds[5]['data'].push(reading['north'])
                  
                  /*  for (let j = 0; j < reading.length; j++) {
                      var place = ds[j]["label"]
                      ds[j]["data"].push(reading[place])
                    } */

                }
            
            this.renderChart(this.datacollection, this.options)
        })
    }
  },
  created () {
    this.fetchItems()
  }
}
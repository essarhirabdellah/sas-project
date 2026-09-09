
var prompt = require('prompt-sync')();

// //////////////////////////////////////////////////////////
////my data
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
let tikets = [];


// all funtions
function manu() {
        console.log("=================================")
        console.log(" RAILWAY MANAGER")
        console.log("=================================")

        console.log("1. Show trips ")
        console.log("2. Buy a ticket")
        console.log("3. Show tickets")
        console.log("4. Cancel a ticket")
        console.log("5. Search for a ticket")
        console.log("6. Filter trips")
        console.log("7. Sort trips")
        console.log("0. log out")
}


//log all the data
function log_all(data) {
    for(let i = 0; i < data.length ; i++){
        console.log("\n")
        for(const [key,value] of Object.entries(data[i])){
            console.log(`${key} : ${value}`)
        }
    }
    }
// buing function
function buy(data) {
    // empty obj
    let person = {}
    //take id of the trep
    let id_trep = Number(prompt("id of trep:"))
    //cenform id 
     if (id_trep <= 0 ) {
        console.log("this id does not exset")
     }
     else if (id_trep < data.length) {
        // add the id of the terp
        person.id = id_trep
        // take the name
        let name_of_user = prompt("name :")
        // add the name
        person.name = name_of_user
        // add it to takites list
        tikets.push(person)
        // making sure is it work
        // console.log(tiktes)
    }
}
// show tiket

function show_tiket(list_tikets) {
       for(let i = 0; i < list_tikets.length ; i++){
        console.log("\n")
        for(const [key,value] of Object.entries(tikets[i])){
            console.log(`${key} : ${value}`)
        }
    }
}
// cancel tiket
function cancel_tiket(list_tikets) {
    // ask for name
    let name = prompt("name of the castmer:")
    // ask for id of the tiket
    let id = Number(prompt("id of the tiket :"))
    // loop of all tiket we have
    for(let i = 0;i < list_tikets.length;i++){
        // make sure of id
            if (list_tikets[i].id == id) {
                // conform the name
                if (list_tikets[i].name == name) {
                    // delet the object
                    list_tikets.splice(i,1)
                    // // making sure if it is work
                    // console.log(list_tikets)
                }
                else{
                    console.log(`no tiket with this name ${name}`)
                }
            }
            // if the id does not found
            else{
                console.log("this id does not exsit")
            }
    }
}
// searsh on tiket 
function searsh_on_tiket(list_of_tikets,data) {
     // ask for name
    let name = prompt("tiket's person name :")
    // ask for id of the tiket
    let id = Number(prompt("id of the tiket :"))
        // loop of all tiket we have
    for(let i = 0;i < list_of_tikets.length;i++){
        // make sure of id
            if (list_of_tikets[i].id == id) {
                // conform the name
                if (list_of_tikets[i].name == name) {
                    // delet the object
                    console.log("this tekit exest the travel is")
                    //loop on  the trips
                    for (let i = 0; i < data.length; i++) {
                        //making sure of the id of the trip
                        if (data[i].id == id) {
                            // show the trip info
                            for(const [key,value] of Object.entries(data[i])){
                              console.log(`${key} : ${value}`)
                                
                            }
                        }
                        
                    }
                }
                else{
                    console.log(`no tiket with this name ${name}`)
                }
            }
            // if the id does not found
            else{
                console.log("this id does not exsit")
            }
    }
}
// filter the tripse

function filter_trip(data) {
    // ask about departur
    let departur = prompt("what is the departur:")
      //loop on  the trips
    for (let i = 0; i < data.length; i++) {
          //making sure of the departur of the trip
               if (data[i].departure == departur) {
                            // show the trip info
                            for(const [key,value] of Object.entries(data[i])){
                              console.log(`${key} : ${value}`)
                                
                            }
                        }
                        
                    }



}
// sort all trips
function sort_trips(data) {
    // list of all prices
    let prices = []
    // loop on prisces
    for (let i = 0; i < data.length; i++) {
        // add ech price
      prices.push(data[i].price)
                        
    }
    // make sure of all the prices stroge in value
    // console.log(prices)
    for (let i = 0; i < prices.length; i++) {
        for (let j = 0; j < prices.length - i - 1; j++) {
            if (prices[j] > prices[j + 1]) {
                let swap = prices[j]
                prices[j] = prices[j + 1]
                prices[j + 1] = swap
            }
            
        }
        
    }

    // making sure of the prices are sorted
    //    console.log(prices)

// loop on prices
    for(let j = 0 ; j < prices.length;j++)
       //loop on  the trips
      for (let i = 0; i < data.length; i++) {
          //making sure of the departur of the trip
               if (data[i].price == prices[j]) {
                            // show the trip info
                            for(const [key,value] of Object.entries(data[i])){
                              console.log(`${key} : ${value}`)
                                

                        }
                        
                    }



    
}
}
// function main
function main(){
        // value for out from the app
        let x
        // print the manu
       manu()
           //do loop true
       do{
        // ask guest to choose a task
         let choose = prompt("choose what task you want:")
         switch (choose) {
            // dp the task number 1
            case "1":
                // print all the terps
                log_all(trips)
                break;
            case "2":
                buy(trips)
                break;
            case "3":
                show_tiket(tikets)
                break;
            case "4":
                cancel_tiket(tikets)
                break;
            case "5":
                searsh_on_tiket(tikets,trips)
                break;
        
            case "6":
                filter_trip(trips)
                break;
            case "7":
                sort_trips(trips)
                break;
            case "0":
                x = 0;
                break;
        
            default:
                break;
        }
    }while (x != 0) 
}
main()
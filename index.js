import express, { json } from "express";
const Server=express();
Server.use(express.json());
//1.create Room
// {
//     "price":"2000",
//     "ifBooked":"false",
//     "RoomId":203
// }
Server.post("/creatroom" ,(req, res)=>{
   const newhall={
    id:data.length+1,
    numberOfSeats:100,
    amenities: ["Ac", "chairs", "discolights"],
    price: req.body.price,
    ifBooked: req.body.ifBooked,
    customerName: "",
    date: "",
    startTime: "",
    endTime: "",
    Bookingdate:"",
    BookingStatus:"",
    Bookingid:"",
    RoomId: req.body.RoomId,
    RoomName: "Duplex"


   }
data.push(newhall)
res.send(data)
   
})

//2.booking Room
// {

//     "ifBooked":"true",
//     "customerName":"sudhakar",
//     "date":"10-13-2023",
//     "startTime":"10-13-2023 at 1pm",
//     "endTime":"10-14-2023 at 1pm"
      //  "Bookingdate":"10-14-2023"
// }
Server.put("/customer/:id" ,async(req,res)=>{
  const {id}=req.params
  const {customerName, date,startTime,endTime,ifBooked,Bookingdate}=req.body
  const hall = data.find((room)=>room.id === id)
  
  
  if(hall.ifBooked === "true"){
    res.status(400).send("room all ready booked")
  }
  else{
    hall.ifBooked=ifBooked
    hall.customerName=customerName
    hall.date=date
    hall.startTime=startTime,
    hall.endTime=endTime
    hall.Bookingdate=Bookingdate
    hall.BookingStatus++
    
    res.status(201).send({
      message:"book successful",
      data:hall
    })
  }
  

})
// 3.get booked all room
// {
//     "ifBooked":"true"
// }

Server.get("/ifBooked",async(req,res)=>{
  const{ifBooked}=req.body
  try {
    const hall = data.find((room)=>room.ifBooked === ifBooked)
    res.status(200).send({
      message:"fetch successfull",
      hall
    })
    
  } catch (error) {
    res.status(500).send({message:"internal server error"})
  }
})

// 4.booked all customer details

//{
//     "ifBooked":"true"
// }

Server.get("/customer",async(req,res)=>{
  const{ifBooked,}=req.body
  try {
    const hall = data.find((room)=>room.ifBooked === ifBooked)
    res.status(200).send({
      message:"fetch successfull",
      customerName:hall.customerName,
      RoomId:hall.RoomId,
      date:hall.date,
      startTime:hall.startTime,
      endTime:hall.endTime,
      


    })
    
  } catch (error) {
    res.status(500).send({message:"internal server error"})
  }
})

// 5.how many times customer booking data
Server.get("/bookedstatus/:id",async(req,res)=>{

  const{id}=req.params
  try {
    const booked = data.find((hall)=>hall.id === id)
    res.status(200).send(({
      message:"fetch successfull",
     customerName: booked.customerName,
     RoomName:booked.RoomName,
     date:booked.date,
     startTime:booked.startTime,
     endTime:booked.startTime,
     Bookingid:booked.Bookingid,
     Bookingdate:booked.Bookingdate,
     BookingStatus:booked.BookingStatus,     

    }))
    
  } catch (error) {
    res.status(500).send({
      message:"internal server error"
    })
    
  }
})


  
  
  






 const data=[
    {id: "1",
    numberOfSeats:100,
    amenities: ["Ac", "chairs", "discolights"],
    price: 5000,ifBooked: "true",
    customerName: "sudhakar",
    date: "05-feb-2022",
    startTime: "10-feb-2022 at 12PM",
    endTime: "11-feb-2020 at 11am",
    RoomId: 201,RoomName: "Duplex",Bookingid: "1",
    Bookingdate:"12-feb-2022",
    BookingStatus:1
  },

    {id: "2",
    numberOfSeats: 100,
    amenities: ["Ac", "chairs", "discolights"],
    price: 5000,
    ifBooked: "false",
    customerName: "",
    date: "",
    startTime: "",
    endTime: "",
    RoomId: 202,
    RoomName: "Duplex",RoomId: 201,RoomName: "Duplex",Bookingid: "2",
    Bookingdate:"",
    BookingStatus:0},
]






//


Server.listen(3000, ()=>console.log("local server start 3000"))
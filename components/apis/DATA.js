const drivers = [
    {
        name:'Soham Kumbhar',
        driverId:2567890,
        distance:1.8,
        img:require('../../assets/img/user.jpg'),
        rating:3.7,
        exp:6,
        charge:10,
        desc:'Hello to all my Happy clients, I am Rahul Jain and I have 1 year experience in machanics. I have fixed a lot of branded cars. Customers have great trust on me. The prices are great and very affordable so just try once. Thank you',
        location:'',
        phoneNum:'9325131169'

    },
    {
        name:'Guy Hawkins',
        driverId:2567891,
        distance:1.8,
        img:require('../../assets/img/user2.png'),
        rating:3.5,
        exp:6,
        charge:10,
        desc:'Hello to all my Happy clients, I am Rahul Jain and I have 1 year experience in machanics. I have fixed a lot of branded cars. Customers have great trust on me. The prices are great and very affordable so just try once. Thank you',
        location:'',
        phoneNum:'9325131169'

    },
    {
        name:'Arlene McCoy',
        driverId:2567892,
        distance:1.8,
        img:require('../../assets/img/user3.png'),
        rating:3.9,
        exp:6,
        charge:10,
        desc:'Hello to all my Happy clients, I am Rahul Jain and I have 1 year experience in machanics. I have fixed a lot of branded cars. Customers have great trust on me. The prices are great and very affordable so just try once. Thank you',
        location:'',
        phoneNum:'9325131169'

    },
    {
        name:'Marvin McKinney',
        driverId:2567893,
        distance:1.8,
        img:require('../../assets/img/user4.png'),
        rating:4.6,
        exp:6,
        charge:10,
        desc:'Hello to all my Happy clients, I am Rahul Jain and I have 1 year experience in machanics. I have fixed a lot of branded cars. Customers have great trust on me. The prices are great and very affordable so just try once. Thank you',
        location:'',
        phoneNum:'9325131169'

    },
    {
        name:'Albert Flores',
        driverId:2567894,
        distance:1.8,
        img:require('../../assets/img/user5.png'),
        rating:4.1,
        exp:6,
        charge:10,
        desc:'Hello to all my Happy clients, I am Rahul Jain and I have 1 year experience in machanics. I have fixed a lot of branded cars. Customers have great trust on me. The prices are great and very affordable so just try once. Thank you',
        location:'',
        phoneNum:'9325131169'

    },
    {
        name:'Kathryn Murphy',
        driverId:2567895,
        distance:1.8,
        img:require('../../assets/img/user1.png'),
        rating:4.5,
        exp:6,
        charge:10,
        desc:'Hello to all my Happy clients, I am Rahul Jain and I have 1 year experience in machanics. I have fixed a lot of branded cars. Customers have great trust on me. The prices are great and very affordable so just try once. Thank you',
        location:'',
        phoneNum:'9325131169'

    },
    {
        name:'Leslie Alexander',
        driverId:2567896,
        distance:1.8,
        img:require('../../assets/img/user.jpg'),
        rating:4.2,
        exp:6,
        charge:10,
        desc:'Hello to all my Happy clients, I am Rahul Jain and I have 1 year experience in machanics. I have fixed a lot of branded cars. Customers have great trust on me. The prices are great and very affordable so just try once. Thank you',
        location:'',
        phoneNum:'9325131169'

    },
    {
        name:'Santosh Kumar',
        driverId:2567897,
        distance:1.8,
        img:require('../../assets/img/user1.png'),
        rating:4.9,
        exp:6,
        charge:10,
        desc:'Hello to all my Happy clients, I am Rahul Jain and I have 1 year experience in machanics. I have fixed a lot of branded cars. Customers have great trust on me. The prices are great and very affordable so just try once. Thank you',
        location:'',
        phoneNum:'9325131169'

    },
    {
        name:'Brock Siman',
        driverId:2567898,
        distance:1.8,
        img:require('../../assets/img/user.jpg'),
        rating:4.2,
        exp:6,
        charge:10,
        desc:'Hello to all my Happy clients, I am Rahul Jain and I have 1 year experience in machanics. I have fixed a lot of branded cars. Customers have great trust on me. The prices are great and very affordable so just try once. Thank you',
        location:'',
        phoneNum:'9325131169'

    },
    {
        name:'John Sina',
        driverId:2567899,
        distance:1.8,
        img:require('../../assets/img/user1.png'),
        rating:4.8,
        exp:6,
        charge:10,
        desc:'Hello to all my Happy clients, I am Rahul Jain and I have 1 year experience in machanics. I have fixed a lot of branded cars. Customers have great trust on me. The prices are great and very affordable so just try once. Thank you',
        location:'',
        phoneNum:'9325131169'

    },
]

const CustomerRating = [
    {
      id: 1,
      name: "Vishal Chaurasiya",
      img: require("../../assets/img/user5.png"),
      rating: 4.2,
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum velit sapien sed sed proin commodo. Vel, dictum consequat sed massa mauris vestibulum elementum.",
    },
    {
      id: 2,
      name: "Soham Kumbhar",
      img: require("../../assets/img/user5.png"),
      rating: 4.9,
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum velit sapien sed sed proin commodo. Vel, dictum consequat sed massa mauris vestibulum elementum.",
    },
    {
      id: 4,
      name: "saurabh More",
      img: require("../../assets/img/user5.png"),
      rating: 3.9,
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum velit sapien sed sed proin commodo. Vel, dictum consequat sed massa mauris vestibulum elementum.",
    },
    {
      id: 5,
      name: "Rajesh Shinde",
      img: require("../../assets/img/user5.png"),
      rating: 3.7,
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum velit sapien sed sed proin commodo. Vel, dictum consequat sed massa mauris vestibulum elementum.",
    },
  ];

  const vehicleTypes =[
    {
        id:2,
        name:'Bike',
        img:"https://cdni.iconscout.com/illustration/premium/thumb/bike-3176649-2666324.png"
    },
    {
        id:3,
        name:'car (sedan)',
        img:"https://cdn3d.iconscout.com/3d/premium/thumb/car-4454426-3692778.png"
    },
    {
        id:4,
        name:'car (suv)',
        img:"https://cdn3d.iconscout.com/3d/premium/thumb/jeep-4522189-3860856.png"
    },
    {
        id:5,
        name:'small truck',
        img:"https://cdn3d.iconscout.com/3d/premium/thumb/pickup-van-6851103-5619093.png"
    },
    {
        id:6,
        name:'truck',
        img:"https://cdn3d.iconscout.com/3d/premium/thumb/truck-5349020-4479021.png"
    },
    {
        id:7,
        name:'construction vehicle',
        img:"https://cdn3d.iconscout.com/3d/premium/thumb/excavator-5371149-4486746.png"
    },
    {
        id:8,
        name:'tractor',
        img:"https://cdn3d.iconscout.com/3d/premium/thumb/tractor-4522200-3860851.png"
    },
    {
        id:9,
        name:'heavy vehicle',
        img:"https://cdn3d.iconscout.com/3d/premium/thumb/mining-vehicle-5371182-4486739.png"
    },
    {
        id:10,
        name:'bus',
        img:"https://cdn3d.iconscout.com/3d/premium/thumb/bus-5796461-4844858.png"
    },
  ]

export {drivers,CustomerRating,vehicleTypes};
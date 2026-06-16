import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/header'
import Card from './Components/Card'
import Footer from './Components/footer'
const data = [
  {
    "id": 1,
    "name": "Amazing Cafe",
    "image": "https://wallpaperaccess.com/full/8734370.jpg",
    "cuisine": "Biryani is best food for Miya Bhai",
    "rating": 4.2,
    "deliveryTime": 37
  },
  {
    "id": 2,
    "name": "Spice Hub",
    "image": "https://blog.bigbasket.com/wp-content/uploads/2023/04/South-Indian-main_584509564.jpeg",
    "cuisine": "Delicious South Indian dishes",
    "rating": 4.5,
    "deliveryTime": 30
  },
  {
    "id": 3,
    "name": "Pizza Town",
    "image": "https://b.zmtcdn.com/data/menus/169/58169/319e88bdc1ce79d7d4d8eb0661ea6c44.jpg",
    "cuisine": "Cheesy Italian pizzas and  bread",
    "rating": 4.3,
    "deliveryTime": 28
  },
  {
    "id": 4,
    "name": "Tandoori Tales",
    "image": "https://b.zmtcdn.com/data/pictures/8/20928918/72e727e74a4d192dd3ac001eaaacfcde.jpg",
    "cuisine": "Authentic North Indian tandoori delights",
    "rating": 4.6,
    "deliveryTime": 35
  },
  {
    "id": 5,
    "name": "Sushi Corner",
    "image": "https://images.unsplash.com/photo-1553621042-f6e147245754",
    "cuisine": "Fresh Japanese sushi and rolls",
    "rating": 4.7,
    "deliveryTime": 25
  },
  {
    "id": 6,
    "name": "Burger Zone",
    "image": "https://images.unsplash.com/photo-1550547660-d9450f859349",
    "cuisine": "Juicy burgers and crispy fries",
    "rating": 4.1,
    "deliveryTime": 20
  },
  {
    "id": 7,
    "name": "Chaat House",
    "image": "https://missionloca.s3.amazonaws.com/mission/wp-content/uploads/2022/03/Indias-Chaat-House.jpg",
    "cuisine": "Spicy Indian street food & snacks",
    "rating": 4.4,
    "deliveryTime": 18
  },
  {
    "id": 8,
    "name": "The Dessert Spot",
    "image": "https://img.freepik.com/premium-photo/tray-food-with-desert-desert-background_931553-114539.jpg",
    "cuisine": "Cakes, pastries and sweet desserts",
    "rating": 4.8,
    "deliveryTime": 22
  },
  {
    "id": 9,
    "name": "Healthy Bowl",
    "image": "https://i.pinimg.com/originals/38/fb/7d/38fb7d073f3ac1481d65572b07a9afd1.jpg",
    "cuisine": "Salads, smoothies, healthy meals",
    "rating": 4.3,
    "deliveryTime": 26
  },
  {
    "id": 10,
    "name": "Momos Magic",
    "image": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
    "cuisine": "Hot and spicy steamed momos",
    "rating": 3.2,
    "deliveryTime": 24
  },
  {
  "id": 11,
  "name": "Pasta Palace",
  "image": "https://tse1.explicit.bing.net/th/id/OIP.EDm87pnnzMdM0v8XczcbbwHaF7?rs=1&pid=ImgDetMain&o=7&rm=3",
  "cuisine": "Creamy Italian pasta  dishes",
  "rating": 4.6,
  "deliveryTime": 27
},
{
  "id": 12,
  "name": "Wrap & Roll",
  "image": "https://tse1.mm.bing.net/th/id/OIP.SJGQfLUc4LbL230Nl6FcbAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  "cuisine": "Tasty rolls, wraps, and shawarmas",
  "rating": 4.2,
  "deliveryTime": 23
}

];

 


  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <React.StrictMode>
        <Header/>
        <Card data={data}/>
        <Footer/>
     </React.StrictMode>
)
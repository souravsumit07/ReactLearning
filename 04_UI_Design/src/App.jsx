import Main from "./components/Main"
import Navbar from "./components/Navbar"
const cardData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    title: "Professional growth opportunities",
    buttonText: "Satisfied",
    color:"red"
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    title: "Team collaboration and culture",
    buttonText: "Motivated",
    color:"green"
    
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    title: "Work-life balance satisfaction",
    buttonText: "Happy",
    color:"orange"
    
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    title: "Work-life balance satisfaction",
    buttonText: "Happy",
    color:"blue"
    
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    title: "Work-life balance satisfaction",
    buttonText: "Happy",
  },
];
const App = () => {
  return (
    <div className="p-20">
      <Navbar/>
      <Main data={cardData}/>
    </div>
  )
}

export default App

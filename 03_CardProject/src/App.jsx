import React from 'react'
import Card from './components/Card'
import './index.css'
 const cardData = [
  {
    id: 1,
    price: "$120/hr",
    title: "Senior UI Developer",
    company: "Nike",
    logo: "https://freepnglogo.com/images/all_img/1708529694nike-logo-png.png"
  },
  {
    id: 2,
    price: "$90/hr",
    title: "Frontend Engineer",
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    id: 3,
    price: "$110/hr",
    title: "Backend Developer",
    company: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  },
  {
    id: 4,
    price: "$100/hr",
    title: "React Developer",
    company: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
  },
  {
    id: 5,
    price: "$85/hr",
    title: "Mobile App Developer",
    company: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
  },
  {
    id: 6,
    price: "$95/hr",
    title: "Full Stack Developer",
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  },
  {
    id: 7,
    price: "$130/hr",
    title: "Lead UX Designer",
    company: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Adobe_Systems_logo_and_wordmark.svg"
  },
  {
    id: 8,
    price: "$75/hr",
    title: "Junior UI Developer",
    company: "Figma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
  },
  {
    id: 9,
    price: "$105/hr",
    title: "Angular Developer",
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
  },
  {
    id: 10,
    price: "$115/hr",
    title: "Vue.js Developer",
    company: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
  }
]


const App = () => {
  return (
    <div className='cardContainer ' >
      {cardData.map((element,key) =>{ 
        return <Card key={key} data={element}/>
})}
    </div>
  )
}

export default App

import React from 'react'
import Card from '../components/Card';

// Card
import coverPicture from '../assets/img/cover.png';
import userPicture from '../assets/img/user.png';

const highlights = [
  {
    "coverPicture" : coverPicture,
    "userPicture" : userPicture,
    "category" : "Category Name",
    "title" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    "description" : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "author" : "Kraken" 
  },
  {
    "coverPicture" : coverPicture,
    "userPicture" : userPicture,
    "category" : "Category Name",
    "title" : "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    "description" : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "author" : "Kraken" 
  },
  {
    "coverPicture" : coverPicture,
    "userPicture" : userPicture,
    "category" : "Category Name",
    "title" : "Ut enim ad minim veniam, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    "description" : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "author" : "Kraken" 
  }
]



function Highlights() {
    return (
        <div>
            {
              highlights.map((highlight, index) => (
              <Card 
                key={index}
                coverPicture={highlight.coverPicture} 
                userPicture={highlight.userPicture} 
                category={highlight.category}
                title={highlight.title}
                description={highlight.description}
                author={highlight.author} />
              ))
            }            

            <div className="load_more"><button>More Articles</button></div>
        </div>
    )
}

export default Highlights

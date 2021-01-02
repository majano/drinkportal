import React from 'react'
import recipePicture from '../assets/img/recipe1.png';

const recipes = [
  {
    "recipePicture" : recipePicture,
    "title" : "100 Proof Espresso Martini"
  },
  {
    "recipePicture" : recipePicture,
    "title" : "100 Proof Mule"
  },
  {
    "recipePicture" : recipePicture,
    "title" : "Almande Cold Brew"
  },
  {
    "recipePicture" : recipePicture,
    "title" : "Anejo Old Fashioned"
  },
  {
    "recipePicture" : recipePicture,
    "title" : "Almande Shiver"
  }
];

function LatestRecipes() {
    return (
        <div className="block_content recipes_block">
            <h4>Latest Recipes</h4>
            <ul>
              {
                recipes.map((recipe, index) => ( 
                  <li key={index}> 
                    <div className="picture_square"><img src={recipe.recipePicture} alt=""/></div>
                    <h6>{recipe.title}</h6> 
                  </li> 
                ))
              }
              {/*              
              <li>
                <div className="picture_square"><img src={recipePicture} alt=""/></div>
                <h6>100 Proof Espresso Martini</h6>
              </li>
              <li>
                <div className="picture_square"><img src={recipePicture} alt=""/></div>
                <h6>100 Proof Mule</h6>
              </li>
              <li>
                <div className="picture_square"><img src={recipePicture} alt=""/></div>
                <h6>Almande Cold Brew</h6>
              </li>
              <li>
                <div className="picture_square"><img src={recipePicture} alt=""/></div>
                <h6>Anejo Old Fashioned</h6>
              </li>
              <li>
                <div className="picture_square"><img src={recipePicture} alt=""/></div>
                <h6>Almande Shiver</h6>
              </li>*/
              }
            </ul>
            <button className="btn_link">View all recipes</button>
        </div>
    )
}

export default LatestRecipes

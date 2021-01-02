import React from 'react'

const brands = [
    {
        "brand" : "Johnnie Walker & Sons"
    },
    {
        "brand" : "Tequila Jose Cuervo"
    },
    {
        "brand" : "Tanqueray"
    }
]

function LatestBrands() {
    return (
        <div className="block_content">
            <h4>Latest Recipes</h4>
            <ul className="list">
                {
                    brands.map((brand, index) => (<li key={index}>{brand.brand}</li>))
                }

              {
                  /*
                  <li>Johnnie Walker & Sons</li>
                <li>Tequila Jose Cuervo</li>
                <li>Tanqueray</li>
                  */
              }
            </ul>
            <button className="btn_link">View Portfolio</button>
        </div>
    )
}

export default LatestBrands

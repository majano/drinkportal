import React from 'react';
import LatestBrands from './LatestBrands';
import LatestRecipes from './LatestRecipes';

function AsideLeft() {
    return (
        <div className="aside_left">

          <LatestRecipes />

          <LatestBrands />

        </div>
    )
}

export default AsideLeft

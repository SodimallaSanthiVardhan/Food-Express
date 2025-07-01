import React from 'react'
import { menu_list } from '../../assets/assets'
import './ExploreMenu.css'

const ExploreMenu = ({ category, setcategory }) => {
  const handleclick = (item) => {
    const categoryitem = category === item ? 'all' : item;
    setcategory(categoryitem);
  }

  // Double the list for infinite loop effect
  const scrollItems = [...menu_list, ...menu_list];

  return (
    <div className='explore-div' id='menu'>
      <div className='explore-h1'>
        <h1>Explore Menu</h1>
        <p>Discover a variety of delicious dishes crafted to satisfy every craving. Choose your favorites and enjoy a perfect meal.</p>
      </div>

      <div className='scroll-container'>
        <div className='scroll-content'>
          {scrollItems.map((item, index) => (
            <div
              onClick={() => handleclick(item.menu_name)}
              key={index}
              className='menu-list-item'
            >
              <img src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExploreMenu

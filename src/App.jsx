import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css"
import { useState,useEffect} from 'react';
import axios from 'axios';
import Home from './components/Home';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import React from 'react';
import Favorites from './components/favorites/Favorites';
import Description from './components/Description';
import Form from './components/Form';
import Basket from './components/basket/Basket';
export const AppContext = React.createContext({})

// в связи с ограничениями (макс = 2) mockapi, в проекте корректно реализованы 2 ссылки - 'tyrs' и 'cart'

function App() {
  //хранения данных туров
  const [tyrs, setTyrs] = useState([])
  //для избранных туров
  const [favorites, setFavorites] = useState([])
  //для корзины
  const [overlayItems, setOverlayItems] = useState([])

useEffect (()=>{
  async function axiosData(){
    const tyrsData = await axios.get('https://6441b7de76540ce2257d2335.mockapi.io/tyrs')
    const favoritesData = await axios.get('https://6441b7de76540ce2257d2335.mockapi.io/tyrs')
    const cartData = await axios.get('https://6441b7de76540ce2257d2335.mockapi.io/cart')

    setTyrs(tyrsData.data)
    setFavorites(favoritesData.data)
    setOverlayItems(cartData.data)
  }
  axiosData();
},[])

const deleteItems=(id)=>{
  axios.delete(`https://6441b7de76540ce2257d2335.mockapi.io/cart/${id}`)
  setOverlayItems((objDelete)=> objDelete.filter(item=> item.id !==id))
}

const isAdded=(myId)=>{
  return overlayItems.some((objIsAdded)=> objIsAdded.myId === myId)
}

const isFav=(myId)=>{
  return favorites.some((objIsFav)=> objIsFav.myId === myId)
}
  
  return (
    <AppContext.Provider
  value={
    {
      tyrs,
      setTyrs,
      overlayItems,
      setOverlayItems,
      favorites,
      setFavorites,
      isAdded,
      isFav
    }
  }>
    <div>
      <Router>
        <Header/>
          <Routes>

          <Route path='/favorites'
                    element={
                        <Favorites
                        favorites={favorites}
                        setFavorites={setFavorites}
                        item={tyrs}
                        overlayItems={overlayItems}
                        setOverlayItems={setOverlayItems}
                        />
                    }
                /> 

      <Route path='/'
                    element={
                        <Home
                        item={tyrs}
                        overlayItems={overlayItems}
                        setOverlayItems={setOverlayItems}
                        favorites={favorites}
                        setFavorites={setFavorites}
                        />
                    }
                />

      <Route path='/description'
              element={
                <Description/>
              }
            />
          
      <Route path='/'
              element={
                <Home
                  item={tyrs}
                />
              }
            />

      <Route path='/form'
                element={
                        <Form/>
                    }
                />

      <Route path='/cart'
                element={
                        <Basket
                        totalPrice={
                          overlayItems.reduce((element = overlayItems.length, obj)=>
                          element+obj.price, 0 
                          )
                        }
                        overlayProp={overlayItems}
                        deleteItems={deleteItems}
                        />
                    }
                />

        </Routes>
      </Router> 

      <Footer/>
  </div>
  </AppContext.Provider>
  );
}

export default App;

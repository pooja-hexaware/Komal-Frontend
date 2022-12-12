import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Item from './Item';
import Orders from './Orders';
import { getStoreById } from './store/actions/store.action';
import { getAllToppings } from './store/actions/toppings.action';
import { closeDialog } from './store/slices/cartSlice';

function StoreMenu() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.itemSlice.items);
  const { openDialog } = useSelector(state => state.cartSlice);


  useEffect(() => {
    dispatch(getStoreById(id)).then(res => {
      dispatch(getAllToppings())
    })
  }, []);

  function handleClose() {
    dispatch(closeDialog());
  }

  return (
    <section className="grid grid-cols-2 gap-10 p-20">
      {items.map((item) => <Item key={item._id} item={item} />)}
      <Orders open={openDialog} handleClose={handleClose}/>
    </section>
  )
}

export default StoreMenu
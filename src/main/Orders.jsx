import { Dialog, DialogTitle, ListItem, ListItemText } from '@mui/material';
import { List } from 'echarts';
import { useSelector } from 'react-redux';

function Orders({open, handleClose}) {
  const { cartItems } = useSelector(state => state.cartSlice);

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Checkout</DialogTitle>
      <List sx={{ pt: 0 }}>
        {Object.entries(cartItems).map(([item, price]) => (
          <ListItem key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}

export default Orders
import {
    Button,
    Card,
    CardActions,
    CardContent,
    FormControl,
    Typography,
    Select,
    InputLabel,
    MenuItem,
    OutlinedInput
} from '@mui/material'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePrice } from './store/slices/cartSlice';

function Item({ item }) {
  const [count, setCount] = useState(0);
  const [selectedToppings, setSelectedToppings] = useState([]); 
  const toppings = useSelector(state => state.toppingsSlice.toppings);
  const { totalPrice } = useSelector(state => state.cartSlice);
  const dispatch = useDispatch();
  const currentItemToppings = toppings.filter(topping => item.toppings.includes(topping._id))

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedToppings(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  
  useEffect(() => {
    let price = 0;
    price = item.price * count;
    price += selectedToppings.reduce((acc, curr) => {
      return acc + curr.price
    }, 0) * count;
    if (price > 0) {
      dispatch(updatePrice({
        [item.name]: price
      }));
    }

  }, [count, selectedToppings]);

  return (
    <Card key={item._id}>
        <CardContent>
            <Typography
                className="text-3xl"
                color="text.secondary"
                gutterBottom
            >
                {item.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" className="first-letter:text-2xl text-xl">
                ${item.price}
            </Typography>
            <Typography variant="body2">
                {item.ingredients.toString()}
            </Typography>
        </CardContent>
        <CardActions className="flex justify-between">
        <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Toppings</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          disabled={!count}
          value={selectedToppings}
          onChange={handleChange}
          input={<OutlinedInput label="Add Toppings" />}
          // MenuProps={MenuProps}
        >
          {currentItemToppings.map((topping) => (
            <MenuItem
              key={topping}
              value={topping}
            >
              {topping.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
          <div className="flex justify-between items-center gap-10">
            <Button onClick={() => setCount(state => state + 1)} size="small">
                +
            </Button>
            <span>{count}</span>
            <Button onClick={() => setCount(state => state - 1)} size="small">
                -
            </Button>
          </div>
        </CardActions>
    </Card>
  )
}

export default Item;

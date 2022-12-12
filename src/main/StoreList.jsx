import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom/dist'
import { getAllStores } from './store/actions/store.action'

function StoreList() {
    const dispatch = useDispatch()
    const stores = useSelector((state) => state.storeSlice.stores);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllStores())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const goToItemsPage = (store) => navigate(`${store.name}/${store._id}`)

    return (
    <section className="grid grid-cols-2 gap-10 p-20">
      {stores.map((store) => (
                <Card>
                <CardContent>
                    <Typography
                        className="text-3xl"
                        color="text.secondary"
                        gutterBottom
                    >
                        {store.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        #{store.storeId}
                    </Typography>
                    <Typography variant="body2">
                     Jumbalakadi Jarumitaya flavours
                    </Typography>
                </CardContent>
                <CardActions className="flex justify-end">
                    <Button onClick={() => goToItemsPage(store)} size="small">Order</Button>
                </CardActions>
            </Card>
    
      ))}
    </section>
    )
}

export default StoreList

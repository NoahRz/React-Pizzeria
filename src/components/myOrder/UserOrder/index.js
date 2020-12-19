import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AlertMessage from '../AlertMessage';
import OrderElements from '../OrderElements';


const UserOrder = ({ user }) => {

    const { order } = user;
    return (
        <>
            { (order.length == 0) ?
                <AlertMessage msg={"No order"} />
                :
                order.map((order) => (
                    < OrderElements key={uuidv4()} orderId={order} />
                ))
            }
        </>
    )
}

export default UserOrder;
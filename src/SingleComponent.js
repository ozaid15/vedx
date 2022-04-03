import React from 'react'

function SingleComponent({data}) {
  const {order_id,customer,country, address, product_title,product_description, date,status} = data;

  return (
    <div >
        <div className='orders'>
            <div className='item id'>{order_id}</div>
            <div className='item'>{customer}</div>
            <div className='item morespace'>
                <div>{country}</div>
                <div>{address}</div>
                <br/>
            </div>
            <div className='item morespace'>
                {product_title}
                <br/>
                {product_description}
            </div>
            <div className='item'>{date}</div>
            <div className='item'>{status}</div>
        </div>
    </div>
  );
}

export default SingleComponent
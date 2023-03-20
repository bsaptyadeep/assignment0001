import React from 'react';
import './ListCard.css';

const ListCard = ({data}) => {

    return (
        <div className='dashboards-list'>
            {
                data?.map((item) => (
                    <div className='dashboards-list-card' key={item.title}>
                        <div className='dashboards-list-card-left'>
                            <img src={item.image} height={18} alt="item" />
                            <p>{item.title}</p>
                        </div>
                        {item.count ? (
                            <div className='dashboards-list-card-count'>{item.count}</div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                ))
            }
        </div>
    )
}

export default ListCard
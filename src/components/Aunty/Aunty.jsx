import React from 'react';
import Cousin from '../Cousing/Cousin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h4>Aunty Closed</h4>
            <section className='flex'>
                <Cousin>Abir</Cousin>
                <Cousin hasFriend={true} ring={ring}>Abeda</Cousin>
            </section>
        </div>
    );
};

export default Aunty;
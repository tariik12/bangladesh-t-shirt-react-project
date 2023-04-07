import React from 'react';
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({ring}) => {
    return (
        <div>
            <h4>Father World</h4>
            <section className='flex'>
                <MySelf ring={ring} />
                <Brother />
                <Sister />
            </section>
        </div>
    );
};

export default Father;
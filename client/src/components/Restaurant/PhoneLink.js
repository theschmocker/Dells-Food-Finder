import React, { Fragment } from 'react';

const PhoneLink = ({ number, className }) => ( 
    <Fragment>
        {number 
                && <a 
                    href={`tel:${replaceNonDigits(number)}`}
                    className={className}
                >
                    {number}
                </a>}
    </Fragment>
)

export default PhoneLink;

function replaceNonDigits(phoneNumber) {
    return phoneNumber.replace(/\D/g, '');
}

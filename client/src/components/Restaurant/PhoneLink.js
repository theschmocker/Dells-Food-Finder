import React, { Fragment } from 'react';

const PhoneLink = ({ number }) => ( 
    <Fragment>
        {number && <a href={`tel:${replaceNonDigits(number)}`}>{number}</a>}
    </Fragment>
)

export default PhoneLink;

function replaceNonDigits(phoneNumber) {
    return phoneNumber.replace(/\D/g, '');
}

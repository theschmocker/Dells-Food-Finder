import React, { Fragment } from 'react';
import FaPhone from 'react-icons/lib/fa/phone';

const PhoneLink = ({ number, className }) => ( 
    <Fragment>
        {number 
                && <a 
                    href={`tel:${replaceNonDigits(number)}`}
                    className={className}
                >
                    <FaPhone /> {number}
                </a>}
    </Fragment>
)

export default PhoneLink;

function replaceNonDigits(phoneNumber) {
    return phoneNumber.replace(/\D/g, '');
}

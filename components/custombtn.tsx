"use client"

import React from 'react';
import Image from 'next/image'
const CustomButton = () => {
    return (
        <div>
            <button
                disabled={false}
                type={"button"}
                className={'custom-button'}
                onClick={() =>{}}>
                <span className={'flex-1'}>
                    title
                </span>
            </button>
        </div>
    );
}

export default CustomButton;
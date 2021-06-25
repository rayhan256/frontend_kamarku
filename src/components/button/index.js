import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({children, isPrimary, isLinked, isSubmit, link}) {
    let classname = ['btn k-button-primary']
    let type = 'button'
    if (isPrimary) classname.push('btn-primary')
    if (isSubmit) type = 'submit'
    if (isLinked) {
        return (
            <div>
                <Link href={link}>
                    <button type={type} className={classname.join(' ')} >{children}</button>
                </Link>
            </div>
        )
    }
    return (
            <div>
                <button type={type} className={classname.join(' ')} >{children}</button>
            </div>
        ) 
}

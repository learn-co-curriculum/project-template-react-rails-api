import React from 'react'
import { CountryDropdown } from 'react-country-region-selector'

export default function Form() {
  return (
    <>
        <div className='search-hikes-form'>
            <form>
                <div className='city-input'>
                    <input placeholder='City' type='text' />
                </div>
                <div className='country-input'>
                    <CountryDropdown placeholder='Country'/>
                </div>
            </form>
        </div>
    </>
  )
}

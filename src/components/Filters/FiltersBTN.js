import React from 'react'

const FiltersBTN = ({ name, index, item, task, setPageNumber }) => {
  return (

    <div>

        <style>
            {`
                .check:checked + label {
                    background-color: #0d6efd;
                    color: #fff;
                }

                input[type="radio"] {
                    display: none;
                }
            `}
        </style>

        <div className="form-check">
            <input 
                onClick={() => {
                    setPageNumber(1)
                    task(item)
                }}
                className="form-check-input check" 
                type="radio" 
                name={name}
                id={`${name}-${index}`} 
            />
            <label className="btn btn-outline-primary" for={`${name}-${index}`} >{item}</label>
        </div>
    </div>
  )
}

export default FiltersBTN
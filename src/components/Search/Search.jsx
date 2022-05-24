import React from 'react'

export const Search = () => {

    const [value, setValues] = React.useState('');

    const onChangeInput = (event) => {
        setValues(event.target.value)
    }
    const resetInputField = () => {
        return setValues("");
    };
  return (
      <div className='search-header d-flex align-center justify-center '>
          <div className="search-container  mb-25">
              <div className='search-block d-flex align-center justify-center'>
                  <img className='mr-20 mt-10 mb-10' src='images/search.svg' width={12} height={13} ></img>
                  <input placeholder='Search...'
                      value={value}
                      onChange={onChangeInput}
                  ></input>
                  {value && (<img
                      onClick={resetInputField}
                      className='mr-5 mt-10 mb-5 remove'
                      src='/images/remove-btn.svg'
                      width={12} height={13}
                  ></img>)}
              </div>
          </div>
      </div> 
  )
}

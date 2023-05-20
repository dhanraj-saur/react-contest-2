import React from 'react'

function TableData({ data }) {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className='table'>
            <table>

              <tr>
                <th>image</th>
                <td><img src={item.image} /></td>
                <td>{item.id}</td>
                <td>{item.symbol}</td>
                <td>{item.current_price}</td>
                <td>{item.total_volume}</td>
              </tr>
            </table>
          </div>
        )

      })}
    </>
  )
}

export default TableData
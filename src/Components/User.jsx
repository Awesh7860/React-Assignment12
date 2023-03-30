import React from 'react'

const User = ({Image,fname,lname,title,email,gender}) => {
  return (
    <table>
            <tr >
                <td className='user-image'>
                <img src={Image} alt="" style={{width:"80px"}}/>
                </td>
                <td className='user-name'> 
                    {title+" "+" "+fname+" "+lname}
                </td>
                <td className='user-email'>
                    {email}
                </td>
                <td className='user-gender'>
                    {gender}
                </td>
            </tr>
        </table>
  )
}

export default User
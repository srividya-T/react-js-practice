import React from 'react'

const Userstable = ({filltextUsers}) => {
  return (
    <div>
        <table border="1">
        <thead>
        <tr>
          <th>albumId</th>
          <th>id</th>
          <th>thumbnailUrl</th>
          <th>title</th>
          <th>url</th>
        </tr>
        </thead>
        <tbody>
          {filltextUsers.map((user,i)=>{
            return <tr key={i}>
              <td>{user.albumId}</td>
              <td>{user.id}</td>
              <td>{user.thumbnailUrl}</td>
              <td>{user.title}</td>
              <td>{user.url}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Userstable
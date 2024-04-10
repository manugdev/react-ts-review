import { useState } from "react"

interface User {
  uid: string,
  name: string
}

export const Usuario = () => {

  const [user, setUser] = useState <User>({
      uid: '',
      name: ''
  })

  const login = () => {
    setUser({
      uid: 'ABC1234',
      name: 'Manuel Garcia'
    })
  }

  const logout = () => {
    setUser({
      uid: '',
      name: ''
    })
  }

  let isLogin = (user.uid !== '' || user.name !== '')

  return (
    <div className='mt-4'>
      <h4>Usuario</h4>
      <button onClick={!isLogin ? login : logout} className="btn btn-outline-primary mt-2">
        {!isLogin ? 'Login' : 'Log out'}
      </button>
      {
        !isLogin ?
        <pre className='mt-2'>No Hay Usuario</pre>
        :
        <pre className='mt-2'>{JSON.stringify(user)}</pre>
      }
    </div>
  )
}

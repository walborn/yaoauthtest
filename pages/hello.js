import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const clientId = 'a6f2398bd4c64495b59d50b7ffb745b7'; // ID приложения
const clientSecret = '5ba51ba2dcae47adb14ff38e56645f39'; // Пароль приложения


export default function Home() {
  const router = useRouter()
  const [value, setValue] = React.useState({})
  
  React.useEffect(() => {
    if (router.search?.startsWith('?code=')) {
      const code = router.search.slice(6)
      axios.post(`https://oauth.yandex.ru/token`,
      {
        grant_type: 'authorization_code',
        code,
        // client_id: clientId,
        // client_secret: clientSecret,
      },
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
        }
      }).then(setValue)
      console.log(code)
    } 
  }, [ router ])
  return (
    <div>
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </div>
  )
}

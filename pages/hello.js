import React from 'react'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const clientId = 'a6f2398bd4c64495b59d50b7ffb745b7'; // ID приложения
const clientSecret = '5ba51ba2dcae47adb14ff38e56645f39'; // Пароль приложения
const redirectUri  = 'http://localhost:3000'; // Адрес, на который будет переадресован пользователь после прохождения авторизации


export default function Home() {
  React.useEffect(() => {
    if (location.search?.startsWith('?code=')) {
      const code = location.search.slice(6)
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
      }).then(console.log)
      console.log(code)
    } 
  }, [ ])
  return (
    <div>
      <a href={`https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientId}&redirect_uri=${location.pathname}`}>
        Авторизация через Яндекс
      </a>
    </div>
  )
}

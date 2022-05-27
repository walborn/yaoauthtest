import React from 'react'
import { useRouter } from 'next/router'

const clientId = 'a6f2398bd4c64495b59d50b7ffb745b7'; // ID приложения
const clientSecret = '5ba51ba2dcae47adb14ff38e56645f39'; // Пароль приложения
const redirectUri  = 'http://localhost:3000'; // Адрес, на который будет переадресован пользователь после прохождения авторизации


export default function Home() {
  const router = useRouter()
  return (
    <div>
      <a href={`https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientId}&redirect_uri=${router?.basePath}/hello`}>
        Авторизация через Яндекс
      </a>
    </div>
  )
}

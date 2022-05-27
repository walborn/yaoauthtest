import React from 'react'

const clientId = 'a6f2398bd4c64495b59d50b7ffb745b7'; // ID приложения
const clientSecret = '5ba51ba2dcae47adb14ff38e56645f39'; // Пароль приложения


export default function Home({ host }) {
  return (
    <div>
      <a href={`https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientId}&redirect_uri=${host}/hello`}>
        Авторизация через Яндекс
      </a>
    </div>
  )
}

// Home.getInitialProps = async ({ req }) => ({
//   host: `https://${req?.headers.host}`,
// })

export async function getServerSideProps({ req }) {
  return {
    props: { host: `https://${req?.headers.host}` }, // will be passed to the page component as props
  }
}
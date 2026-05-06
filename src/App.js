import React from 'react'
import PageTitle from './components/PageTitle';
import style from './styles/modules/app.module.scss'
import AppHeader from './components/AppHeader';
import AppContent from './components/appContent/AppContent';
import { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <>
      <Toaster position='bottom-right' toastOptions={{
        style:{
          fontSize:"i.4rem"
        },}
      }/>
      <div className='container'>
        <PageTitle>TODO LIST</PageTitle>
        <div className={style.app__wrapper}>
          <AppHeader />
          <AppContent />


        </div>
      </div>
    </>
  )
}

export default App
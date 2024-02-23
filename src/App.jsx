
import React from 'react'
import Dashboard from './Pages/Dashboard/Dashboard'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TransactionsPage from './Pages/Transactions/TransactionsPage'
import Support from './Pages/Support/Support'
function App() {
  const router=createBrowserRouter([{
    path : "/",
    element : <Dashboard/>
  },{
  path : "/transactions",
    element : <TransactionsPage/>
  },{
  path : "/support",
    element : <Support/>
  },

])
    return (
      <>
      <RouterProvider  router={router} />
      </>
    )
  }


export default App

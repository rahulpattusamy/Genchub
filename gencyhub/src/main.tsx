import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import router from './route'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryclient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryclient}>
      <RouterProvider router={router}/>
      <ReactQueryDevtools initialIsOpen={true}/>
    </QueryClientProvider>
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div style={{padding:'40px', fontFamily:'Arial'}}>
      <h1>Website deployed successfully</h1>
      <p>Your Arena AI project is now connected to Netlify.</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

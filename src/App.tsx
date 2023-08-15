import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const urlParams = new URLSearchParams(window.location.search);

  const userName = urlParams.get('telegramUserName');
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {userName && <h1>{`Welcome ${userName}`}</h1>}

    </>
  )
}

export default App

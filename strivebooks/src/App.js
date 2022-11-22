import './App.css'
import NavigationBar from './Components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Components/Footer'
import JumbotronElement from './Components/Jumbotron'
import LatestReleases from './Components/LatestReleases'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <JumbotronElement />
      <LatestReleases />
      <Footer />
    </div>
  )
}

export default App

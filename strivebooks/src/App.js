import './App.css'
import NavigationBar from './Components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Components/Footer'
import JumbotronElement from './Components/Jumbotron'
import TabbedBooks from './Components/TabbedBooks'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <JumbotronElement />
      <TabbedBooks />
      <Footer />
    </div>
  )
}

export default App

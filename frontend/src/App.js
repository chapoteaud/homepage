import React, { useState, useEffect } from 'react';
import './App.css';
// React Bootstrap Components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import Alert from 'react-bootstrap/Alert'

// Wordle Components
import Solver from './components/Wordle/Solver';
import WordleButton from './components/Wordle/Button';
// Nets Component
import Nets from './components/Nets/Nets'
// Fights Component
import Fights from './components/UFC/Fights'
// Car Components
import CarForm from './components/Car/CarForm'
import CarServices from './components/Car/CarServices';
// Chance Components
import ChanceForm from './components/Chance/ChanceForm';
import ChanceStats from './components/Chance/ChanceStats';
// Services to send/receive data
import getNetsGames from './services/getNetsGames';
import getUFCFights from './services/getUFCFights';
import chanceServices from './services/getChanceStats';
import getCarServices from './services/getCarServices';


const App = () => {
  
  const [netsGames, setNetsGames] = useState([])
  const [ufcFights, setUFCFights] = useState([])

  const [showAnswer, setShowAnswer] = useState(false)
  const [modal, setModal] = useState(false)
  const [open, setOpen] = useState(false)
  const [alert, setAlert] = useState('')
  
  const [services, setServices] = useState([])
  const [serviceName, setServiceName] = useState('')
  const [serviceMileage, setServiceMileage] = useState('')

  const [chanceStats, setChanceStats] = useState([])
  const [value, setValue] = useState([])
  const [statName, setStatName] = useState([])
  const [chanceAge, setChanceAge] = useState([])

  useEffect(() => {
    getNetsGames.getNetsNextGame().then(initialData => {
      setNetsGames(initialData)
    })
  }, [])

  useEffect(() => {
    getUFCFights.getFights().then(initialData => {
        setUFCFights(initialData)
    })
  }, [])

  useEffect(() => {
    chanceServices.getChanceStats().then(initialData => {
      setChanceStats(initialData)
    })
  }, [])

  useEffect(() => {
    getCarServices.getServices().then(initialData => {
      setServices(initialData)
    })
  }, [])


  const addStat = (event) => {
    event.preventDefault()
    const stat = {
      stat_type: statName,
      stat_value: value,
      age: chanceAge,
    }
    if (!stat.value || !stat.statName) {
      setAlert('Please enter a value')
    } else {
      chanceServices.addStat(stat).then(returnedStat => {
        setChanceStats(returnedStat)
        setValue('')
        setChanceAge('')
        setStatName('')
      })
    }
  }

  const addService = (event) => {
    event.preventDefault()
    const service = {
      serviceType: serviceName,
      serviceMileage: serviceMileage,
    }
    if (!service.serviceType || !service.serviceMileage) {
      console.log(service.serviceName)
      setAlert('Please enter a value')
    } else {
      getCarServices.addService(service).then(returnedServices => {
        setServices(services.concat(returnedServices))
        setServiceName('')
        setServiceMileage('')
      })
    }
  }

  // Controlled components needed here
  const handleServiceChange = (event) => {
    setServiceName(event.target.value)
  }

  const handleMileageChange = (event) => {
    setServiceMileage(event.target.value)
  }

  const handleStatChange = (event) => {
    setStatName(event.target.value)
  }

  const handleValueChange = (event) => {
    setValue(event.target.value)
  }

  const handleAgeChange = (event) => {
    setChanceAge(event.target.value)
  }

  const showModal = () => setModal(true)
  const closeModal = () => setModal(false)
  
  const buttonHandler = () => {
    setShowAnswer(true)
    setModal(false)
  }
  const resetHandler = () => {
    setShowAnswer(false)
  }

  const serviceNextDue =  getCarServices.recommendedIntervals
  
  const closeAlert = () => setAlert('')

  return (
    <div className="App">
      <div className="homepage container">
      <div id="wordle" className="box box1">
        <Card>
          <Card.Body>
            <Card.Header as="h3">Wordle</Card.Header>
            <Card.Text>
              The wordle of the day will be...
              <Collapse in={showAnswer}>
                  <div id="example-collapse-text">
                    <div><Solver /></div>                                                 
                  </div>
              </Collapse>
            </Card.Text>
            {showAnswer ? 
              <>                      
                <div><WordleButton buttonHandler={resetHandler} name="Reset" /></div>
              </> :
              <Button className="formBtn" onClick={showModal} size="sm" variant="danger">
                Reveal
              </Button>                                  
            }
            <Card.Footer className="text-muted">A simple Frontend Component...</Card.Footer>                
          </Card.Body>
        </Card>
        <Modal show={modal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Really?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to just give up? You can't go back you know...</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <WordleButton buttonHandler={buttonHandler} name="Reveal" variant="danger"/>
          </Modal.Footer>
        </Modal>
      </div>
      <div id="hatch" className="box box2">
        <Card>
          <Card.Body>
            <Card.Header as="h3">Hatch</Card.Header>
            <Card.Text>
              <Collapse in={open}>
                  <div id="example-collapse-text">
                      Connecting to the hatch api lives here
                  </div>
                </Collapse>
            </Card.Text>
            <Button className="formBtn" onClick={() => setOpen(!open)} size="sm">Send</Button>
            <Card.Footer className="text-muted">This component connects to an IoT device via a python service...</Card.Footer> 
          </Card.Body>
        </Card>          
      </div>
      <div id="car" className="box box3">
        <Card>
          <Card.Body>
            <Card.Header as="h3">Car</Card.Header>
            <Card.Text>
            {alert ? 
              <Alert variant="danger" onClose={closeAlert} dismissible>
                <Alert.Heading>{alert}</Alert.Heading>
              </Alert> :
                <></>            
            }                                          
              <div>
                <CarForm onSubmit={addService} serviceName={serviceName} serviceMileage={serviceMileage} handleServiceChange={handleServiceChange} handleMileageChange={handleMileageChange} />
              </div>
                <h4><u>Service Intervals</u></h4>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Service Type</th>
                      <th>Mileage</th>
                      <th>Next Due</th>
                    </tr>
                  </thead>
                  <tbody>
                      {services.map(service => <CarServices serviceName={service.service_type} serviceMileage={service.mileage} nextDue={serviceNextDue} key={service.service_id}/>)} 
                  </tbody>
                </Table>
              </Card.Text>
              <Card.Footer className="text-muted">This component connects to my car database...</Card.Footer> 
            </Card.Body>
          </Card>
      </div>
      <div id="chance" className="box box4">
        <Card>
          <Card.Body>
            <Card.Header as="h3">Chance's Stats</Card.Header>
            <Card.Text>
            {alert ? 
              <Alert variant="danger" onClose={closeAlert} dismissible>
                <Alert.Heading>{alert}</Alert.Heading>
              </Alert> :
                <></>            
            }  
            <div>
                <ChanceForm onSubmit={addStat} statName={statName} value={value} chanceAge={chanceAge} handleStatChange={handleStatChange} handleValueChange={handleValueChange} handleAgeChange={handleAgeChange}/>
              </div>
                <h4><u>Chance's Information</u></h4>
                <Table striped bordered hover size="sm" borderless="true">
                  <thead>
                    <tr>
                      <th>Stat Type</th>
                      <th>Value (lbs)</th>
                      <th>Age (months)</th>
                      <th>% Change</th>
                    </tr>
                  </thead>
                  <tbody>
                      <ChanceStats statType={chanceStats.stat_type} statValue={chanceStats.value} age={chanceStats.age} change={chanceStats.change}  key={chanceStats.id}/> 
                  </tbody>
                </Table>
            </Card.Text>
            <Card.Footer className="text-muted">This component connects to our Chance database...</Card.Footer> 
          </Card.Body>
        </Card>          
      </div>
      <div id="ufc" className="box box5">
        <Card>
          <Card.Body>
            <Card.Header as="h3">UFC Fights</Card.Header>
            <Card.Text>
              <ul className="no-bullets">
                {ufcFights.map(fight => {
                    return <Fights key={fight.fights_id} red_corner={fight.red_corner} blue_corner={fight.blue_corner}/>
                  })}
              </ul>
            </Card.Text>
            <Card.Footer className="text-muted">This component connects to my fights database...</Card.Footer> 
          </Card.Body>
        </Card> 
      </div>
      <div id="nets" className="box box6">
        <Card>
            <Card.Body>
              <Card.Header as="h3">Nets Games</Card.Header>
              <Card.Text>
                <ul className="no-bullets">
                  {netsGames.map(game => {
                      return <Nets key={game.id} visitorTeam={game.visitor_team.full_name} homeTeam={game.home_team.full_name} gameDate={game.date} startTime={game.status}/>
                    })}
                </ul>
              </Card.Text>
              <Card.Footer className="text-muted">This component calls to a public API (balldontlie.io)...</Card.Footer> 
            </Card.Body>
          </Card>
      </div>
      </div>    
    </div>
  )
}

export default App




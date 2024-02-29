import Hello from './assets/hello'
import Contact from './assets/Contact'
import Counter from './assets/Counter'

function App() {
    const helloData =[
      {name: 'Anirah', message: 'Hi tgere' },
      {name: 'tom' , message: 'Hello...'}
    ];
  return (
  <div className='App'>
    <Counter />
    {helloData.map((data, index)=> (
      <Hello key={index} name={data.name} message={data.message} />
    ))}
    <Contact email ="Anirach@gmail.com" phone = "08715144555"/>
  </div>
  ) 
      
}

export default App

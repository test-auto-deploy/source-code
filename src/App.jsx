import './App.css';
import {useState, useEffect} from 'react'

function App() {
    const [tag, setTag] = useState();

    useEffect(() => {
        const src = document.getElementsByTagName('script')[1].src
        if(src) {
            try {
                const str = src.match(/@(\d|-)*\//)[0]

                if (str) {
                    setTag(str.substring(1, str.length - 1))
                }
            }catch (_){}

        }
    }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h3>Test auto deploy</h3>
        <p>
            Tag: {tag}
        </p>

      </header>
    </div>
  );
}

export default App;

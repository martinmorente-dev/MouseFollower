import {useState, useEffect} from 'react'
import {MouseFollow} from './MouseFollow'

export const Mouse = () => {
    const [enabled, setEnabled] = useState(false)

    const [position, setPosition] = useState({x: 0, y:0})
  
    const resetPosition = [{x: 0, y:  0}]
  
    useEffect(() =>  {
      console.log(enabled)
      const handleMove = (event) => {
        const { clientX, clientY } = event
        setPosition({x: clientX, y: clientY})
    }
  
      if(enabled)
      {
        console.log('enabled')
        window.addEventListener('mousemove', handleMove)
    }
    
      return() => {
        window.removeEventListener('mousemove', handleMove)
        setPosition({x: resetPosition[0].x, y: resetPosition[0].y})
      }
    }, [enabled])

    return(
        <main>
            <MouseFollow  x={position.x} y={position.y}/>
            <button onClick={() => setEnabled(!enabled)}>
              {enabled ? 'Desactivar' : 'Activar'}
            </button>  
        </main>
    )
}
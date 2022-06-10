import { useState } from 'react'

const Clock = () => {
    const [time, setTime] = useState('');
    setTimeout(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    })
    return (
        <div>
        
            <h1 style={{fontSize:"40px"}}>{new Date().toLocaleTimeString()}</h1>
        </div>);
}
export default Clock;
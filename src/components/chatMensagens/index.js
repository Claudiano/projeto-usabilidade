import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import {v4 as uid} from 'uuid'

import './styles.css'

const myId = uid()
const socket = io('http://localhost:8080')
socket.on('connect', () => console.log('[IO] Connect => A new connection has been established'))

function ChatMensagens(){
    const [message, updateMessage] = useState('')
    const [messages, updateMessages] = useState([])

    console.log(myId)

    useEffect(() => {
        const handleNewMessage = newMessage => 
            updateMessages([...messages, newMessage])

        socket.on('chat.message', handleNewMessage)
        return () => socket.off('chat.message', handleNewMessage)

    }, [messages])


    const handleFormSubmit = event => {
        event.preventDefault()
        if (message.trim()){
            socket.emit('chat.message', {
                id: myId,
                message
            })
            updateMessage('')
        }
    }

    const hadleInputChange = event => {
        updateMessage(event.target.value)

    }

    return (
        <div className="ctn-mensagens">

            <main className="container">
                <ul className="list">

                    {messages.map((m, index) => (
                        <li className={`list__item list__item--${m.id === myId ? 'mine' : 'other'}`} key={index}>
                            <span className={`message message--${m.id === myId ? 'mine' : 'other'}`} >
                                { m.message }
                            </span>
                        </li>
                    ))}
                
                </ul>
                <form className="form" onSubmit={handleFormSubmit} >
                    <input 
                        className="form__field" 
                        onChange={hadleInputChange}
                        placeholder="Type a new message here"
                        type="text"
                        value={message}
                        />
                
                </form>
            </main>
        </div>
    )
}

export default ChatMensagens
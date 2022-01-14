import React from 'react'
import axios from 'axios'

function CatsList({ cats }) {
    
    const handleVoteUp = () => {
        
        axios.post('https://api.thecatapi.com/v1/votes', { 
                image_id: '111',
                sub_id: '222',
                value: 1 // Voting up (you like it) so send 1)
        }).then((res) => {
            console.log(res.data)
        })
    }
    const handleVoteDown = () => {
        axios.post('https://api.thecatapi.com/v1/votes', { 
                image_id: '111',
                sub_id: '222',
                value: 0
        }).then((res) => {
            console.log(res.data)
        })
    }
    return (
        <div className="cats-list">
        {/* <h1>{title}</h1> */}
        {cats.map((cat) => (
            <div className='card' key={cat.id}>
                <img src={cat.url} alt='cat'></img>
          
                    <h3> Cat ID: {cat.id}</h3>
                    <h3>Height: {cat.height}</h3>
                    <h3>Width: {cat.width}</h3>
                    <button onClick={handleVoteUp}>LIKE</button>
                    <button className='dislike-btn' onClick={handleVoteDown}>DISLIKE</button>

            </div>
        ))}
    </div>
    )
}

export default CatsList

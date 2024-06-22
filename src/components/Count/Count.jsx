const Count = ({count, handleCount, stock}) =>{

    const increment = () => {
        if(count < stock) handleCount(count => count + 1)
    }

    const decrement = () => {
        if(count > 1) handleCount(count => count - 1)
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Count
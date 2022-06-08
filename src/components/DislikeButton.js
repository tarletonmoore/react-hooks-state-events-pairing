import React, { useState } from "react"

function DislikeButton() {
    const [dislikes, setDislikes] = useState(0)

    function handleDislike() {
        setDislikes(dislikes => dislikes + 1)

    }

    return (
        <button onClick={handleDislike}>Dislikes: {dislikes}</button>
    )

}

export default DislikeButton
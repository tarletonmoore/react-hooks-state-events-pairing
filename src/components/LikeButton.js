import React, { useState } from "react"

function LikeButton() {


    const [liked, setLiked] = useState(0)


    function handleLike() {
        setLiked(liked => liked + 1)

    }



    return (
        <button onClick={handleLike}>Likes: {liked}</button>
    )

}




export default LikeButton
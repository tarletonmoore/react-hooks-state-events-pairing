import React, { useState } from "react"

function HideComment({ comments }) {
    const commentsList = comments.map((comment) => <li key={comment.user}>{comment.user}:  {comment.comment}</li>)
    const [commentsHidden, setCommentsHidden] = useState(false)

    function handleComment() {
        setCommentsHidden(commentsHidden => !commentsHidden)
    }

    const style = { "display": "none" }



    return (
        <div>
            <button onClick={handleComment}>{commentsHidden ? "Show Comments" : "Hide Comments"}</button>

            <div style={commentsHidden ? style : null}>

                {commentsList}

            </div>
        </div>
    )

}



export default HideComment
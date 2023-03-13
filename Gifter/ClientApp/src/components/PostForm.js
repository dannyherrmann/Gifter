import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { format } from "date-fns";

export const PostForm = () => {

    const [post, update] = useState({
        title: "",
        imageUrl: "",
        caption: "",
        userProfileId: 0
    })

    const navigate = useNavigate()

    const creationDateTime = () => {
        const convertDateTime = new Date(Date.now());
        return format(convertDateTime, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
    }

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const postToSendToAPI = {
            title: post.title,
            imageUrl: post.imageUrl,
            caption: post.caption,
            dateCreated: creationDateTime(),
            userProfileId: post.userProfileId
        }

        const sendData = async () => {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(postToSendToAPI)
            }
            const response = await fetch('post', options)
            await response.json()
            navigate("/posts")
        }
        sendData()
    }

    return (
        <form>
            <h2>Post Form</h2>
            <fieldset>
                <div>
                    <label>Title:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="post-input"
                        placeholder="title"
                        value={post.title}
                        onChange={
                            (event) => {
                                const copy = { ...post }
                                copy.title = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>ImageUrl:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="post-input"
                        placeholder="Image URL"
                        value={post.imageUrl}
                        onChange={
                            (event) => {
                                const copy = { ...post }
                                copy.imageUrl = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>Caption:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="post-input"
                        placeholder="Caption"
                        value={post.caption}
                        onChange={
                            (event) => {
                                const copy = { ...post }
                                copy.caption = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>User Profile ID:</label>
                    <input
                        required autoFocus
                        type="number"
                        className="post-input"
                        placeholder="user profile ID"
                        value={post.userProfileId}
                        onChange={
                            (event) => {
                                const copy = { ...post }
                                copy.userProfileId = event.target.valueAsNumber
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="submit-button">
                Save Post
            </button>
        </form>
    )
}
// import React from 'react'
import {connect} from 'react-redux'
import React, { Component, Fragment } from 'react'
import {Confirm} from "semantic-ui-react"
import Moment from 'react-moment'



class AnnouncementCard extends Component {

    state={
        showComments: false,
        allComments: [],
        comment: '',
        open: false,
        openComment: false
    }

    show = () => this.setState({ open: true })
    handleConfirm = (id) => {
        this.handleOnClick(id)
        this.setState({ 
            open: false 
        })
    }
    handleCancel = () => this.setState({ open: false })

    showComment = () => this.setState({ openComment: true })
    handleCommentConfirm = (id) => {
        this.handleCommentDelete(id)
        this.setState({ 
            openComment: false 
        })
    }
    handleCommentCancel = () => this.setState({ openComment: false })

    handleOnClick = (id) =>{
        // console.log(id)
        const token = localStorage.getItem("token")
        fetch(`https://lmskokua.herokuapp.com/api/v1/courses/${this.props.url}/announcements/${id}`,{
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
           }
        })
        .then(resp => resp.json())
        .then(data => {
            // console.log(data) //returns json message of delete success
            this.props.removeAnnouncement(id);
        })
    }

    containsEmbed = (url) => {
        let splitString = url.split("/")
        if(splitString.includes('embed')){
            return true
        }

    }
    embedIt = (videoId) => {
        let splitString = videoId.split("=")
        // console.log(splitString[1])
        return `https://www.youtube.com/embed/${splitString[1]}`
    }

    handleCommentChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCommentDelete = (commentId) => {
        // let deletedComment = this.state.allComments.filter(comment => {
        //     return comment.id !== commentId
        // })
        // this.setState({
        //     allComments: deletedComment
        // })
        const token = localStorage.getItem("token")
        fetch(`https://lmskokua.herokuapp.com/api/v1/courses/${this.props.url}/announcements/${this.props.announcement.id}/comments/${commentId}`,{
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(resp => resp.json())
        .then(data => {
            let deletedComment = this.state.allComments.filter(comment => {
                return comment.id !== commentId
            })
            this.setState({
                allComments: deletedComment
            })
        })
    }

    handleCommentSubmit = (e) => {
        e.preventDefault()
        const token = localStorage.getItem("token")
        fetch(`https://lmskokua.herokuapp.com/api/v1/courses/${this.props.url}/announcements/${this.props.announcement.id}/comments`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    comment: {
                        content: this.state.comment,
                        announcement_id: this.props.announcement.id,
                        commentable: {
                            position: this.props.currentUser.position,
                            id: this.props.currentUser.id

                    }
                }})
            })
            .then(resp => resp.json())
            .then(data => {
                // console.log(data)
                this.setState({
                    allComments: [...this.state.allComments, data]
                })
            })
            e.target.reset()
    }

    handleViewCommentsClick = (id) => {
        //only makes a fetch when viewComment is opened
        if(this.state.showComments){
            this.setState({
                showComments: false,
                allComments: []
            })
        }
        else{
            // console.log(id)
            // console.log(this.props.url)
            // console.log(token)
            const token = localStorage.getItem("token")
            // debugger
            fetch(`https://lmskokua.herokuapp.com/api/v1/courses/${this.props.url}/announcements/${id}/comments`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(resp => resp.json())
            .then(data => {
                // debugger
                
                //return ALL comments. filters which comments belong to the specific announcement clicked
                let specificAnnouncementComments = data.filter(comment => {
                    return comment.announcement.id === id 
                })
                this.setState({
                    showComments: true,
                    allComments: specificAnnouncementComments
                })
            })
        }
        
    }

    render() {
        // console.log(token)
        // debugger
        const {id, title, information, video_url,created_at} = this.props.announcement
        return (
        <div className="ui segment">
            <h1>{title}</h1>
            <p>{information}</p>
            <p>Posted on: <Moment format="MM/DD/YYYY">{created_at}</Moment> </p>
            
            {
                video_url ?
                <iframe width="500" height="300" src={this.embedIt(video_url)} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                :
                null
            }
           
            <div>
            {
                //checks if currentUser is defined and also if the user is a teacher
                Object.keys(this.props.currentUser).length !== 0 && this.props.currentUser.position === "teacher" ? 
                <Fragment>
                    <span data-tooltip="Delete Announcement" data-position="top left">
                        <i onClick={this.show} className="trash red big alternate outline icon"></i>
                        <Confirm
                                open={this.state.open}
                                header='Deleting this Announcement.'
                                onCancel={this.handleCancel}
                                onConfirm={() => this.handleConfirm(id)}
                                />
                    </span>
                    <span data-tooltip="Edit Announcement" data-position="top left">
                        <i onClick={()=> this.props.handleEditClick(id)} className="edit violet big outline icon"></i>
                    </span>

                    <span data-tooltip="View Comments" data-position="top left">
                        <i onClick={() => this.handleViewCommentsClick(id)} className="eye orange big icon"></i>
                    </span>
                    
                    
                </Fragment>   
                :
                <span data-tooltip="View Comments" data-position="top left">
                        <i onClick={() => this.handleViewCommentsClick(id)} className="eye big icon"></i>
                </span>
            }
            {
                this.state.showComments ?

                <Fragment>
                    <form onSubmit={this.handleCommentSubmit} className="ui form">
                        <div className="field">
                            <br></br>
                            {/* <label>Post Comment</label> */}
                            <textarea required name="comment" placeholder="Share your comments or thoughts! Keep it friendly!" onChange={this.handleCommentChange} rows="2"></textarea>
                        </div>
                        <button className="ui blue button" type="submit" value="Submit">Comment</button>
                    </form>
                    {   
                        this.state.allComments.length !== 0?
                        this.state.allComments.map(comment =>{
                            return <div key={comment.id} className="ui comments">
                                {/* <div className="avatar">
                                    <img className="ui mini image" src={comment.commentable.image_url}></img>
                                </div>
                                <h4>{comment.content}</h4> */}
                            
                                <div className="comment">
 
                                <div className="avatar">
                                    <img className="ui mini image" src={comment.commentable.image_url}/>
                                </div>
                                <p>{comment.content}</p>
                                <div className="content">
                                    <div className="author">
                                    By: {comment.commentable.username} | {comment.commentable.position}
                                    </div>
                                </div>
                               
                                {/* <p>By: {comment.commentable.username} | {comment.commentable.position}</p> */}
                                {
                                    comment.commentable.id === this.props.currentUser.id ?
                                    <span data-tooltip="Remove Comment" data-position="top left">
                                        <i onClick={()=> this.showComment()} className="hand big scissors icon"></i>
                                        <Confirm
                                            open={this.state.openComment}
                                            header='Removing this Comment.'
                                            onCancel={() => this.handleCommentCancel()}
                                            onConfirm={() => this.handleCommentConfirm(comment.id)}
                                            />
                                    </span>
                                    :
                                    // <div className="ui segment">
                                    // <div className="ui active inverted dimmer">
                                    //     <div className="ui small text loader">Loading</div>
                                    // </div>
                                    // </div>
                                    null
                                }
                                </div>
                            </div>
                        })
                        :
                        <div className="ui segment">
                            <h2>No Comments...yet</h2>
                        </div>
                        
                    }
                </Fragment>
                
                :
                null
            }
            </div>
        </div>
        )
    }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}

function mapDispatchToProps(dispatch){
    return {
        removeAnnouncement: (announcementId)=> {
            dispatch({type: "REMOVE_ANNOUNCEMENT", payload: announcementId})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCard)
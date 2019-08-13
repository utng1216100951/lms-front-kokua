import {connect} from 'react-redux'
import React, {Component, Fragment} from 'react'
import {Confirm} from "semantic-ui-react"
import Moment from 'react-moment'
import {MDBBtn, MDBIcon} from "mdbreact";


class AnnouncementCard extends Component {

    state = {
        showComments: false,
        allComments: [],
        comment: '',
        open: false,
        openComment: false
    };

    show = () => this.setState({open: true})
    handleConfirm = (id) => {
        this.handleOnClick(id)
        this.setState({
            open: false
        })
    };
    handleCancel = () => this.setState({open: false})

    showComment = () => this.setState({openComment: true})
    handleCommentConfirm = (id) => {
        this.handleCommentDelete(id)
        this.setState({
            openComment: false
        })
    };
    handleCommentCancel = () => this.setState({openComment: false})

    handleOnClick = (id) => {
        // console.log(id)
        const token = localStorage.getItem("token")
        fetch(`https://lmskokua.herokuapp.com/api/v1/courses/${this.props.url}/announcements/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(resp => resp.json())
            .then(data => {
                this.props.removeAnnouncement(id);
            })
    };

    containsEmbed = (url) => {
        let splitString = url.split("/")
        if (splitString.includes('embed')) {
            return true
        }

    }
    embedIt = (videoId) => {
        let splitString = videoId.split("=");
        return `https://www.youtube.com/embed/${splitString[1]}`
    };

    handleCommentChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleCommentDelete = (commentId) => {

        const token = localStorage.getItem("token")
        fetch(`https://lmskokua.herokuapp.com/api/v1/courses/${this.props.url}/announcements/${this.props.announcement.id}/comments/${commentId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(resp => resp.json())
            .then(data => {
                let deletedComment = this.state.allComments.filter(comment => {
                    return comment.id !== commentId
                });
                this.setState({
                    allComments: deletedComment
                })
            })
    };

    handleCommentSubmit = (e) => {
        e.preventDefault()
        const token = localStorage.getItem("token")
        fetch(`https://lmskokua.herokuapp.com/api/v1/courses/${this.props.url}/announcements/${this.props.announcement.id}/comments`, {
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
                }
            })
        })
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    allComments: [...this.state.allComments, data]
                })
            });
        e.target.reset()
    };

    handleViewCommentsClick = (id) => {
        if (this.state.showComments) {
            this.setState({
                showComments: false,
                allComments: []
            })
        } else {
            const token = localStorage.getItem("token");
            fetch(`https://lmskokua.herokuapp.com/api/v1/courses/${this.props.url}/announcements/${id}/comments`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    let specificAnnouncementComments = data.filter(comment => {
                        return comment.announcement.id === id
                    });
                    this.setState({
                        showComments: true,
                        allComments: specificAnnouncementComments
                    })
                })
        }

    };

    render() {
        const {id, title, information, video_url, created_at} = this.props.announcement;
        return (
            <div className="ui segment">
                <h1>{title}</h1>
                <p>{information}</p>
                <p>Posted on: <Moment format="MM/DD/YYYY">{created_at}</Moment></p>

                {
                    video_url ?
                        // eslint-disable-next-line jsx-a11y/iframe-has-title
                        <iframe width="500" height="300" src={this.embedIt(video_url)} frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                        :
                        null
                }

                <div>
                    {
                        //checks if currentUser is defined and also if the user is a teacher
                        Object.keys(this.props.currentUser).length !== 0 && this.props.currentUser.position === "teacher" ?
                            <Fragment>
                    <span data-tooltip="Delete Announcement" data-position="top left">
                        <MDBIcon icon="trash" onClick={this.show} className="red-text pink-text ml-3" size="2x"/>
                        <Confirm
                            open={this.state.open}
                            header='Deleting this Announcement.'
                            onCancel={this.handleCancel}
                            onConfirm={() => this.handleConfirm(id)}
                        />
                    </span>
                                <span data-tooltip="Edit Announcement" data-position="top left">
                                    <MDBIcon icon="edit" onClick={() => this.props.handleEditClick(id)}
                                             className="amber-text " size="2x pink-text ml-3"/>
                    </span>

                                <span data-tooltip="View Comments" data-position="top left">
                                    <MDBIcon icon="comments" onClick={() => this.handleViewCommentsClick(id)}
                                             className="cyan-text" size="2x pink-text ml-3"/>
                    </span>


                            </Fragment>
                            :
                            <span data-tooltip="View Comments" data-position="top left">
                                 <MDBIcon icon="comments" onClick={() => this.handleViewCommentsClick(id)}
                                          className="cyan-text" size="2x pink-text ml-3"/>
                </span>
                    }
                    {
                        this.state.showComments ?

                            <Fragment>
                                <form onSubmit={this.handleCommentSubmit} className="ui form">
                                    <div className="field">
                                        <br></br>
                                        <textarea required name="comment"
                                                  placeholder="Share your comments or thoughts! Keep it friendly!"
                                                  onChange={this.handleCommentChange} rows="2"/>
                                    </div>
                                    <MDBBtn gradient="purple" type="submit" value="Submit">Comment</MDBBtn>
                                </form>
                                {
                                    this.state.allComments.length !== 0 ?
                                        this.state.allComments.map(comment => {
                                            return <div key={comment.id} className="ui comments">

                                                <div className="comment">
                                                    <div className="avatar">
                                                        <img className="ui mini image"
                                                             src={comment.commentable.image_url} alt={""}/>
                                                    </div>
                                                    <p>{comment.content}</p>
                                                    <p>By: {comment.commentable.username} | {comment.commentable.position}
                                                    </p>

                                                    {
                                                        comment.commentable.id === this.props.currentUser.id ?
                                                            <span data-tooltip="Remove Comment"
                                                                  data-position="top left">
                                                                <MDBIcon icon="cut" onClick={() => this.showComment()}/>
                                                                <Confirm
                                                                    open={this.state.openComment}
                                                                    header='Removing this Comment.'
                                                                    onCancel={() => this.handleCommentCancel()}
                                                                    onConfirm={() => this.handleCommentConfirm(comment.id)}
                                                                />
                                                            </span>
                                                            :

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

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeAnnouncement: (announcementId) => {
            dispatch({type: "REMOVE_ANNOUNCEMENT", payload: announcementId})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCard)

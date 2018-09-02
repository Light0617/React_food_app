import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderComments(comments){
        const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        // let CommentsSummary = comments.map((comment) => {
        //     return (
        //         <div key={comment.id} className="list-unstyled">
        //             <p>{comment.comment}</p>
        //             <p>-- {comment.author}, {comment.date}</p>
        //             <br/>
        //         </div>
        //     );
        // });

        const CommentsSummary = comments.map((comment) => {
            let comment_date = new Date(comment.date);
            return(
               <ul className="list-unstyled"> 
                    <li>{comment.comment}</li>
                    <li> - - {comment.author}, {monthName[comment_date.getMonth()]} {comment_date.getDate() + 1}, {comment_date.getFullYear()}</li>
               </ul>
            );
        });

        return (
            <div>
                <h4>Comments</h4>
                {CommentsSummary}
            </div>
        );
    }

    renderDish(dish){
        const comments = (comments) => {
            return comments != null ? this.renderComments(comments) : <div/>
        };
        const dishDetail = (dish) => {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle> {dish.name} </CardTitle>
                        <CardText> {dish.description} </CardText>
                    </CardBody>
                </Card>
            );
        }

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {dishDetail(dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {comments(dish.comments)}
                </div>
            </div>
        );
    }

    render() {
        return this.props.dish != null ? this.renderDish(this.props.dish) : <div/>
    }
}

export default DishDetail;
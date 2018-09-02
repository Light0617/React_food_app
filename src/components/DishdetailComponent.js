import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderComments(comments){
        const CommentsSummary = comments.map((comment) => {
            let comment_date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'})
            .format(new Date(Date.parse(comment.date)));

            return(
               <ul className="list-unstyled"> 
                    <li>{comment.comment}</li>
                    <li> - - {comment.author}, {comment_date}</li>
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
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {dishDetail(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {comments(dish.comments)}
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return this.props.dish != null ? this.renderDish(this.props.dish) : <div/>
    }
}

export default DishDetail;
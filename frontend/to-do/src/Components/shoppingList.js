import React, { Component } from 'react'
import { 
    ListGroup,
    ListGroupItem,
    Button,
    Container
} from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { getItems, deleteItems } from '../actions/itemActions'
import PropTypes from 'prop-types'


class ShoppingList extends Component {
    
    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItems(id)
    }

    render() {
        const { items } = this.props.item
        return (
            <Container className="m-5">
                <ListGroup className="m-5">
                    <TransitionGroup className="Shopping-list">
                        {items.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button className="remove-btn" color="danger" size="sm" onClick={() => this.onDeleteClick(_id)}>&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    deleteItems: PropTypes.func.isRequired
}

const matchStateToProps = (state) => ({
    item: state.item
})


export default connect(matchStateToProps, { getItems, deleteItems })(ShoppingList)
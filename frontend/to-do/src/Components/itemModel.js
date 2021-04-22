import React, { Component } from 'react'
import { Button,
         Modal,
         ModalHeader,
         ModalBody,
         Form,
         FormGroup, 
         Label,
         Input
        } from 'reactstrap'
import { connect } from 'react-redux'
import { addItems } from '../actions/itemActions'
import PropTypes from 'prop-types'

class ItemModal extends Component {
    state = {
        isOpen: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const newItem = {
            name: this.state.name
        }
        this.props.addItems(newItem)

        this.toggle()
    }

    render() {
        return (
            <div>
                <Button color="dark" style={{marginBlock: '2rem'}} onClick={this.toggle}>
                    Add Item
                </Button>
                <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input type='text' name="name" id="item" placeholder='Add shopping item' onChange={this.onChange}></Input>
                                <Button color="dark" style={{marginTop: '2rem'}} block>Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
ItemModal.propTypes = {
    item: PropTypes.object.isRequired,
    addItems: PropTypes.func.isRequired
}

const matchStateToProps = (state) => ({
    item: state.item
})

export default connect( matchStateToProps, { addItems })(ItemModal)
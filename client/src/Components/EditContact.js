import { useEffect, useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getOneContact, updateContact } from '../Redux/Actions/ContactActions'

const EditContact=()=>{
    

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOneContact(id))
    },[])

    const oneContact = useSelector(state=>state.ContactReducer.oneContact)

    const {id} = useParams()
    const [name,setName] = useState(oneContact.name)
    const [age,setAge] = useState(oneContact.age)
    const [email,setEmail] = useState(oneContact.email)

    useEffect(()=>{
        setName(oneContact.name)
        setAge(oneContact.age)
        setEmail(oneContact.email)
    },[oneContact])
    const navigate = useNavigate()
    const handleEdit=(a)=>{
        a.preventDefault()
        dispatch(updateContact({name,age,email},id,navigate))
    }
    return(
        <div>
             <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control value={age} onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Enter age" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />       
      </Form.Group>

      
      <Button onClick={(e)=>handleEdit(e)} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    )
}

export default EditContact
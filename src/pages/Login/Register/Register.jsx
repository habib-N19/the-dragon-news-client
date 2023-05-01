import React, { useContext } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider'

const Register = () => {
  const { createUser } = useContext(AuthContext)
  const handleRegister = event => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    createUser(email, password)
      .then(result => {
        const createdUser = result.user
        console.log(createdUser)
      })
      .catch(error => console.error(error))
  }
  return (
    <Container className='w-25 mx-auto'>
      <h3>Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            name='name'
            required
            placeholder='Enter Name'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPhotoUrl'>
          <Form.Label>Photo Url</Form.Label>
          <Form.Control
            type='text'
            name='url'
            required
            placeholder='Enter photo url'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            name='email'
            required
            placeholder='Enter email'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            required
            placeholder='Password'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check
            type='checkbox'
            name='accept'
            label='Accept Terms and Conditions'
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Login
        </Button>
        <br />
        <Form.Text className='text-secondary'>
          Already have an account? <Link to='/login'>Login</Link>
        </Form.Text>
        <Form.Text className='text-success'></Form.Text>
        <Form.Text className='text-danger'></Form.Text>
      </Form>
    </Container>
  )
}

export default Register

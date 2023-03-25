import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { validateProductName, validateCategory, validatePrice, validateUrl } from '../helpers/validateFields';

const Products = () => {
    // const [title, setTitle] = useState('');
    // const [category, setCategory] = useState('');
    // const [price, setPrice] = useState(0);
    // const [imageUrl, setImageUrl] = useState('');
    // const [descripcion, setDescripcion] = useState('');

    const [inputs, setInputs] = useState({})
    //navigate
    const navigate = useNavigate()

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs((values) => ({ ...values, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //Aseguro que los campos no esten vacios
        if (!inputs.title || !inputs.category || !inputs.price || !inputs.imageUrl || !inputs.desc) {
            Swal.fire("Oops", "Some fields are required", "error")
            return;
        }

        //valido los campos
        if (!validateProductName(inputs.title) ||
            !validateCategory(inputs.category) ||
            !validatePrice(inputs.price) ||
            !validateUrl(inputs.imageUrl)
        ) {
            Swal.fire("Oops", "Some data is invalid", "error")
            return;
        }

        //envio los datos
        const newProduct = {
            title: inputs.title,
            category: inputs.category,
            price: inputs.price,
            imageUrl: inputs.imageUrl,
            desc: inputs.desc,
        }
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Save!'

        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await fetch({
                        method: 'POST',
                        headers: {
                            "Content-type": 'aplication/json',
                        },
                        body: JSON.stringify(newProduct)
                    })
                    console.log(res)
                    if (res.status === 201) {
                        Swal.fire('Created', 'Tu producto seguardo correctamente', 'success')
                        //Recarga la pagina
                        //getApi()
                        //Navega a la pag principal
                        navigate("/product/table")

                        //reseteo el form
                        e.target.reset()
                    }
                } catch (error) {
                    console(error)
                }
            }
        })
    }
    return (
        <div>
            <h2>Add a new menu item</h2>
            <Container className='my-5'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="id">
                        <Form.Label>ID</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter ID"
                            value={inputs.Id || ""}
                            name="Id"
                            // value={newItem.id}
                            // onSubmit={handleSubmit}
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>

                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter title"
                            value={inputs.title || ""}
                            name="title"
                            // value={newItem.title}
                            // onSubmit={handleSubmit}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="category">
                        <Form.Label>Category</Form.Label>
                        <Form.Select value={inputs.category || ""} name="category" onChange={(e) => handleChange(e)}>
                            <option value="">Select a category</option>
                            <option value="Pizzas">Pizzas</option>
                            <option value="Hamburguesa">Hamburguesa</option>
                            <option value="Option 3">Cafeteria</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter price"
                            value={inputs.price || ""}
                            name="price"
                            // value={newItem.price}
                            // onSubmit={handleSubmit}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="img">
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter img"
                            value={inputs.imageUrl || ""}
                            name="imageUrl"
                            // value={newItem.img}
                            // onSubmit={handleSubmit}
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>
                    <Form.Group controlId="desc">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter desc"
                            value={inputs.desc || ""}
                            name="desc"
                            // value={newItem.desc}
                            // onSubmit={handleSubmit}
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>
                    <Button type='submit'>
                        Agregar
                    </Button>
                </Form>
            </Container>
        </div>
    )
}


export default Products;




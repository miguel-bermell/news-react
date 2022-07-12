import { useState, useEffect } from "react"
import styled from "styled-components"
import useFetch from "../../hooks/useFetch"
import createNews from "../../services/createNews"
import notifyService from "../../services/notify"

const INITIAL_STATE = {
  title: '',
  description: '',
  content: '',
  author: '',
  image: '',
  userId: '629c15039d04794dcf3b16ec'
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 2rem;
`

const Input = styled.input`
  padding: 5px;
  border-width: 3px;
  border-image: linear-gradient(to right, #11998e, #38ef7d);
  border-image-slice: 1;
  outline: 0;
  &:focus {
    border-image: linear-gradient(to left, #11998e, #38ef7d);
    border-image-slice: 1;
  }
`

const Textarea = styled.textarea`
  border-image: linear-gradient(to right, #11998e, #38ef7d);
  border-width: 3px;
  border-image-slice: 1;
  min-height: 100px;
  outline: 0;
  padding: 5px;
  &:focus {
    border-image: linear-gradient(to left, #11998e, #38ef7d);
    border-image-slice: 1;
  }
`

const Button = styled.button`
  border: none;
  border-radius: 3px;
  color: #2e2d2d;
  cursor: pointer;
  font-size: 1em;
  margin-top: 1em;
  font-weight: 600;
  padding: 0.65em 1em;
  &:hover {
    opacity: 0.8;
  }
`

const FormError = styled.p`
  margin: 0;
  color: red;
  font-size: 12px;
`

export default function FormNews({ setNewsForm }) {

  const [news, setNews] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState({})
  const [submited, isSubmited] = useState(false)
  const { callEndpoint, loading } = useFetch()

  useEffect(() => {
    setErrors(validateForm(news))
  }, [news])
  
  const handleChange = (e) => {
    setNews({
      ...news,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeFiles = (e) => {
    const file = e.target.files[0]
    console.log(file)
    setNews({
      ...news,
      [e.target.name]: e.target.files[0]
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    isSubmited(true)

    if (Object.keys(errors).length) {
      notifyService.error('Revisa los campos con errores')
      return
    }

    const formData = new FormData()

    for (const input in news) {
      formData.append(input, news?.[input]);
    }

    const { success, message, data } = await callEndpoint(createNews(formData))
    if (!success) return notifyService.error(message)

    notifyService.success(message)
    setNewsForm(data)
    setNews(INITIAL_STATE)
    isSubmited(false)
    e.target.reset()
  }
  
  const validateForm = (form) => {
    const errors = {}
    const { title, description, content, author } = form

    if (!title) {
      errors.title = 'El título es requerido'
    }
    if (!description) {
      errors.description = 'La descripción es requerida'
    }
    if (!content) {
      errors.content = 'El contenido es requerido'
    }
    if (!author) {
      errors.author = 'El autor es requerido'
    }
    return errors
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input onChange={handleChange} type="text" name="title" value={news.title} placeholder="Título" />
      <FormError>{submited && errors.title}</FormError>
      <Input onChange={handleChange} type="text" name="description" value={news.description} placeholder="Descripción" />
      <FormError>{submited && errors.description}</FormError>
      <Textarea onChange={handleChange} name="content" value={news.content} placeholder="Contenido"></Textarea>
      <FormError>{submited && errors.content}</FormError>
      <Input onChange={handleChange} type="text" name="author" value={news.author} placeholder="Autor" />
      <FormError>{submited && errors.author}</FormError>
      <input onChange={handleChangeFiles} type="file" name="image"  />
      <Button disabled={loading}>Añadir noticia</Button>
    </Form>
  )
}

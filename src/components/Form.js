import React from "react"

export default function Form(props) {
  const [formData, setFormData] = React.useState({
    email: "",
    password: ""
  })

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value,
      }))
  }

  return (
    <form
    onSubmit={event => {
      event.preventDefault()
      props.handleSubmit(formData)
    }}
    >
      <label htmlFor="email">Email</label>
      <input
      type="text"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type = "password"
        id = "password"
        name = "password"
        value = {formData.password}
        onChange = {handleChange}
      />
      <button>Submit</button>
    </form>
  )
}

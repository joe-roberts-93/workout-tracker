import React from "react"

export default function Form(props) {
  const [formData, setFormData] = React.useState({
    email: ""
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
      <button>Submit</button>
    </form>
  )
}

import React from "react"

export default function FindAccount() {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <button>Submit</button>
    </form>
  )
}

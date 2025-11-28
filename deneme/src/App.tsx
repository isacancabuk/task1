import './App.css'

interface User {
    name: string
    surname: string
    age: number
    gender: 'male' | 'female'
    description: any
    jobInfo: {
        jobName: string
        jobId: number
    }
}

function App() {
  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const user: User = {
      name: formData.get("name") as string,
      surname: formData.get("surname") as string,
      age: Number(formData.get("age")),
      gender: formData.get("gender") as 'male' | 'female',
      description: formData.get("description"),
      jobInfo: {
        jobName: formData.get("jobName") as string,
        jobId: Number(formData.get("jobId"))
      }
    }

    console.log(user)
  }

  return (
    <main>
    <form onSubmit={formSubmitHandler}>
        <label>Name:</label>
        <input type='text' name='name'/>
        <label>Surname:</label>
        <input type='text' name='surname'/>
        <label>Age:</label>
        <input type='number' name='age'/>
        <label>Gender:</label>
        <select name='gender'>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
        <label>Description:</label>
        <textarea name='description'/>
        <label>Job Name:</label>
        <input type='text' name='jobName'/>
        <label>Job Id:</label>
        <input type='number' name='jobId'/>
        <button>Add User</button>
    </form>
    </main>
  )
}

export default App

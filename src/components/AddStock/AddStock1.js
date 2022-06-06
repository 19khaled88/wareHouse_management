import React from 'react'
import { useForm } from 'react-hook-form'

const AddStock1 = () => {
  const { register, handleSubmit } = useForm()
  const [data, setData] = useState('')
  return (
    <div>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        {/* <Header /> */}
        <input {...register('firstName')} placeholder="First name" />
        <select {...register('category')}>
          <option value="">Select...</option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
        </select>
        <textarea {...register('aboutYou')} placeholder="About you" />
        <p>{data}</p>
        <input type="submit" />
      </form>
    </div>
  )
}

export default AddStock1

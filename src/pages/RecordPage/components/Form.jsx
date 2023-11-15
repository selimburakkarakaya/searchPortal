import React from 'react'
import './form.css'
import { getData, idGenerator } from '../../../app/utils';
import { useDispatch, useSelector } from 'react-redux';
import { setValid } from '../../../features/Slice';

function Form() {
  const dispatch = useDispatch()
  const valid = useSelector(state => state.selection.valid)
  const [formData, setFormData] = React.useState({ name: '', country: '', city: '', email: '', website: '' });
  const [selectInput, setSelectInput] = React.useState();
  const data = getData();

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.id]: e.target.value })
    setSelectInput(e.target.id);
  }

  React.useEffect(() => {
    if (selectInput === 'name') {
      if (!formData?.name) {
        dispatch(setValid({ ...valid, nameV: null }))
      } else if (formData?.name?.trim().indexOf(' ') != -1) {
        dispatch(setValid({ ...valid, nameV: true }))
      } else {
        dispatch(setValid({ ...valid, nameV: false, errorText: 'Name and Surname should contain at least 2 words' }))
      }
    }
    if (selectInput === 'country') {
      if (!formData?.country) {
        dispatch(setValid({ ...valid, countryV: null }))
      } else if (/^[a-zA-Z\s]*$/.test(formData?.country)) {
        dispatch(setValid({ ...valid, countryV: true }))
      } else {
        dispatch(setValid({ ...valid, countryV: false, errorText: 'Please do not use special characters and numbers.' }))
      }
    }
    if (selectInput === 'city') {
      if (!formData?.city) {
        dispatch(setValid({ ...valid, cityV: null }))
      } else if (/^[a-zA-Z\s]*$/.test(formData?.city)) {
        dispatch(setValid({ ...valid, cityV: true }))
      } else {
        dispatch(setValid({ ...valid, cityV: false, errorText: 'Please do not use special characters and numbers.' }))
      }
    }
    if (selectInput === 'email') {
      if (!formData?.email) {
        dispatch(setValid({ ...valid, emailV: null }))
      } else if (formData?.email?.trim().indexOf(' ') != -1) {
        dispatch(setValid({ ...valid, emailV: true }))
      } else {
        dispatch(setValid({ ...valid, nameV: false, errorText: 'You cannot leave spaces between letters in Email addresses.' }))
      }
    }
    if (selectInput === 'website') {
      if (!formData?.website) {
        dispatch(setValid({ ...valid, websiteV: null }))
      } else if (formData?.website?.trim().indexOf(' ') != -1) {
        dispatch(setValid({ ...valid, websiteV: true }))
      } else {
        dispatch(setValid({ ...valid, websiteV: false, errorText: 'You cannot leave spaces between letters in URL addresses.' }))
      }
    }

  }, [formData, selectInput])


  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = data;
    newData.push([idGenerator(), ...Object.values(formData)])

    sessionStorage.setItem('data', JSON.stringify(newData));
  }

  return (
    <div className="form-con">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name Surname</label>
        <input type="text" id="name" className={valid.nameV === false ? 'invalidInput validInput' : 'validInput'} placeholder="Enter name and surname" onChange={handleChange} required />
        <label htmlFor="country">Country</label>
        <input type="text" id="country" className={valid.countryV === false ? 'invalidInput validInput' : 'validInput'} placeholder="Enter a country" onChange={handleChange} required />
        <label htmlFor="city">City</label>
        <input type="text" id="city" className={valid.cityV === false ? 'invalidInput validInput' : 'validInput'} placeholder="Enter a city" onChange={handleChange} required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" className={valid.emailV === false ? 'invalidInput validInput' : 'validInput'} placeholder="Enter a e-mail (abc@xyz.com)" onChange={handleChange} required />
        <label htmlFor="website">Website</label>
        <input type="url" id="website" className={valid.websiteV === false ? 'invalidInput validInput' : 'validInput'} placeholder="Enter a website (https://xyz.com)" onChange={handleChange} required />
        <button className="saveBtn" type="submit">Add</button>
      </form>
    </div>
  )
}

export default Form
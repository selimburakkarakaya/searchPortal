import React from 'react'
import RecordPageHeader from './components/RecordPageHeader'
import Form from './components/Form'
import Popup from './components/Popup'

function RecordPage() {
  return (
    <div>
      <div>
        <RecordPageHeader />
      </div>
      <div>
        <Form />
      </div>
      <div>
        <Popup />
      </div>
    </div>
  )
}

export default RecordPage
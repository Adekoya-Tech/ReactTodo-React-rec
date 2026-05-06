import React, { useState } from 'react'
import Button, { SelectButton } from './Button'
import styles from "../styles/modules/app.module.scss"
import TodoModals from './modals/TodoModals';

const AppHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className={styles.appHeader}>
        
        <Button variant="primary" onClick={()=>setModalOpen(true)}>Click Me</Button>
        <SelectButton id="status">
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Complete</option>
        </SelectButton>
        <TodoModals type="add" modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  )
}

export default AppHeader
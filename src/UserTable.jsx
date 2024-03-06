import { useState } from 'react'
import ReactModal from 'react-modal'
// import Modal from './Modal'
import './Modal.css'
import Card from './Card'
const UserTable = ({ users }) => {
  const [showModal, setShowModal] = useState(false)
  const [userId, setId] = useState(-1)
  const toggleModal = () => {
    showModal(!showModal)
  }
  //    if (showModal) {
  //      document.body.classList.add('active-modal')
  //    } else {
  //      document.body.classList.remove('active-modal')
  //    }
  return (
    <>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>User No</th>
            <th>User Name</th>
            <th>A/C</th>
            <th>Balance</th>
            <th>Detals</th>
          </tr>
        </thead>
        <tbody>
          {users
            ? users.map((user, index) => (
                <tr key={user}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.id}</td>
                  <td>{user.balance}</td>
                  <td>
                    <button
                      onClick={() => {
                        setShowModal(true), setId(index)
                      }}
                    >
                      show
                    </button>
                    {showModal && index == userId && (
                     
                        <div>
                          <div onClick={toggleModal} className="overlay"></div>
                          <div className="modal-content">
                            <Card
                              key={user.id}
                              id={user.id}
                              userName={user.name}
                              balance={user.balance}
                              transactions={user.transection}
                            />
                            <button
                              className="close-modal"
                              onClick={() => setShowModal(false)}
                            >
                              CLOSE
                            </button>
                          </div>
                        </div>
                       
                    )}
                    {/* {showModal ? (
                      <Modal>
                        <div>
                          <h1>Would you like to adopt ?</h1>
                          <div>
                            <button>Yes</button>
                            <button onClick={() => setShowModal(false)}>
                              No
                            </button>
                          </div>
                        </div>
                      </Modal>
                    ) : null} */}
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </>
  )
}
export default UserTable

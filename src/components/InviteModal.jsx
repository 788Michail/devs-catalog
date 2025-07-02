export default function InviteModal({ person, onClose, onConfirm }) {
  if (!person) return null

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
      <div className='bg-white shadow-lg p-4 rounded-lg'>
        <h2 className='font-bold mb-4'>Send Invite</h2>
        <p>
          Are you sure you want to invite{' '}
          <b>
            {person.firstName} {person.lastName}
          </b>
          ?
        </p>
        <div className='flex justify-end gap-2 mt-4'>
          <button onClick={onClose} className='px-4 py-2 bg-gray-300 rounded-lg cursor-pointer hover:bg-gray-400'>
            Cancel
          </button>
          <button
            className='bg-indigo-500 rounded-lg px-4 py-2 hover:bg-indigo-800 cursor-pointer'
            onClick={() => {
              onConfirm(person)
              onClose()
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

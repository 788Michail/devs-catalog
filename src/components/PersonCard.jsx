export default function PersonCard({ person, onInvite, onClick, showRemoveButton }) {
  return (
    <div className='w-full p-4 border bg-white/80 rounded-lg shadow-white'>
      <li>
        <p>
          <b>Full Name: </b>
          {person.firstName} {person.lastName}
        </p>
        <p>
          <b>Email: </b>
          {person.email}
        </p>
        <p>
          <b>Preferred Language: </b>
          {person.language}
        </p>
      </li>
      <div className='flex justify-between gap-2'>
        <button
          onClick={() => onInvite(person)}
          className='mt-3 px-3 py-1 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700'
        >
          Invite
        </button>
        {showRemoveButton && (
          <button
            onClick={() => onClick(person)}
            className='mt-3 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-700'
          >
            Remove
          </button>
        )}
      </div>
    </div>
  )
}

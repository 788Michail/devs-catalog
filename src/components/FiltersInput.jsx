export default function FiltersInput({ lastNameFilter, setLastNameFilter, languageFilter, setLanguageFilter }) {
  return (
    <div className='mb-4 flex flex-col sm:flex-row gap-4 items-center'>
      <input
        type='text'
        placeholder='Search by Last Name'
        value={lastNameFilter}
        onChange={e => setLastNameFilter(e.target.value)}
        className='p-2 bg-white border rounded-lg w-full sm:w-1/3'
      />
      <select
        value={languageFilter}
        onChange={e => setLanguageFilter(e.target.value)}
        className='py-3 px-2 bg-white border rounded-lg w-full sm:w-1/3'
      >
        <option value=''>Select Languages</option>
        <option value='Python'>Python</option>
        <option value='Javascript'>JavaScript</option>
        <option value='Golang'>Golang</option>
      </select>
    </div>
  )
}

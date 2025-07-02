import { useCallback, useEffect, useState } from 'react'
import { getPeople } from './api/getPeople'
import './App.css'
import PersonCard from './components/PersonCard'
import FiltersInput from './components/FiltersInput'
import InviteModal from './components/InviteModal'

export default function App() {
  const [people, setPeople] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [hasMorePeople, setHasMorePeople] = useState(true)
  const [lastNameFilter, setLastNameFilter] = useState('')
  const [languageFilter, setLanguageFilter] = useState('')
  const [selectedPerson, setSelectedPerson] = useState(null)

  const loadMorePeople = useCallback(() => {
    if (loading) return

    setLoading(true)
    getPeople({ page, limit: 20, lastName: lastNameFilter, language: languageFilter }).then(response => {
      setPeople(prev => [...prev, ...response.data])
      setHasMorePeople(response.data.length > 0)
      setPage(prev => prev + 1)
      setLoading(false)
    })
  }, [page, loading, lastNameFilter, languageFilter])

  const handleConfirmInvite = person => {
    alert(`Invite sent to ${person.firstName} ${person.lastName}!`)
  }

  useEffect(() => {
    getPeople({ page: 1, limit: 20, lastName: lastNameFilter, language: languageFilter }).then(response => {
      setPeople(response.data)
      setHasMorePeople(response.data.length > 0)
      setPage(2)
      setLoading(false)
    })
  }, [lastNameFilter, languageFilter])

  useEffect(() => {
    const params = new URLSearchParams()
    if (lastNameFilter) params.set('lastName', lastNameFilter)
    if (languageFilter) params.set('language', languageFilter)
    const query = params.toString()
    window.history.replaceState(null, '', '?' + query)
  }, [lastNameFilter, languageFilter])

  useEffect(() => {
    const handleScroll = () => {
      const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 300
      if (scrollBottom) {
        loadMorePeople()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loadMorePeople])

  return (
    <div className='flex gap-4 p-4 mx-auto w-full'>
      <div className='w-1/2 p-2 mx-auto'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Frontend Engineers Catalog</h1>
        <FiltersInput
          lastNameFilter={lastNameFilter}
          setLastNameFilter={setLastNameFilter}
          languageFilter={languageFilter}
          setLanguageFilter={setLanguageFilter}
        />
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {people.map((person, index) => (
            <PersonCard onInvite={setSelectedPerson} key={index} person={person} />
          ))}
        </ul>
        <InviteModal person={selectedPerson} onClose={() => setSelectedPerson(null)} onConfirm={handleConfirmInvite} />
        {loading && <p className='text-center text-gray-400 mt-4'>Loading more...</p>}
        {!hasMorePeople && <p className='text-center text-gray-500 mt-4'>No more results</p>}
      </div>
    </div>
  )
}

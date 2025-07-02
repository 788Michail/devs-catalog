import people from '../data/people.json'

export function getPeople({ page = 1, limit = 20, lastName = '', language = '' }) {
  let filteredPeople = people

  if (lastName) {
    filteredPeople = filteredPeople.filter(person => person.lastName.toLowerCase().includes(lastName.toLowerCase()))
  }
  if (language) {
    filteredPeople = filteredPeople.filter(person => person.language === language)
  }

  filteredPeople.sort((a, b) => a.lastName.localeCompare(b.lastName))

  const total = filteredPeople.length
  const start = (page - 1) * limit
  const end = start + limit
  const paginatedPeople = filteredPeople.slice(start, end)

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: paginatedPeople,
        total
      })
    }, 300)
  })
}

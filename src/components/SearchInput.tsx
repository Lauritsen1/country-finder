import React, { useState, useEffect } from 'react'

interface Suggestion {
  name: string;
  flag: string;
}

const SearchInput: React.FC = () => {
  const [searchQuery, SetSearchQuery] = useState<string>('')
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const [error, setError] = useState<string>('')

  const fetchData = async (searchQuery: string) => {
    try {
      setError('')

      const res = await fetch(`https://restcountries.com/v2/name/${searchQuery}`)

      if (!res.ok) {
        setSuggestions([])
        throw new Error('No results')
      }

      const data: Suggestion[] = await res.json()
      setSuggestions(data)

    } catch (err: any) {
      setError(err.message)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) {
        fetchData(searchQuery)
      }
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetSearchQuery(e.target.value)
    if (!e.target.value) {
      setSuggestions([])
      setError('')
    }
  }

  return (
    <div className='bg-white rounded-xl w-full md:w-[40rem]'>
      <div className='flex items-center p-4'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>

        <input
          className='bg-transparent w-full pl-4 outline-none'
          type='text'
          placeholder='Search for a country...'
          value={searchQuery}
          onChange={handleChange}
        />
      </div>
      {suggestions.length > 0 &&
        <ul className='border-t pb-2 max-h-96 overflow-y-scroll'>
          {error &&
            <li className='flex items-center gap-2 object-contain hover:bg-gray-200 px-4 py-2 cursor-pointer'>
              {error}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            </li>
          }
          {suggestions.map((suggestion) => (
            <li key={suggestion.name} className='flex justify-between items-center object-contain hover:bg-gray-200 px-4 py-2 cursor-pointer'>
              {suggestion.name}
              <img className='h-4' src={suggestion.flag} alt="country flag" />
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default SearchInput;

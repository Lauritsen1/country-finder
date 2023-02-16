import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Loader from '../assets/tail-spin.svg'

interface Country {
  name: string;
}

const SearchIndex: React.FC = () => {

  const [countries, setCountries] = useState<Country[]>([])
  const [alphabet, setAlphabet] = useState<string[]>(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z'])

  const fetchData = async () => {
    try {
      const res = await fetch('https://restcountries.com/v2/all')

      if (!res.ok) {
        setCountries([])
        throw new Error('No results')
      }

      const data: Country[] = await res.json()
      setCountries(data)

    } catch (err: any) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className='grid grid-cols-1 gap-8 pb-12 grow'>
      {countries.length > 0
        ?
        alphabet.map((letter, letterIndex) => (
          <div className='bg-slate-500/10 p-4 rounded-xl max-w-3xl mx-auto w-full' key={letterIndex}>
            <h1 className='text-4xl mb-4 text-slate-400'>{letter}</h1>
            <div className='grid md:grid-cols-2'>
              {countries.map((country, countryIndex) => (
                <>
                  {country.name.startsWith(letter) && <Link key={countryIndex} to={`/country/${country.name}`} className='text-white mb-2'>{country.name}</Link>}
                </>
              ))
              }
            </div>
          </div>
        ))
        :
        <div className='grid place-items-center'>
          <img className='h-12 w-12' src={Loader} alt='Loading...' />
        </div>
      }
    </div>
  );
};

export default SearchIndex;

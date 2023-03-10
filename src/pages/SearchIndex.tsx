import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import Loader from "../assets/tail-spin.svg"

interface CountryType {
  name: string
}

const SearchIndex: React.FC = () => {
  const [countries, setCountries] = useState<CountryType[]>([])
  const [alphabet, setAlphabet] = useState<string[]>([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "Y",
    "Z",
  ])

  const fetchData = async () => {
    try {
      const res = await fetch("https://restcountries.com/v2/all")

      if (!res.ok) {
        setCountries([])
        throw new Error("No results")
      }

      const data: CountryType[] = await res.json()
      setCountries(data)
    } catch (err: any) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="grid grow grid-cols-1 gap-8 pb-12">
      {countries.length > 0 ? (
        alphabet.map((letter) => {
          const filteredCountries = countries.filter((country) =>
            country.name.startsWith(letter)
          )
          if (filteredCountries.length > 0) {
            return (
              <div
                className="mx-auto w-full max-w-3xl rounded-xl bg-slate-500/10 p-4"
                key={letter}
              >
                <h1 className="mb-4 text-4xl text-slate-400">{letter}</h1>
                <div className="grid md:grid-cols-2">
                  {filteredCountries.map((country) => (
                    <Link
                      key={country.name}
                      to={`/Country/${country.name}`}
                      className="mb-2 text-white"
                    >
                      {country.name}
                    </Link>
                  ))}
                </div>
              </div>
            )
          } else {
            return null
          }
        })
      ) : (
        <div className="grid place-items-center">
          <img className="h-12 w-12" src={Loader} alt="Loading..." />
        </div>
      )}
    </div>
  )
}

export default SearchIndex

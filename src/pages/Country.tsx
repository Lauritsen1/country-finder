import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

interface CountryType {
  name: string
  flag: string
  capital: string
  population: number
  region: string
  languages: {
    name: string
  }[]
  currencies: {
    code: string
    name: string
  }[]
}

const Country: React.FC = () => {
  const [country, setCountry] = useState<CountryType | null>(null)

  const { id } = useParams<{ id: string }>()

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://restcountries.com/v2/name/${id}?fullText=true`
      )

      if (!res.ok) {
        setCountry(null)
        throw new Error("No results")
      }

      const [data]: CountryType[] = await res.json()
      setCountry(data)
    } catch (err: any) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const thStyle = "p-4 text-gray-500 font-semibold border-t"
  const tdStyle = "p-4 text-gray-900 border-t"

  return (
    <div>
      <div className="mx-auto max-w-2xl rounded-lg bg-neutral-100">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-3xl font-bold">{country?.name}</h1>
          <img
            className="h-10 shadow-md"
            src={country?.flag}
            alt={`flag of ${country?.name}`}
          />
        </div>
        <table className="w-full text-left">
          <tbody>
            <tr>
              <th className={thStyle}>Capital</th>
              <td className={tdStyle}>{country?.capital}</td>
            </tr>
            <tr>
              <th className={thStyle}>Region</th>
              <td className={tdStyle}>{country?.region}</td>
            </tr>
            <tr>
              <th className={thStyle}>Population</th>
              <td className={tdStyle}>{country?.population}</td>
            </tr>
            <tr>
              <th className={thStyle}>Languages</th>
              <td className={tdStyle}>
                {country?.languages.map((language, index) => (
                  <span key={index}>{language.name}</span>
                ))}
              </td>
            </tr>
            <tr>
              <th className={thStyle}>Currencies</th>
              <td className={tdStyle}>
                {country?.currencies.map((currency, index) => (
                  <span key={index}>
                    {currency.name} ({currency.code})
                  </span>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Country

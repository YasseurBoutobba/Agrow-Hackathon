import React from 'react'
import { social } from '../content/social'

const SignWays = ({way}) => {
  return (
    <div className="flex w-full justify-between px-3 my-4">
              {social.map((el) => (
                <a className="border text-gray-600 text-sm rounded-md border-gray-300 py-1 px-3.5 min-w-max flex items-center gap-1">
                  <img src={el[1]} className="w-6" />
                  <span>Sign {way} with {el[0]} </span>
                </a>
              ))}
            </div>
  )
}

export default SignWays
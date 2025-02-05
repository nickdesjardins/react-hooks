'use client'

import { useActionState } from 'react'
import { useState, useTransition } from 'react'

export default function ActionStatePage() {
  const [count, setCount] = useState(0)
  const [isPending, startTransition] = useTransition()
  
  const [state, dispatch, isActionPending] = useActionState(
    async () => {
      console.log('Action started...')
      
      // Simulate an async operation
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setCount(prev => {
        console.log('Updating count from:', prev)
        return prev + 1
      })
      
      console.log('Action completed!')
      return 'Success!'
    },
    'idle'
  )

  console.log('Current status:', state)

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">useActionState Demo</h1>
      
      <div className="space-y-4">
        <div className="p-4 border rounded">
          <p className="mb-2">Count: {count}</p>
          <p className="mb-2">Status: {state}</p>
        </div>

        <button 
          onClick={() => {
            console.log('Button clicked!')
            startTransition(() => {
              dispatch()
            })
          }}
          disabled={isPending || isActionPending}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          {isPending || isActionPending ? 'Processing...' : 'Increment Count'}
        </button>

        <div className="mt-4 text-sm text-gray-600">
          <p>Open your browser console (F12) to see the logs!</p>
        </div>
      </div>
    </div>
  )
}

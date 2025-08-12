
import { setupServer } from 'msw/node'

export const mswServer = setupServer()

// mswServer.events.on('request:start', ({ request }) => {
//   console.log('Outgoing request:', request.method, request.url)
// })

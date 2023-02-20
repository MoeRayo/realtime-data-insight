import { Client, Account, Functions } from 'appwrite'
export const client = new Client()
export const account = new Account(client)
client
  .setEndpoint('http://localhost/v1') // Your API Endpoint
  .setProject('63ef7c7a6ef6335e7373') // Your project ID

export const insightFunction = () => {
  const functions = new Functions(client)
  return functions.createExecution('63f288fb2593146a0afb')
}

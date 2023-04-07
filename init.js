import { Client, Account, Functions } from 'appwrite'
export const client = new Client()
export const account = new Account(client)
client
  .setEndpoint('http://localhost/v1') // Your API Endpoint
  .setProject('64305cba1ae12028fcfd') // Your project ID

export const insightFunction = () => {
  const functions = new Functions(client)
  return functions.createExecution('643063a1c247b8912955')
}

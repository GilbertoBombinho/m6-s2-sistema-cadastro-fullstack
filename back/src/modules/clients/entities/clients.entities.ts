import { randomUUID } from "crypto"

export class Client {
  readonly id: string
  name: string
  email: string
  phone: number
  created_at: Date | null
  client_id: string

  constructor() {
    this.id = randomUUID()
  }
}


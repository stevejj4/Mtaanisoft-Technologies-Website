import 'dotenv/config'

export function getRequiredEnv(name: string): string {
  const value = process.env[name]?.trim()
  if (!value) {
    throw new Error(`Missing required backend environment variable: ${name}`)
  }
  return value
}

export function getMissingEnv(...names: string[]): string[] {
  return names.filter((name) => !process.env[name]?.trim())
}

export function getPort(): number {
  const value = process.env.PORT ?? '4000'
  const port = Number(value)
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('PORT must be an integer between 1 and 65535.')
  }
  return port
}

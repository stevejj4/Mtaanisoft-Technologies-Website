export type FormSubmission = {
  success: boolean
  message: string
}

function isFormSubmission(value: unknown): value is FormSubmission {
  return (
    typeof value === 'object' &&
    value !== null &&
    'success' in value &&
    typeof value.success === 'boolean' &&
    'message' in value &&
    typeof value.message === 'string'
  )
}

const apiUrl = (process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000').replace(
  /\/$/,
  '',
)

async function readSubmission(response: Response): Promise<FormSubmission> {
  let result: unknown
  try {
    result = await response.json()
  } catch {
    throw new Error(`The backend returned an invalid response (${response.status}).`)
  }

  if (!isFormSubmission(result)) {
    throw new Error('The backend returned an invalid response.')
  }
  if (!response.ok) throw new Error(result.message)
  return result
}

export async function postJson(
  path: string,
  body: Record<string, string>,
): Promise<FormSubmission> {
  let response: Response
  try {
    response = await fetch(`${apiUrl}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  } catch {
    throw new Error(
      `Could not connect to the backend API at ${apiUrl}. Check that the backend is running and NEXT_PUBLIC_API_URL is correct.`,
    )
  }
  return readSubmission(response)
}

export async function postMultipart(
  path: string,
  body: FormData,
): Promise<FormSubmission> {
  let response: Response
  try {
    response = await fetch(`${apiUrl}${path}`, {
      method: 'POST',
      body,
    })
  } catch {
    throw new Error(
      `Could not connect to the backend API at ${apiUrl}. Check that the backend is running and NEXT_PUBLIC_API_URL is correct.`,
    )
  }
  return readSubmission(response)
}

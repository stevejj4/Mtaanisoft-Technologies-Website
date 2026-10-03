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

const apiUrl = (
  process.env.NEXT_PUBLIC_API_URL ??
  (process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '')
).replace(/\/$/, '')

function getEndpoint(path: string) {
  if (!apiUrl) {
    throw new Error(
      'Form submissions are not configured for this deployment. Set NEXT_PUBLIC_API_URL to the deployed backend URL and rebuild the frontend.',
    )
  }
  return `${apiUrl}${path}`
}

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
    response = await fetch(getEndpoint(path), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  } catch {
    throw new Error(
      apiUrl
        ? `Could not connect to the backend API at ${apiUrl}. Check that the backend is running and NEXT_PUBLIC_API_URL is correct.`
        : 'The backend API URL is not configured for this deployment.',
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
    response = await fetch(getEndpoint(path), {
      method: 'POST',
      body,
    })
  } catch {
    throw new Error(
      apiUrl
        ? `Could not connect to the backend API at ${apiUrl}. Check that the backend is running and NEXT_PUBLIC_API_URL is correct.`
        : 'The backend API URL is not configured for this deployment.',
    )
  }
  return readSubmission(response)
}

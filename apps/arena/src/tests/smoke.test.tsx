import { render, screen } from '@testing-library/react'
import { App } from '../App'

const patients = [
  {
    id: 'p1',
    name: 'Mary Smith',
    dateOfBirth: '1984-03-12',
    gender: 'female',
    diagnosis: 'Type 2 diabetes',
  },
  {
    id: 'p2',
    name: 'Robert Hansen',
    dateOfBirth: '1977-09-04',
    gender: 'male',
    diagnosis: 'Hypertension',
  },
]

describe('App smoke test', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn(async () => Response.json(patients)))
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders the dashboard with mocked patient data', async () => {
    render(<App />)

    expect(
      await screen.findByRole('heading', { name: /good morning/i }),
    ).toBeVisible()
    expect(screen.getByText(/you have 2 patients/i)).toBeInTheDocument()
    expect(screen.getByText('Mary Smith')).toBeInTheDocument()
  })
})

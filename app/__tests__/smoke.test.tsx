import { render, screen } from '@testing-library/react'

function Dummy() {
  return <div>ok</div>
}

test('smoke', () => {
  render(<Dummy />)
  expect(screen.getByText('ok')).toBeInTheDocument()
})

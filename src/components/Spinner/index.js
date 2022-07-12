import './styles.css'
import styled from 'styled-components'

const Section = styled.section `
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - var(--height-header));
`

export default function Spinner() {
  return (
    <Section>
      <div className='container-spinner'>
        <svg className='spinner' viewBox="0 0 50 50">
          <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill='none'
            strokeWidth="5"
          ></circle>
        </svg>
        <p className='loading'>Cargando...</p>
      </div>
    </Section>
  )
}

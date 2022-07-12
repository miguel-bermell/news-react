import './styles.css'

export default function SpinnerFull() {
  return (
    <div className='container-spinner-full'>
      <svg className='spinner-full' viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill='none'
          strokeWidth="5"
        ></circle>
      </svg>
    </div>
  )
}

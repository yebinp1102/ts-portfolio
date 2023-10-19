
type Props = {
  width: string
}

const LineGradient = ({width} : Props) => {
  return (
    <div
      className={`h-0.5 ${width} bg-gradient-rainblue`}
    >

    </div>
  )
}

export default LineGradient
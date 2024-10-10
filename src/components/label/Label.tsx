type Props = {
    htmlFor:string;
    children:string
}

export default function Label({htmlFor = "", children}: Props) {
  return (
    <label htmlFor={htmlFor} className='font-semibold cursor-pointer text-2xl mb-8'>
        {children}
    </label>
  )
}
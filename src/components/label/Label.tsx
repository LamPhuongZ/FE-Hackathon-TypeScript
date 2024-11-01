type Props = {
    htmlFor?:string;
    children:string;
    marginBottom?: string;
}

export default function Label({htmlFor = "", children, marginBottom = "mb-8" }: Props) {
  return (
    <label htmlFor={htmlFor} className={`font-semibold cursor-pointer text-2xl  ${marginBottom}`}>
        {children}
    </label>
  )
}
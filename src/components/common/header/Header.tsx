export interface IHeaderProps {
  pageTitle: string
}

export default function Header({ pageTitle }: IHeaderProps) {
  return (
    <header className='header'>
      <h1>{pageTitle}</h1>
    </header>
  )
}

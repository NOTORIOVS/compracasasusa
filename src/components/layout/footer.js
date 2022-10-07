import { info } from '../../../info';

export default function Footer() {
  return (
    <footer className='mb-24 md:mb-0 border-t border-gray-200'>

      <div className='container flex p-8 items-center justify-between'>
        <div className="flex flex-col">
          <a href="https://www.talaveramodels.com/avisodeprivacidad/" target="_blank" className="link !mt-0" rel="noreferrer">
            Aviso de privacidad
          </a>
        </div>
        <div className="my-auto">
          <p className='-ft-2 m-0'>{`${info.address.address}, ${info.address.col} C.P. ${info.address.cp}, ${info.address.city}, ${info.address.state}`}</p>
        </div>
      </div>

      <div className='bg-gray-200'>
        <div className='container p-8'>
          <p className='text-center -ft-3 m-0'>{info.companyName} © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
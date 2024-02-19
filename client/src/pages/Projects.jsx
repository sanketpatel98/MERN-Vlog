import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Contact</h1>
      <p className='text-md text-gray-500'>For further inquiries or collaboration opportunities, feel free to reach out to Sanket Patel via <a className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target='_blank' href="mailto:patelsanketr98@gmail.com">email</a> or connect with him on <a className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target='_blank' href="https://linkedin.com/in/sanketpatel98">LinkedIn</a> or <a className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target='_blank' href="https://github.com/sanketpatel98">GitHub</a>.</p>
      <CallToAction />
    </div>
  )
}
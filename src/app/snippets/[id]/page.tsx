import {db} from '@/db';

interface SnippetShowPageProps {
  params: {
    id: string
  }
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  console.log(props)
  return (
    <div>SnippetShowPage</div>
  )
}

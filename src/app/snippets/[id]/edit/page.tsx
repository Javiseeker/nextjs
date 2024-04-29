import { db } from '@/db';
import { notFound } from 'next/navigation';
import SnippetEditForm from '@/components/snippet-edit-form';

interface SnippetEditPagePros {
  params: {
    id: string
  }
}
export default async function SnippetEditPage(props: SnippetEditPagePros) {
  const id = parseInt(props.params.id);

  if (Number.isNaN(id)) return notFound();

  const snippet = await db.snippet.findFirst({
    where: {id}
  });

  if(!snippet) return notFound();



  return (
    <SnippetEditForm snippet={snippet} />
  )
}

import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import timelineData from '@/data/timelineData'
import TimeLine from '@/components/TimeLine'
export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
        <div className='my-3 font-bold text-4xl '> Work Experience</div>
        <div className='flex justify-center my-1' >
          <TimeLine timelineItems={timelineData} />
        </div>
      </AuthorLayout>
    </>
  )
}

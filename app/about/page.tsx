import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import timelineData from '@/data/timelineData'
import TimeLine from '@/components/TimeLine'
import skillsData from '@/data/skills'
import Skills from 'components/Skills'
export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
        <div className="flex-auto">
          <div className="my-3 text-4xl font-bold underline hover:underline-offset-1">Skills</div>
          <Skills
            programmingLanguages={skillsData.plangs}
            frameworks={skillsData.frameworks}
            tools={skillsData.tools}
          />
        </div>
        <div className="my-3 text-4xl font-bold underline hover:underline-offset-1">
          {' '}
          Work Experience
        </div>
        <div className="my-1 flex justify-center">
          <TimeLine timelineItems={timelineData} />
        </div>
      </AuthorLayout>
    </>
  )
}

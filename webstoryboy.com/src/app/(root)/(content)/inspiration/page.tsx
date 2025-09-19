import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function InspirationPage() {
  return (
    <section>
      <h1 className='title'>Tutorial</h1>
      <Tabs defaultValue='tab-1'>
        <TabsList className='grid mx-auto grid-cols-2 mb-4'>
          <TabsTrigger value='tab-1'>SITE 인스퍼레이션</TabsTrigger>
          <TabsTrigger value='tab-2'>TUTORIAL 인스퍼레이션</TabsTrigger>
        </TabsList>
        <TabsContent value='tab-1'>
          <div className='page__title'>
            <h2>사용자 중심의 디자인</h2>
          </div>
        </TabsContent>
        <TabsContent value='tab-2'>
          <div className='page__title'>
            <h2>인터랙티브한 애니메이션을 만들고 싶다면?</h2>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}

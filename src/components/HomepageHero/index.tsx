'use client'

import { PanelParticles } from '@/components/PanelParticles'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { useLocale } from '@/hooks'
import { cn } from '@/lib/utils'
import { useTheme } from 'nextra-theme-docs'
import { useMemo } from 'react'
import Marquee from 'react-fast-marquee'
import { BackgroundCanvas } from './Background-Canvas'
import { Section } from './Section'
import { SetupHero } from './Setup'

export const StackItem = ({ children }: { children: string }) => {
  return (
    <div
      className={cn(
        'mx-6',
        'text-neutral-800 dark:text-neutral-100',
        'transition-all duration-300 transform opacity-75',
        'hover:scale-125 hover:opacity-100',
      )}
    >
      <div className="rounded-md">
        <h1 className="text-2xl font-bold">{children}</h1>
      </div>
    </div>
  )
}

export default function HomepageHero() {
  const { t } = useLocale()

  const featureList = t('featureList')
  const faqs = t('faqs')

  const { resolvedTheme } = useTheme()

  const processedFeatureList = useMemo(() => {
    const icons = [
      'icon-[material-symbols--rocket-launch-outline]',
      'icon-[icon-park-outline--international]',
      'icon-[nonicons--typescript-16]',
      'icon-[carbon--face-satisfied] hover:icon-[carbon--face-wink]',
      'icon-[teenyicons--tailwind-outline]',
      'icon-[tabler--calendar-code]',
      'icon-[carbon--color-palette]',
      'icon-[carbon--ibm-cloud-transit-gateway]',
      'icon-[carbon--flash]',
    ]
    return featureList.map((item, index) => {
      return {
        ...item,
        icon: <span className={icons[index] || icons[0]}></span>,
      }
    })
  }, [featureList])

  return (
    <>
      {/* <PanelParticles /> */}
      <div className="min-h-screen relative">
        <SetupHero />
        <div className="fixed z-1 top-0 left-0">
          <BackgroundCanvas />
        </div>
      </div>
      <div className="relative z-1 pb-10 md:pb-[100px]">
        <Section
          title="Everything is a Widget"
          titleProps={{
            disabledAnimation: false,
          }}
        >
          <div className="flex justify-center w-full max-w-7xl h-[80px] my-[30px]">
            <Marquee
              pauseOnHover
              autoFill
              gradient
              direction="right"
              gradientColor="var(--background)"
              speed={60}
            >
              <StackItem>Align</StackItem>
              <StackItem>Container</StackItem>
              <StackItem>SizedBox</StackItem>
              <StackItem>Row</StackItem>
              <StackItem>Column</StackItem>
              <StackItem>Padding</StackItem>
              <StackItem>Opacity</StackItem>
              <StackItem>Stack</StackItem>
            </Marquee>
          </div>
        </Section>
        {/* <Section title="Features" description={t('featuresDesc')}>
          <div className="flex justify-center w-full max-w-7xl">
            <HoverEffect items={processedFeatureList} />
          </div>
        </Section> */}
        <Section title="Frequently Asked Questions" tallPaddingY>
          <Accordion type="single" collapsible className="w-full max-w-5xl">
            {faqs.map((faqItem, index) => (
              <AccordionItem value={faqItem.question} key={index}>
                <AccordionTrigger>{faqItem.question}</AccordionTrigger>
                <AccordionContent>{faqItem.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Section>
      </div>
    </>
  )
}

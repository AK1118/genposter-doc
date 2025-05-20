'use client'

import styles from '@/components/HomepageHero/SetupHero.module.css'
import { MotionWrapperFlash } from '@/components/MotionWrapper/Flash'
import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'
import { LinkPreview } from '@/components/ui/link-preview'
import { useLocale } from '@/hooks'
import clsx from 'clsx'
import Link from 'next/link'

interface Props {}
export function SetupHero(props: Props) {
  const { t, currentLocale } = useLocale()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.badgeContainer}>
          {/* <a
            className={styles.badge}
            href="https://github.com/pdsuwwz/nextjs-nextra-starter"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('badgeTitle')}
          </a> */}
          {/* {t('badgeTitle')} */}
        </div>
        <div className="py-2">
          <h1 className={styles.headline}>
            <MotionWrapperFlash
              disabledAnimation={false}
              className="flex items-center"
            >
              <span className="icon-[emojione-v1--lightning-mood]"></span>
            </MotionWrapperFlash>
            {' '}
            Generate
            {' '}
            <br className="sm:hidden"></br>
            {' '}
            Beautiful
            <br className="sm:hidden"></br>
            {' '}
            Poster
            <br />
          </h1>
        </div>

        <Link
          href={`/${currentLocale}/docs/tutorial/start`}
          className={clsx([
            'bg-linear-to-r from-[#40bef6] via-[#5fb3eb] to-[#1b9ed6] text-white shadow-lg',
            'dark:bg-linear-to-r dark:from-green-400 dark:via-teal-500 dark:to-cyan-500 dark:text-white',
            'text-sm mt-2 inline-block px-3 py-1 rounded-lg',
            '[&>span]:font-bold',
            'animate-pulse',
            '[animation-duration:2s]',
          ])}
          dangerouslySetInnerHTML={{
            __html: t('featureSupport'),
          }}
        />

        <div
          className={clsx([
            styles.subtitle,
            'text-neutral-500 dark:text-neutral-300',
          ])}
        >
          制作海报更
          {' '}
          <FlipWords
            words={[
              '快速',
              '简单',
              '漂亮',
              '高效',
              '有趣',
              '便捷',
              '强大',
              '灵活',
              '优雅',
              '专业',
              '可靠',
            ]}
          />
          <br />
          使用
          {' '}
          <LinkPreview url="https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Scripting/What_is_JavaScript">JavaScript</LinkPreview>
          或
          {' '}
          <LinkPreview url="https://www.typescriptlang.org/">Typescript</LinkPreview>
          ,
          和
          <LinkPreview url="https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial">Canvas</LinkPreview>
        </div>
        <div className="flex justify-center pt-10">
          <div className="max-w-[500px] flex flex-wrap gap-[20px] max-sm:justify-center">
            <Button
              asChild
              size="lg"
              className="font-bold group max-sm:w-[100%]"
            >
              <Link href={`/${currentLocale}/docs/tutorial/start`}>
                {t('getStarted')}
                <span className="w-[20px] translate-x-[6px] transition-all group-hover:translate-x-[10px] icon-[mingcute--arrow-right-fill]"></span>
              </Link>
            </Button>
            {/* <Button
              asChild
              size="lg"
              variant="secondary"
              className="font-bold group max-sm:w-[100%]"
            >
              <Link
                href="https://github.com/pdsuwwz/nextjs-nextra-starter"
                target="_blank"
              >
                Github
                <span className="ml-[6px] icon-[mingcute--github-line]"></span>
              </Link>
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'
import type { BuildContext, Widget } from 'gen-ui'
import {
  Alignment,
  AnimationController,
  BoxDecoration,
  Center,
  Colors,
  Column,
  Container,
  CrossAxisAlignment,
  Curves,
  DefaultNativeStrategies,
  Duration,
  GenPlatformConfig,
  Opacity,
  PaintingStyle,
  Positioned,
  Row,
  runApp,
  Stack,
  State,
  StatefulWidget,
  Transform,
} from 'gen-ui'
import { useEffect, useLayoutEffect } from 'react'

export const BackgroundCanvas = () => {
  if (typeof window != 'undefined') {
    window.addEventListener('resize', () => {
      runGenUI()
    })
  }
  useEffect(() => {
    if (typeof window != 'undefined') { runGenUI() }
  }, [])
  return (
    <div className="w-full h-full">
      <canvas id="gen-ui-canvas"></canvas>
    </div>
  )
}

const runGenUI = () => {
  const canvas: HTMLCanvasElement = document.querySelector(
    '#gen-ui-canvas',
  ) as HTMLCanvasElement // document.createElement('canvas')
  if (!canvas) {
    return null
  }
  const dev = 1 // window.devicePixelRatio;
  const width = window.innerWidth
  const height = window.innerHeight
  canvas.width = width * dev
  canvas.height = height * dev
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`
  const g: CanvasRenderingContext2D = canvas.getContext('2d', {
    // willReadFrequently: true,
  }) as CanvasRenderingContext2D
  GenPlatformConfig.InitInstance({
    screenWidth: width,
    screenHeight: height,
    devicePixelRatio: dev,
    debug: false,
    canvas,
    renderContext: g,
    strategies: new DefaultNativeStrategies(),
    showBanner: true,
  })
  class BaGua extends StatefulWidget {
    createState(): State {
      return new BaGuaState()
    }
  }

  class BaGuaState extends State<BaGua> {
    private animation = new AnimationController({
      duration: new Duration({ second: 10 }),
      curve: Curves.easeIn,
    })

    public initState(): void {
      super.initState()
      this.animation.addListener(() => {
        this.setState(() => {})
        if (this.animation.isCompleted) {
          setTimeout(() => {
            this.animation.reverse()
          }, 3000)
        }
        if (this.animation.isDismissed) {
          this.animation.forward()
        }
      })
      this.animation.forward()
    }

    build(context: BuildContext): Widget {
      return new Container({
        width: 300,
        height: 300,
        child: new Opacity({
          opacity: 0.03,
          child: Transform.scale({
            scale: this.animation.value * 2 + 6.18,
            alignment: Alignment.center,
            child: new Stack({
              children: Array.from({ length: 6 }).map((_, ndx) => {
                let scale = 1
                if (ndx > 0) {
                  scale *= 0.618 / ndx
                }
                return Transform.rotate({
                  child: Transform.scale({
                    scale,
                    alignment: Alignment.center,
                    child: new Container({
                      width: 300,
                      height: 300,
                      child: new Stack({
                        children: generateTrigramWidgets({ radius: 100 }),
                      }),
                    }),
                  }),
                  angle:
                    Math.PI * (this.animation.value * (ndx % 2 === 0 ? 1 : -1)),
                  alignment: Alignment.center,
                })
              }),
            }),
          }),
        }),
      })
    }
  }

  runApp(
    new Container({
      width: canvas.width,
      height: canvas.height,
      alignment: Alignment.center,
      child: new Center({
        child: new BaGua(),
      }),
    }),
  )

  function generateTrigramWidgets({ radius }: { radius: number }): Widget[] {
    const trigrams = [
      [1, 1, 1], // 乾
      [1, 1, 0], // 兑
      [1, 0, 1], // 离
      [1, 0, 0], // 震
      [0, 1, 1], // 巽
      [0, 1, 0], // 坎
      [0, 0, 1], // 艮
      [0, 0, 0], // 坤
    ]

    return trigrams.map((lines, i) => {
      const angle = (i / 8) * 2 * Math.PI
      const x = Math.cos(angle) * radius + 140
      const y = Math.sin(angle) * radius + 140

      return new Positioned({
        left: x,
        top: y,
        child: Transform.rotate({
          alignment: Alignment.center,
          angle: (Math.PI / 180) * (360 / 8) * i + (Math.PI / 180) * 90,
          child: new Container({
            child: Trigram({ lines }),
          }),
        }),
      })
    })
  }

  function Trigram({ lines }: { lines: number[] }): Widget {
    return new Column({
      spacing: 4,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: lines.map((line) => {
        if (line === 0) {
          return new Row({
            spacing: 4,
            children: [
              new Container({
                width: 10,
                height: 4,
                decoration: new BoxDecoration({
                  backgroundColor: Colors.black,
                }),
              }),
              new Container({
                width: 10,
                height: 4,
                decoration: new BoxDecoration({
                  backgroundColor: Colors.black,
                }),
              }),
            ],
          })
        }
        return new Container({
          width: line === 1 ? 24 : 10,
          height: 4,
          decoration: new BoxDecoration({ backgroundColor: Colors.black }),
        })
      }),
    })
  }
}

import type { ReactNode } from 'react'

interface PropsTableItem {
  name: string
  type: string | ReactNode
  default?: string | ReactNode
  description: string | ReactNode
  required?: boolean
  typeHref?: string
}
interface PropsTableTitles {
  name: string
  default: string
  value: string
}
export function PropsTable({
  titles,
  data,
}: {
  titles: Partial<PropsTableTitles>
  data: PropsTableItem[]
}) {
  const propsWrapStyle = 'rounded-md bg-border/40 text-xs p-1 border-input'
  return (
    <table className="w-full text-sm my-8">
      <thead className="border-b border-border">
        <tr>
          <th className="text-start py-2 min-w-[6rem]">{titles?.name || '名称'}</th>
          <th className="text-start py-2 px-3 ">{titles?.value || '类型'}</th>
          <th className="text-start py-2 whitespace-nowrap ">{titles?.default || '默认值'}</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.name}
            className="hover:bg-foreground/5 mb-5 border-b border-border"
          >
            <td className="py-3">
              <code
                className={`${propsWrapStyle} ${item.required ? '' : 'after:content-["?"]'}`}
              >
                {item.name}
              </code>
            </td>
            <td className="p-3 w-full">
              <code className={propsWrapStyle}>
                {' '}
                {item.typeHref
                  ? (
                      <a href={item.typeHref} className="underline text-primary">
                        {item.type}
                      </a>
                    )
                  : (
                      item.type
                    )}
              </code>
              <p className="mt-2 leading-6 w-full">{item.description}</p>
            </td>
            <td className="py-3">
              <code className={propsWrapStyle}>{item.default ?? '–'}</code>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

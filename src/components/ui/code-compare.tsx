import React from 'react'

interface CodeCompareProps {
  title?: string
  code: string
  html: string
}

export const CodeCompare: React.FC<CodeCompareProps> = ({ title, code, html }) => {
  return (
    <div className="w-full my-4">
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/30 p-4 rounded-xl shadow-sm border">
        <div>
          <div className="text-sm font-medium mb-1 text-muted-foreground">GenPoster 调用</div>
          <pre className="bg-background p-3 rounded-md text-sm overflow-x-auto border">
            <code className="language-ts">{code}</code>
          </pre>
        </div>
        <div>
          <div className="text-sm font-medium mb-1 text-muted-foreground">等效 HTML / CSS</div>
          <pre className="bg-background p-3 rounded-md text-sm overflow-x-auto border">
            <code className="language-html">{html}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}

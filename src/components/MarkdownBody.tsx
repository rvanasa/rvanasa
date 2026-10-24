import ReactMarkdown from "react-markdown";

export default function MarkdownBody({ content }: { content: string }) {
  return (
    <div className="markdown-content">
      <ReactMarkdown
        components={{
          a: ({ href, children, ...props }) => {
            const isExternal = href?.startsWith("http://") || href?.startsWith("https://");

            return (
              <a
                href={href}
                {...props}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
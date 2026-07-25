import React from "react";

/** Lightweight markdown → JSX that matches the existing blog detail typography. */
export function renderBlogContent(content: string) {
  if (!content?.trim()) return null;

  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const blocks: React.ReactNode[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];
  let key = 0;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    const text = paragraph.join(" ").trim();
    paragraph = [];
    if (!text) return;
    blocks.push(
      <p key={`p-${key++}`} className="mb-6">
        {formatInline(text)}
      </p>
    );
  };

  const flushList = () => {
    if (!listItems.length) return;
    const items = listItems;
    listItems = [];
    blocks.push(
      <ul key={`ul-${key++}`} className="mb-6 list-disc pl-6 space-y-2">
        {items.map((item, i) => (
          <li key={i}>{formatInline(item)}</li>
        ))}
      </ul>
    );
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      flushParagraph();
      continue;
    }

    if (trimmed === "---") {
      flushList();
      flushParagraph();
      blocks.push(<hr key={`hr-${key++}`} className="my-8 border-[#E8E8EA]" />);
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushList();
      flushParagraph();
      blocks.push(
        <div key={`h2-${key++}`} className="mb-6">
          <strong className="font-semibold block mb-2 text-[#181A2A]">
            {formatInline(trimmed.slice(3))}
          </strong>
        </div>
      );
      continue;
    }

    if (trimmed.startsWith("### ")) {
      flushList();
      flushParagraph();
      blocks.push(
        <div key={`h3-${key++}`} className="mb-6">
          <strong className="font-semibold block mb-2 text-[#181A2A]">
            {formatInline(trimmed.slice(4))}
          </strong>
        </div>
      );
      continue;
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph();
      listItems.push(trimmed.slice(2));
      continue;
    }

    flushList();
    paragraph.push(trimmed);
  }

  flushList();
  flushParagraph();
  return blocks;
}

function formatInline(text: string): React.ReactNode {
  // Handle **bold** and *italic* without a markdown library
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) {
      parts.push(text.slice(last, match.index));
    }
    const token = match[0];
    if (token.startsWith("**")) {
      parts.push(<strong key={i++}>{token.slice(2, -2)}</strong>);
    } else {
      parts.push(<em key={i++}>{token.slice(1, -1)}</em>);
    }
    last = match.index + token.length;
  }

  if (last < text.length) parts.push(text.slice(last));
  return parts.length === 1 ? parts[0] : parts;
}

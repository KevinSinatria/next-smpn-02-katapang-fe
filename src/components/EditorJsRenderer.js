import React from 'react';
import DOMPurify from 'isomorphic-dompurify';
import styles from './EditorJsRenderer.module.css';
import Image from 'next/image';
// Hapus 'import Image from "next/image"' jika tidak digunakan di renderer ini,
// atau pastikan Anda punya renderer yang menggunakannya.

// Fungsi rekursif untuk merender item list, termasuk yang bersarang (nested)
const renderListItems = (items, listStyle) => {
  const Tag = listStyle === 'ordered' ? 'ol' : 'ul';

  return (
    <Tag className={styles.list}>
      {items.map((item, index) => (
        <li key={index}>
          {/* 💡 PERUBAHAN UTAMA: Mengakses item.content, bukan item secara langsung */}
          <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.content) }} />
          
          {/* ✅ Menangani nested list jika ada */}
          {item.items && item.items.length > 0 && (
            renderListItems(item.items, listStyle)
          )}
        </li>
      ))}
    </Tag>
  );
};

// Objek untuk memetakan tipe block ke fungsi render
const blockRenderers = {
  header: (block) => {
    const level = block.data.level;
    const cleanText = DOMPurify.sanitize(block.data.text);
    const Tag = `h${level}`;
    return <Tag className={styles.header} dangerouslySetInnerHTML={{ __html: cleanText }} />;
  },

  paragraph: (block) => {
    const cleanText = DOMPurify.sanitize(block.data.text);
    return <p className={styles.paragraph} dangerouslySetInnerHTML={{ __html: cleanText }} />;
  },

  // --- RENDERER LIST YANG SUDAH DIPERBAIKI ---
  list: (block) => {
    // Memanggil fungsi helper untuk merender list
    return renderListItems(block.data.items, block.data.style);
  },

  image: (block) => {
    // Pastikan Anda mengimpor 'Image' dari 'next/image' jika menggunakan ini
    const { url, caption } = block.data.file;
    const classNames = [
      styles.image,
      block.data.withBorder ? styles['image--bordered'] : '',
      block.data.stretched ? styles['image--stretched'] : '',
      block.data.withBackground ? styles['image--withBackground'] : ''
    ].join(' ').trim();

    return (
      <figure className={classNames}>
        {/* Jika Anda ingin menggunakan next/image, pastikan domain gambar sudah dikonfigurasi di next.config.js */}
        <Image src={url} width={1000} height={1000} alt={caption || 'Gambar dari konten'} />
        {caption && (
          <figcaption dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(caption) }} />
        )}
      </figure>
    );
  },

  quote: (block) => {
    const cleanText = DOMPurify.sanitize(block.data.text);
    const cleanCaption = DOMPurify.sanitize(block.data.caption);
    return (
      <blockquote className={styles.quote}>
        <p dangerouslySetInnerHTML={{ __html: cleanText }} />
        {cleanCaption && (
          <footer dangerouslySetInnerHTML={{ __html: cleanCaption }} />
        )}
      </blockquote>
    );
  },

  table: (block) => {
    const { withHeadings, content } = block.data;
    const head = withHeadings ? content[0] : null;
    const body = withHeadings ? content.slice(1) : content;

    return (
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          {head && (
            <thead>
              <tr>
                {head.map((cell, index) => (
                  <th key={index} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(cell) }} />
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {body.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(cell) }} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },

  embed: (block) => {
    const { service, source, embed, width, height, caption } = block.data;
    return (
      <figure className={styles.embed}>
        <div className={styles.embedWrapper}>
          <iframe
            src={embed}
            width={width}
            height={height}
            title={`Embed ${service}: ${source}`}
            allowFullScreen
          />
        </div>
        {caption && (
          <figcaption dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(caption) }} />
        )}
      </figure>
    );
  },
};

const EditorJsRenderer = ({ data }) => {
  if (!data || !Array.isArray(data.blocks)) {
    return null;
  }

  return (
    <div className={styles.editorContainer}>
      {data.blocks.map((block) => {
        const renderer = blockRenderers[block.type];
        if (renderer) {
          return <React.Fragment key={block.id}>{renderer(block)}</React.Fragment>;
        }
        console.warn(`Renderer untuk tipe block "${block.type}" tidak ditemukan.`);
        return null;
      })}
    </div>
  );
};

export default EditorJsRenderer;
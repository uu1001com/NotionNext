/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      body {
        background-color: #f7f9fe;
      }

      // 公告栏中的字体固定白色
      #theme-heo #announcement-content .notion {
        color: white;
      }

      ::-webkit-scrollbar-thumb {
        background: rgba(60, 60, 67, 0.4);
        border-radius: 8px;
        cursor: pointer;
      }

      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      #more {
        white-space: nowrap;
      }

      .today-card-cover {
        -webkit-mask-image: linear-gradient(to top, transparent 5%, black 70%);
        mask-image: linear-gradient(to top, transparent 5%, black 70%);
      }

      .recent-top-post-group::-webkit-scrollbar {
        display: none;
      }

      .scroll-hidden::-webkit-scrollbar {
        display: none;
      }

      * {
        box-sizing: border-box;
      }

      // 标签滚动动画
      .tags-group-wrapper {
        animation: rowup 60s linear infinite;
      }

      @keyframes rowup {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .notion-row {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
              gap: 16px;
              width: 100%;
              max-width: 100%;
              padding: 0 16px;
      }

      /* 重置列样式 */
      .notion-row .notion-column {
        width: 100% !important;
        padding: 0;
        margin: 0;
      }

      /* 移动端适配 */
      @media (max-width: 640px) {
        .notion-row {
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 12px;
          padding: 0 12px;
        }

        .notion-row .notion-spacer {
          display: none;
        }
      }   


      .notion-bookmark-image {
          display: none;
          /*flex: 1 1 90px;*/
          position: relative;
      }
    `}</style>
  )
}

export { Style }


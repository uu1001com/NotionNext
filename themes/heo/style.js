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
      .notion-bookmark-link {
          display: none;
          margin-top: 6px;
          @apply w-52 md:w-80;
      }

      .notion-bookmark-image {
          display: none;
          /*flex: 1 1 90px;*/
          position: relative;
      }
      .notion-spacer {
          width: calc(min(16px, 4vw));
      }
      .notion-bookmark:hover {
          border-color: var(--notion-blue); /* 悬停时边框颜色变为蓝色 */
          background-color: #fff8dc; /* 悬停时背景颜色变为浅黄色 */
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* 添加轻微阴影 */
      }

    `}</style>
  )
}

export { Style }


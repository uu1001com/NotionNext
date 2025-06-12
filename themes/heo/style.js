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
          display: flex;
          flex-wrap: wrap; // 添加换行
          gap: 20px; // 添加间距
          width: 30%; // 修改宽度为100%
          max-width: 30%;
          justify-content: flex-start; // 左对齐
      }

      .notion-row .notion-column {
          flex: 0 0 calc(33.333% - 14px); // 设置每列宽度为三分之一
          min-width: 300px; // 设置最小宽度
          margin: 0; // 重置边距
      }

       @media (max-width: 640px) {
          .notion-row {
            gap: 10px; // 移动端缩小间距
          }

          .notion-row .notion-column {
            flex: 0 0 calc(50% - 5px); // 移动端两列
            min-width: 150px; // 移动端最小宽度
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


import { useEffect, useState } from 'react'
import { getGlobalNotionData } from '@/lib/notion'
import { getNavItems } from '@/lib/notion/getNavItems' // 需要创建这个函数
import Container from '@/components/Container'
import Navigation from '@/components/Navigation'
import { siteConfig } from '@/lib/config'

export default function NavPage({ navItems }) {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    // 提取所有分类
    const allCategories = navItems
      .map(item => item.properties.Category?.select?.name)
      .filter(Boolean)
    
    // 去重
    setCategories([...new Set(allCategories)])
  }, [navItems])
  
  return (
    <Container title={`导航 - ${siteConfig.SITE_NAME}`}>
      <div className="navigation-page">
        <h1 className="nav-title">网站导航</h1>
        <p className="nav-description">收集了一些有用的网站和工具</p>
        
        <Navigation items={navItems} categories={categories} />
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const props = await getGlobalNotionData({ from: 'navigation-props' })
  
  // 获取导航项目数据
  const navItems = await getNavItems()
  
  return {
    props: {
      ...props,
      navItems
    },
    revalidate: 1
  }
}
import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from './navigation.module.css'

export const NavItem = ({ item }) => {
  return (
    <Link href={item.properties.URL.url} passHref>
      <a className={styles.navItem} target="_blank" rel="noopener noreferrer">
        <div className={styles.iconWrapper}>
          {item.properties.Icon?.files[0]?.file.url && (
            <img 
              src={item.properties.Icon.files[0].file.url} 
              alt={item.properties.Name.title[0].plain_text} 
              className={styles.icon}
            />
          )}
        </div>
        <h3 className={styles.title}>{item.properties.Name.title[0].plain_text}</h3>
        {item.properties.Description?.rich_text[0]?.plain_text && (
          <p className={styles.description}>{item.properties.Description.rich_text[0].plain_text}</p>
        )}
      </a>
    </Link>
  )
}

export const Navigation = ({ items, categories = [] }) => {
  const [activeCategory, setActiveCategory] = useState('全部')
  const [filteredItems, setFilteredItems] = useState(items)
  
  useEffect(() => {
    if (activeCategory === '全部') {
      setFilteredItems(items)
    } else {
      setFilteredItems(items.filter(item => 
        item.properties.Category?.select?.name === activeCategory
      ))
    }
  }, [activeCategory, items])
  
  return (
    <div className={styles.navigationContainer}>
      {categories.length > 0 && (
        <div className={styles.categories}>
          <button 
            className={`${styles.categoryBtn} ${activeCategory === '全部' ? styles.active : ''}`}
            onClick={() => setActiveCategory('全部')}
          >
            全部
          </button>
          {categories.map(category => (
            <button 
              key={category}
              className={`${styles.categoryBtn} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      
      <div className={styles.navGrid}>
        {filteredItems.map(item => (
          <NavItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Navigation
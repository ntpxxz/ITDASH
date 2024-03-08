import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/app/ui/dashboard/products/products.module.css'
import Search from '../../ui/dashboard/search/search'
import Pagination from '@/app/ui/dashboard/panigation/pagination'

const ProductsPage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
     <Search placeholder="Search for a product..."/>
     <Link href='/dashboard/products/add'>
     <button className={styles.addButton}>Add New</button>
   
   </Link>
   </div>
    <table className={styles.table}>
    <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Create At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><div className={styles.product}><Image src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage}></Image>IPhone11</div></td>
            <td>Desc</td>
            <td>998$</td>
            <td>04.03.2024</td>
            <td>20</td>
            <td>
              <div className={styles.buttons}>
              <Link href=''>
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>

              </div>
            </td>
          </tr>
          <tr>
            <td><div className={styles.product}><Image src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage}></Image>IPhone99</div></td>
            <td>Desc</td>
            <td>998$</td>
            <td>04.03.2024</td>
            <td>20</td>
            <td>
              <div className={styles.buttons}>
              <Link href='/dashboard/products/test'>
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>

              </div>
            </td>
          </tr>

        </tbody>
    </table>
    <Pagination/>
 </div>
  )
}

export default ProductsPage

import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import React from 'react'
import Image from 'next/image'

const SingleUserPage  = () => {
  return (
    <div className={styles.container}>
<div className={styles.infoContainer}>
<div className={styles.imgContainer}>
<Image src="/noavatar.png" alt=""fill/>
</div>
Sam Smith
</div>
<div className={styles.formContainer}>
  <form action=""className={styles.form}>
<label>Username</label>
<input type="text" name='username' placeholder='Sam Smith'/>
<label>Email</label>
<input type="email" name='email' placeholder='sample@samail.com'/>
<label>Password</label>
<input type="password" name='password' placeholder=''/>
<label>Phone</label>
<input type="text" name='phone' placeholder='+669585258412'/>
<label>Address</label>
<textarea type="text" name='address' placeholder='Thailand'/>
<label>Is Admin</label>
      <select name="isAdmin" id="isAdmin">
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>
<label>Is Active</label>
      <select name="isActive" id="isActive">
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>
<button>Update</button>
      </form>



</div>
    </div>
  )
}

export default SingleUserPage 
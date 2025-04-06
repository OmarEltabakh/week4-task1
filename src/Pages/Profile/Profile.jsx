
import styles from "./Profile.module.css";
export default function Profile() {


    const passwordFields = [
        { placeholder: 'Current Password', name: 'currentPassword' },
        { placeholder: 'New Password', name: 'newPassword' },
        { placeholder: 'Confirm New Password', name: 'confirmNewPassword' },
    ];

    return <>

        {/* profilePage */}
        <section className={`${styles.profilePage}`}>

            {/* profileContainer */}
            <div className={`${styles.profileContainer} specialContainer`}>

                {/* profileHeader */}
                <div className={`${styles.profileHeader}`}>

                    <h3><span>Home</span> / My Account</h3>

                </div>




                {/* profileEditContainer */}
                <div className={`${styles.profileEditContainer}`}>


                    {/* sidebar */}
                    <div className={`${styles.sidebar}  `}>


                        <div className={`${styles.sidebarContainer}`}>
                            <h3>Manage My Account</h3>

                            <ul>
                                <li className={`${styles.active}`}>My Profile</li>
                                <li>Address Book</li>
                                <li>My Payment Options</li>
                            </ul>

                            <h3>My Orders</h3>
                            <ul>
                                <li>My Returns</li>
                                <li>My Cancellations</li>
                            </ul>
                            <h3>My WishList</h3>
                        </div>
                    </div>


                    {/* mainContent */}
                    <div className={`${styles.mainContent}`}>

                        <h2 className={`${styles.profileTitle}`}>Edit Your Profile</h2>

                        {/* profileForm */}
                        <form className={`${styles.profileForm}`}>

                            {/* inputWrapper */}
                            <div className={`${styles.inputWrapper} `}>

                                <div className={`${styles.inputGroup}`}>
                                    <label>First Name</label>
                                    <input type="text" placeholder="Md" />
                                </div>

                                <div className={`${styles.inputGroup}`}>
                                    <label>Last Name</label>
                                    <input type="text" placeholder="Rimel" />
                                </div>
                            </div>

                            {/* inputWrapper */}
                            <div className={`${styles.inputWrapper}`}>

                                <div className={`${styles.inputGroup}`}>
                                    <label>Email</label>
                                    <input type="email" placeholder="rimel1111@gmail.com" />
                                </div>

                                <div className={`${styles.inputGroup}`}>
                                    <label>Address</label>
                                    <input type="text" placeholder="Kingston, 5236, United State" />
                                </div>

                            </div>

                            {/* passwordChanges */}
                            <div className={`${styles.passwordChanges}`}>

                                <h3 className={`${styles.sectionTitle}`}>Password Changes</h3>

                                {passwordFields.map((field) => (
                                    <div key={field.name}>
                                        <input type="password" name={field.name} placeholder={field.placeholder} />
                                    </div>
                                ))}
                            </div>

                            {/* buttonGroup */}
                            <div className={`${styles.buttonGroup}`}>
                                <button type="button" className={`${styles.cancelButton}`}>Cancel</button>
                                <button type="submit" className={`${styles.saveButton}`}>Save Changes</button>
                            </div>
                        </form>
                    </div>


                </div>


            </div>

        </section>



    </>
}

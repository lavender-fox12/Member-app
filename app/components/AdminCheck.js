// import React, { useState, useEffect } from 'react';
import { auth, app } from '../navigation/firebase';
import { doc, getFirestore, getDoc } from 'firebase/firestore';

const db = getFirestore(app);

// const AdminView = async ({ children, props }) => {
//     const [isAdmin, setIsAdmin] = useState(null);

//     useEffect(() => {
//       const checkAdminStatus = async () => {
//         const adminStatus = await checkIsAdmin();
//         setIsAdmin(adminStatus);
//       };
  
//       setInterval(() => {
//         checkAdminStatus();
//       }, 1000);
//     }, []);

//     if ((!props.inverted && isAdmin) || (props.inverted && !isAdmin)) {
//         return (
//             <>
//                 {children}
//             </>
//         );
//     } else {
//         return (<></>);
//     }
// };

const adminCheck = async () => {
    const userId = await waitForUserId();
    const userDoc = await getDoc(doc(db, `users/${userId}`));
  
    if (userDoc.data() === undefined) return false;
    const userRole = userDoc.data().role;
  
    return userRole === 'admin';
}

async function waitForUserId() {
    const getUserId = () => {
        return new Promise((resolve, reject) => {
            const user = auth.currentUser;
            if (user && user.uid) {
                resolve(user.uid);
            } else {
                reject(new Error('User ID is not available'));
            }
        });
    };

    try {
        let userId;
        const timeout = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Timeout: User was not retrieved in time.')), 5000)
        );

        while (!userId) {
            userId = await Promise.race([getUserId(), timeout]);
        }

        return userId;
    } catch (error) {
        // throw error;
    }
}

export default adminCheck;
import { auth, app } from '../navigation/firebase';
import { doc, getFirestore, getDoc } from 'firebase/firestore';

const db = getFirestore(app);

const pointsCheck = async () => {
    const userId = await waitForUserId();
    const userDoc = await getDoc(doc(db, `users/${userId}`));
  
    if (userDoc.data() === undefined) return null;
    const points = userDoc.data().points;
  
    return points;
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
        return null;
    }
}

export default pointsCheck;
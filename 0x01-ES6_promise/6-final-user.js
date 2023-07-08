import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpUserPromise, uploadPhotoPromise]).then((outArray) => {
    const output = [];
    outArray.forEach((element) => {
      if (element.status === 'fulfilled') {
        output.push({ status: element.status, value: element.value });
      } else {
        output.push({ status: element.status, value: `${element.reason}` });
      }
    });
    return output;
  });
}

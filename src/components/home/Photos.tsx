import { UserCompo } from '@/components/home/UserCompo';
import { Metadata } from 'next';
import { Suspense } from 'react';

const getPhotos = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Photos() {
  const photos = await getPhotos();
  return (
    <>
      <div className="col-6">
        <h1>Title: photos</h1>
        {photos.map((el: any) => (
          <p>{el.url}</p>
        ))}
      </div>
    </>
  );
}

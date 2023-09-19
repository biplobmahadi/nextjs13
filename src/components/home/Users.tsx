import { UserCompo } from '@/components/home/UserCompo';
import { Metadata } from 'next';

const getUsers = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function UsersC() {
  const data = await getUsers();
  return (
    <>
      <div className="col-6">
        <h1>Title: Users</h1>
        {data.map((el: any) => (
          <p>{el.name}</p>
        ))}
      </div>
    </>
  );
}

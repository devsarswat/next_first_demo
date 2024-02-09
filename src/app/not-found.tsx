import Link from "next/link";


const NotFound = () => {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Sorry this page you are looking for dose not exist</p>
      <Link href="/">
        Go back home
      </Link>
    </div>
  );
};
export default NotFound;
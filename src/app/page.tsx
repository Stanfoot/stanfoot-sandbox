import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Sandbox</h1>
      <nav>
        <ul className="pl-8">
          <li className="list-disc">
            <Link href="/test-camera" className="text-blue-500 underline">
              test-camera
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

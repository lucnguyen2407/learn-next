import Link from "next/link";
import { lusitana } from "../fonts";

export default function RegisterBox() {
  return (
    <div className="mt-4">
      <div className="rounded-lg bg-gray-50 px-6 py-4 text-center border border-gray-200 shadow-sm">
        <span className="text-sm text-gray-700">Don't have an account? </span>
        <Link
          href="/register"
          className="text-sm text-blue-600 hover:underline font-medium">
          Sign up
        </Link>
      </div>
    </div>
  );
}

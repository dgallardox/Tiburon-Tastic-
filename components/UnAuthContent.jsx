import { useEffect, ReactNode } from "react";
import { useRouter } from "next/router";

import useAuth from "../hooks/useAuth";
import { useDebugValue } from "react/cjs/react.production.min";

export default function UnAuthContent({children}) {
  const { loggedIn, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && loggedIn) {
      router.push('/members');
    }
  }, [loggedIn, loading, router]);

  if (!loggedIn) {
    return <>{children}</>
  }

  return <p>Loading...</p>
}